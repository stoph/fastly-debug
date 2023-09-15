// Track basic usage
// No private or identifiable information is sent, 
// only a random ID as the 'distinct id'
sendToMixpanel("Popup Opened");

// List of headers to display
// TODO: Allow additional headers to be added by the user
const interestingHeaders = [
  "Surrogate-Control",
  "Surrogate-Key",
  "Age",
  "Fastly-Debug-Path",
  "Fastly-Debug-TTL",
  "X-Served-By",
  "X-Cache",
  "X-Cache-Hits"
];

// Import information about Fastly pop locations
import { pops } from './pops.js';

let showCopyButton = false;
const copyButton = document.getElementById("copy");

// Populate localized text
document.querySelectorAll('[data-i18n]').forEach(el => {
  el.textContent = chrome.i18n.getMessage(el.getAttribute('data-i18n'));
});

// Main thread
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let currentTab = tabs[0];

  let displayText = "";
  
  fetch(currentTab.url, {
    headers: {
      'Fastly-Debug': '1'
    }
  })
  .then(response => {
    const headers = response.headers;
    // // Debug: view all headers
    // console.log("fetch() response", response);
    // for (let [key, value] of response.headers.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    if (response) {
      let headerData = {};
  
      interestingHeaders.forEach(headerName => {
        let headerValue = headers.get(headerName);
        if (headerValue) {
          switch (headerName) {
            case "Age":
              headerData[headerName] = `${humanReadableTime(headerValue)} [${headerValue}]`;
              break;

            case "X-Served-By":
              // Example: cache-ewr18126-EWR, cache-pdk-kpdk1780094-PDK";
              let popInfoArray = [];
              let headerValues = headerValue.split(',');
              headerValues.forEach(cacheName => {
                // Extract POP info
                var popInfo = getPopInfo(cacheName);
                if (popInfo) {
                  popInfoArray.push(`<a href="${popInfo.geo_url}">${popInfo.location}</a>`);
                } else {
                  popInfoArray.push(`Unknown POP`);
                }
              });

              if (popInfoArray.length !== 0) {
                headerValue = popInfoArray.join(", ") + ` [${headerValue}]`;
              } else {
                headerValue = `Unknown POP [${headerValue}]`;
              }
              headerData[headerName] = headerValue;
              break;

            case "Fastly-Debug-TTL":
              // Example: (H cache-iad-kcgs7200170-IAD - - 4511)
              var regex = /\((H|M) ([\w-]+) ([\d.-]+) ([\d.-]+) ([\d.-]+)\)/g;
              var matches = Array.from(headerValue.matchAll(regex));
              var parsedData = matches.map(match => {
                let [_, action, cacheName, ttl, gracePeriod, currentAge] = match;
                // Decipher action
                switch (action) {
                  case "H":
                    action = "Cache Hit [H]";
                    break;
                  case "M":
                    action = "Cache Miss [M]";
                    break;
                }
                // Extract POP info from cacheName
                var popInfo = getPopInfo(cacheName);
                if (popInfo) {
                  cacheName = `<a href="${popInfo.geo_url}">${popInfo.location}</a> [${cacheName}]`;
                } else {
                  cacheName = `Unknown POP [${cacheName}]`;
                }
                
                // Format currentAge
                currentAge = `${humanReadableTime(currentAge)} [${currentAge}]`;

                return { action, cacheName, ttl, gracePeriod, currentAge };
              });
              // Add the original value to the front of the array
              parsedData.unshift({org: headerValue});
              headerData[headerName] = parsedData;
              break;

            case "Fastly-Debug-Path":
              // Example: (D cache-iad-kcgs7200170-IAD 1694489375)
              var regex = /\((D|F) ([\w-]+) (\d+)\)/g;
              var matches = Array.from(headerValue.matchAll(regex));
              var parsedData = matches.map(match => {
                let [_, action, cacheName, timestamp] = match;
                // Decipher action
                switch (action) {
                  case "D":
                    action = "vcl_deliver [D]";
                    break;
                  case "F":
                    action = "vcl_fetch [F]";
                    break;
                }
                // Extract POP info from cacheName
                var popInfo = getPopInfo(cacheName);
                if (popInfo) {
                  cacheName = `<a href="${popInfo.geo_url}">${popInfo.location}</a> [${cacheName}]`;
                } else {
                  cacheName = `Unknown POP [${cacheName}]`;
                }
                
                // Format timestamp
                const date = new Date(timestamp * 1000).toLocaleString();
                timestamp = `${date} [${timestamp}]`;

                return { action, cacheName, timestamp };
              });
              // Add the original value to the front of the array
              parsedData.unshift({org: headerValue});
              headerData[headerName] = parsedData;
              break;

            default:
              headerData[headerName] = headerValue;
              break;
          }
        }
      });

      if (!isEmpty(headerData)) {
        displayText += `<ul class="headers-list">`;
        for (const [name, value] of Object.entries(headerData)) {
          displayText += `<li><span class="headers-name">${name}: </span>`;
          if (Array.isArray(value)) {
            let firstValue = value.shift();
            displayText += `<span class="headers-value">${firstValue.org}</span>`;

            for (let obj of value) {
              displayText += `<ul class="headers-parsed-list">`;
              for (let [name, val] of Object.entries(obj)) {
                displayText += `
                <li class="headers-parsed-list-item">
                  - <span class="headers-parsed-name">${name}</span>: 
                  <span class="headers-parsed-value"> ${val}</span>
                </li>`;
              }
              displayText += `</ul>`;
              displayText += `<br>`;
            }
          } else {
            displayText += `<span class="headers-value">${value}</span>`;
          }
          displayText += `</li>`;
        }
        displayText += `</ul>`;
        
        showCopyButton = true;
      } else {
        displayText = `<div class="no-headers">No interesting headers found</div>`;
      }
    } else {
      displayText = `<div class="no-headers">URL failed to respond</div>`;
    }

    document.getElementById("headers").innerHTML = displayText;
    if (showCopyButton) {
      copyButton.style.display = "block";
    }

    // Make links work with extension security policy for popups
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        chrome.tabs.create({ url: this.href });
      });
    });
    
  })
  // .catch(error => {
  //   console.error("Fetch failed:", error);
  // });
});

/**
 * Converts seconds to a human-readable format of days, hours, minutes and seconds.
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} A string representing the human-readable format of the input seconds.
 */
function humanReadableTime(seconds) {
  let humanized = "";
  if (seconds > 86400) {
    humanized = `${Math.floor(seconds / 86400)}d `;
    seconds = seconds % 86400;
  }
  if (seconds > 3600) {
    humanized += `${Math.floor(seconds / 3600)}h `;
    seconds = seconds % 3600;
  }
  if (seconds > 60) {
    humanized += `${Math.floor(seconds / 60)}m `;
    seconds = seconds % 60;
  }
  humanized += `${seconds}s`;

  return humanized;
}

/**
 * Checks if an object is empty.
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns true if the object is empty, false otherwise.
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Returns the popInfo object for a given cacheName.
 *
 * @param {string} cacheName - The name of the cache.
 * @returns {Object} The popInfo object for the given cacheName.
 */
function getPopInfo(cacheName) {
  const pop = cacheName.split("-").pop();
  const popInfo = pops.find(pops => pops.pop_id === pop);

  return popInfo;
}

/**
 * Copies the content of an element to the clipboard.
 * @param {string} elementId - The ID of the element to copy.
 * @returns {Promise<void>} - A promise that resolves when the content is successfully copied to the clipboard.
 */
async function copyToClipboard(elementId) {
  const headersDiv = document.getElementById(elementId);
  const range = document.createRange();
  range.selectNode(headersDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  const text = selection.toString();
  const html = headersDiv.outerHTML;

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([text], { type: "text/plain" }),
        //"text/html": new Blob([html], { type: "text/html" })
      })
    ]);
  } catch (err) {
    console.log("Failed to copy content: ", err);
  }

  selection.removeAllRanges();
}

// Copy element's contents to clipboard
copyButton.addEventListener("click", function() {
  copyToClipboard("headers");
});

/**
 * Sends an event to Mixpanel.
 * @param {string} eventName - The name of the event.
 * @param {Object} eventProperties - Additional properties for the event (optional).
 * @returns {Promise<void>} - A promise that resolves when the event is sent.
 */
async function sendToMixpanel(eventName, eventProperties = {}) {
  const token = "22434d0c26e80542efe827d93664298d";
  const sessionId = await getSessionId();

  const eventData = {
    event: eventName,
    properties: {
      token: token,
      distinct_id: sessionId,
      ...eventProperties
    }
  };
  const base64Event = btoa(JSON.stringify(eventData));
  const data = `data=${base64Event}`;

  fetch("https://api.mixpanel.com/track/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  })

}

/**
 * Retrieves the session ID from Chrome storage.
 * If a session ID exists, it is returned. Otherwise, a new session ID is generated and stored.
 * @returns {Promise<string>} The session ID.
 */
async function getSessionId() {
  const sessionId = await new Promise((resolve, reject) => {
    chrome.storage.sync.get(['sessionId'], result => {
      resolve(result.sessionId);
    });
  });

  if (sessionId) {
    return sessionId;
  } else {
    const newSessionId = Math.random().toString(36).substr(2, 9);
    chrome.storage.sync.set({ 'sessionId': newSessionId });
    return newSessionId;
  }
}

