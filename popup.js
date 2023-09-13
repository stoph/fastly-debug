
const interestingHeaders = ["Surrogate-Control", "Surrogate-Key", "Age", "Fastly-Debug-Path", "Fastly-Debug-TTL", "X-Served-By", "X-Cache", "X-Cache-Hits"];

const pops = [
  {"location":"Adelaide","pop_id":"ADL","geo":"-34.9285, 138.6007","geo_url":"https://www.google.com/maps/search/?api=1&query=-34.9285,138.6007"},{"location":"Amsterdam","pop_id":"AMS","geo":"52.308613, 4.763889","geo_url":"https://www.google.com/maps/search/?api=1&query=52.308613,4.763889"},{"location":"Ashburn","pop_id":"DCA","geo":"38.944533, -77.455811","geo_url":"https://www.google.com/maps/search/?api=1&query=38.944533,-77.455811"},{"location":"Ashburn","pop_id":"IAD","geo":"38.944533, -77.455811","geo_url":"https://www.google.com/maps/search/?api=1&query=38.944533,-77.455811"},{"location":"Ashburn","pop_id":"WDC","geo":"39.022, -77.451","geo_url":"https://www.google.com/maps/search/?api=1&query=39.022,-77.451"},{"location":"Atlanta","pop_id":"ATL","geo":"33.636719, -84.428067","geo_url":"https://www.google.com/maps/search/?api=1&query=33.636719,-84.428067"},{"location":"Atlanta","pop_id":"FTY","geo":"33.636719, -84.428067","geo_url":"https://www.google.com/maps/search/?api=1&query=33.636719,-84.428067"},{"location":"Atlanta","pop_id":"PDK","geo":"33.876819, -84.302921","geo_url":"https://www.google.com/maps/search/?api=1&query=33.876819,-84.302921"},{"location":"Auckland","pop_id":"AKL","geo":"-37.008056, 174.791667","geo_url":"https://www.google.com/maps/search/?api=1&query=-37.008056,174.791667"},{"location":"Bangkok","pop_id":"BKK","geo":"13.756, 100.501","geo_url":"https://www.google.com/maps/search/?api=1&query=13.756,100.501"},{"location":"Bogota","pop_id":"BOG","geo":"4.711, -74.072","geo_url":"https://www.google.com/maps/search/?api=1&query=4.711,-74.072"},{"location":"Boston","pop_id":"BOS","geo":"42.364347, -71.005181","geo_url":"https://www.google.com/maps/search/?api=1&query=42.364347,-71.005181"},{"location":"Brisbane","pop_id":"BNE","geo":"-27.384167, 153.1175","geo_url":"https://www.google.com/maps/search/?api=1&query=-27.384167,153.1175"},{"location":"Brussels","pop_id":"BRU","geo":"50.871, 4.476","geo_url":"https://www.google.com/maps/search/?api=1&query=50.871,4.476"},{"location":"Buenos Aires","pop_id":"EZE","geo":"-34.815, -58.5348","geo_url":"https://www.google.com/maps/search/?api=1&query=-34.815,-58.5348"},{"location":"Calgary","pop_id":"YYC","geo":"51.047, -114.08","geo_url":"https://www.google.com/maps/search/?api=1&query=51.047,-114.08"},{"location":"Cape Town","pop_id":"CPT","geo":"-33.97, 18.464","geo_url":"https://www.google.com/maps/search/?api=1&query=-33.97,18.464"},{"location":"Chennai","pop_id":"MAA","geo":"12.9941, 80.1709","geo_url":"https://www.google.com/maps/search/?api=1&query=12.9941,80.1709"},{"location":"Chicago","pop_id":"CHI","geo":"41.863, -87.641","geo_url":"https://www.google.com/maps/search/?api=1&query=41.863,-87.641"},{"location":"Christchurch","pop_id":"CHC","geo":"-43.532, 172.636","geo_url":"https://www.google.com/maps/search/?api=1&query=-43.532,172.636"},{"location":"Columbus","pop_id":"CMH","geo":"40.116, -83.002","geo_url":"https://www.google.com/maps/search/?api=1&query=40.116,-83.002"},{"location":"Columbus","pop_id":"LCK","geo":"40.116, -83.002","geo_url":"https://www.google.com/maps/search/?api=1&query=40.116,-83.002"},{"location":"Copenhagen","pop_id":"CPH","geo":"55.728081, 12.37752","geo_url":"https://www.google.com/maps/search/?api=1&query=55.728081,12.37752"},{"location":"Curitiba","pop_id":"CWB","geo":"-25.4809, -49.3044","geo_url":"https://www.google.com/maps/search/?api=1&query=-25.4809,-49.3044"},{"location":"Dallas","pop_id":"ADS","geo":"32.896828, -97.037997","geo_url":"https://www.google.com/maps/search/?api=1&query=32.896828,-97.037997"},{"location":"Dallas","pop_id":"DFW","geo":"32.896828, -97.037997","geo_url":"https://www.google.com/maps/search/?api=1&query=32.896828,-97.037997"},{"location":"Delhi","pop_id":"DEL","geo":"28.506912, 77.378557","geo_url":"https://www.google.com/maps/search/?api=1&query=28.506912,77.378557"},{"location":"Denver","pop_id":"DEN","geo":"39.861656, -104.673178","geo_url":"https://www.google.com/maps/search/?api=1&query=39.861656,-104.673178"},{"location":"Detroit","pop_id":"DTW","geo":"42.448, -83.263","geo_url":"https://www.google.com/maps/search/?api=1&query=42.448,-83.263"},{"location":"Dubai","pop_id":"DXB","geo":"25.032, 55.19","geo_url":"https://www.google.com/maps/search/?api=1&query=25.032,55.19"},{"location":"Dublin","pop_id":"DUB","geo":"53.35, -6.26","geo_url":"https://www.google.com/maps/search/?api=1&query=53.35,-6.26"},{"location":"Fortaleza","pop_id":"FOR","geo":"-3.735, -38.458","geo_url":"https://www.google.com/maps/search/?api=1&query=-3.735,-38.458"},{"location":"Frankfurt","pop_id":"FRA","geo":"50.026421, 8.543125","geo_url":"https://www.google.com/maps/search/?api=1&query=50.026421,8.543125"},{"location":"Frankfurt","pop_id":"WIE","geo":"50.11975, 8.738472","geo_url":"https://www.google.com/maps/search/?api=1&query=50.11975,8.738472"},{"location":"Fujairah Al Mahta","pop_id":"FJR","geo":"25.112225, 56.323964","geo_url":"https://www.google.com/maps/search/?api=1&query=25.112225,56.323964"},{"location":"Gainesville","pop_id":"GNV","geo":"29.6516, -82.3248","geo_url":"https://www.google.com/maps/search/?api=1&query=29.6516,-82.3248"},{"location":"Ghana","pop_id":"ACC","geo":"5.573, -0.203","geo_url":"https://www.google.com/maps/search/?api=1&query=5.573,-0.203"},{"location":"Helsinki","pop_id":"HEL","geo":"60.1699, 24.9384","geo_url":"https://www.google.com/maps/search/?api=1&query=60.1699,24.9384"},{"location":"Hong Kong","pop_id":"HKG","geo":"22.308919, 113.914603","geo_url":"https://www.google.com/maps/search/?api=1&query=22.308919,113.914603"},{"location":"Honolulu","pop_id":"HNL","geo":"21.364, -157.869","geo_url":"https://www.google.com/maps/search/?api=1&query=21.364,-157.869"},{"location":"Houston","pop_id":"IAH","geo":"29.99022, -95.336783","geo_url":"https://www.google.com/maps/search/?api=1&query=29.99022,-95.336783"},{"location":"Hyderabad","pop_id":"HYD","geo":"17.442, 78.378","geo_url":"https://www.google.com/maps/search/?api=1&query=17.442,78.378"},{"location":"Johannesburg","pop_id":"JNB","geo":"-26.13778, 28.19756","geo_url":"https://www.google.com/maps/search/?api=1&query=-26.13778,28.19756"},{"location":"Kansas City","pop_id":"MCI","geo":"39.101, -94.581","geo_url":"https://www.google.com/maps/search/?api=1&query=39.101,-94.581"},{"location":"Kolkata","pop_id":"CCU","geo":"22.588, 88.393","geo_url":"https://www.google.com/maps/search/?api=1&query=22.588,88.393"},{"location":"Kuala Lumpur","pop_id":"KUL","geo":"3.149, 101.706","geo_url":"https://www.google.com/maps/search/?api=1&query=3.149,101.706"},{"location":"Lima","pop_id":"LIM","geo":"-12.088902, -76.973405","geo_url":"https://www.google.com/maps/search/?api=1&query=-12.088902,-76.973405"},{"location":"Lisbon","pop_id":"LIS","geo":"38.788, -9.123","geo_url":"https://www.google.com/maps/search/?api=1&query=38.788,-9.123"},{"location":"London","pop_id":"LCY","geo":"51.505278, 0.055278","geo_url":"https://www.google.com/maps/search/?api=1&query=51.505278,0.055278"},{"location":"London","pop_id":"LHR","geo":"51.4775, -0.461389","geo_url":"https://www.google.com/maps/search/?api=1&query=51.4775,-0.461389"},{"location":"London","pop_id":"LON","geo":"51.499, -0.011","geo_url":"https://www.google.com/maps/search/?api=1&query=51.499,-0.011"},{"location":"Los Angeles","pop_id":"BUR","geo":"34.198312, -118.357404","geo_url":"https://www.google.com/maps/search/?api=1&query=34.198312,-118.357404"},{"location":"Los Angeles","pop_id":"LGB","geo":"33.942536, -118.408075","geo_url":"https://www.google.com/maps/search/?api=1&query=33.942536,-118.408075"},{"location":"Madrid","pop_id":"MAD","geo":"40.439323, -3.621211","geo_url":"https://www.google.com/maps/search/?api=1&query=40.439323,-3.621211"},{"location":"Manchester","pop_id":"MAN","geo":"53.4808, -2.2426","geo_url":"https://www.google.com/maps/search/?api=1&query=53.4808,-2.2426"},{"location":"Manila","pop_id":"MNL","geo":"14.566, 121.022","geo_url":"https://www.google.com/maps/search/?api=1&query=14.566,121.022"},{"location":"Marseille","pop_id":"MRS","geo":"43.311, 5.373","geo_url":"https://www.google.com/maps/search/?api=1&query=43.311,5.373"},{"location":"Melbourne","pop_id":"MEL","geo":"-37.673333, 144.843333","geo_url":"https://www.google.com/maps/search/?api=1&query=-37.673333,144.843333"},{"location":"Miami","pop_id":"MIA","geo":"25.79325, -80.290556","geo_url":"https://www.google.com/maps/search/?api=1&query=25.79325,-80.290556"},{"location":"Milan","pop_id":"LIN","geo":"45.47, 9.036","geo_url":"https://www.google.com/maps/search/?api=1&query=45.47,9.036"},{"location":"Milan","pop_id":"MXP","geo":"45.4642, 9.19","geo_url":"https://www.google.com/maps/search/?api=1&query=45.4642,9.19"},{"location":"Minneapolis","pop_id":"MSP","geo":"44.971401, -93.254501","geo_url":"https://www.google.com/maps/search/?api=1&query=44.971401,-93.254501"},{"location":"Minneapolis","pop_id":"STP","geo":"44.971401, -93.254501","geo_url":"https://www.google.com/maps/search/?api=1&query=44.971401,-93.254501"},{"location":"Montreal","pop_id":"YUL","geo":"45.497497, -73.570959","geo_url":"https://www.google.com/maps/search/?api=1&query=45.497497,-73.570959"},{"location":"Mumbai","pop_id":"BOM","geo":"18.975, 72.825833","geo_url":"https://www.google.com/maps/search/?api=1&query=18.975,72.825833"},{"location":"Munich","pop_id":"MUC","geo":"48.143, 11.555","geo_url":"https://www.google.com/maps/search/?api=1&query=48.143,11.555"},{"location":"New York City","pop_id":"LGA","geo":"40.639751, -73.778925","geo_url":"https://www.google.com/maps/search/?api=1&query=40.639751,-73.778925"},{"location":"New York City","pop_id":"NYC","geo":"40.778, -74.073","geo_url":"https://www.google.com/maps/search/?api=1&query=40.778,-74.073"},{"location":"Newark","pop_id":"EWR","geo":"40.736844, -74.173402","geo_url":"https://www.google.com/maps/search/?api=1&query=40.736844,-74.173402"},{"location":"Osaka","pop_id":"ITM","geo":"34.785528, 135.438222","geo_url":"https://www.google.com/maps/search/?api=1&query=34.785528,135.438222"},{"location":"Oslo","pop_id":"OSL","geo":"59.922, 10.809","geo_url":"https://www.google.com/maps/search/?api=1&query=59.922,10.809"},{"location":"Palermo","pop_id":"PMO","geo":"38.1607109, 13.3157489","geo_url":"https://www.google.com/maps/search/?api=1&query=38.1607109,13.3157489"},{"location":"Palo Alto","pop_id":"PAO","geo":"37.454965, -122.110783","geo_url":"https://www.google.com/maps/search/?api=1&query=37.454965,-122.110783"},{"location":"Paris","pop_id":"PAR","geo":"48.856654, 2.38532","geo_url":"https://www.google.com/maps/search/?api=1&query=48.856654,2.38532"},{"location":"Perth","pop_id":"PER","geo":"-31.940278, 115.966944","geo_url":"https://www.google.com/maps/search/?api=1&query=-31.940278,115.966944"},{"location":"Phoenix","pop_id":"PHX","geo":"33.396, -111.97","geo_url":"https://www.google.com/maps/search/?api=1&query=33.396,-111.97"},{"location":"Portland","pop_id":"PDX","geo":"45.552, -122.914","geo_url":"https://www.google.com/maps/search/?api=1&query=45.552,-122.914"},{"location":"Rio de Janeiro","pop_id":"GIG","geo":"-22.81341, -43.249423","geo_url":"https://www.google.com/maps/search/?api=1&query=-22.81341,-43.249423"},{"location":"Rome","pop_id":"FCO","geo":"41.89891, 12.51206","geo_url":"https://www.google.com/maps/search/?api=1&query=41.89891,12.51206"},{"location":"San Jose","pop_id":"SJC","geo":"37.3626, -121.929022","geo_url":"https://www.google.com/maps/search/?api=1&query=37.3626,-121.929022"},{"location":"San Jose","pop_id":"WVI","geo":"37.242, -121.782","geo_url":"https://www.google.com/maps/search/?api=1&query=37.242,-121.782"},{"location":"Santiago","pop_id":"SCL","geo":"-33.3936, -70.7935","geo_url":"https://www.google.com/maps/search/?api=1&query=-33.3936,-70.7935"},{"location":"Sao Paulo","pop_id":"CGH","geo":"-23.498, -46.815","geo_url":"https://www.google.com/maps/search/?api=1&query=-23.498,-46.815"},{"location":"Sao Paulo","pop_id":"GRU","geo":"-23.432075, -46.469511","geo_url":"https://www.google.com/maps/search/?api=1&query=-23.432075,-46.469511"},{"location":"Seattle","pop_id":"BFI","geo":"47.449, -122.309306","geo_url":"https://www.google.com/maps/search/?api=1&query=47.449,-122.309306"},{"location":"Seoul","pop_id":"ICN","geo":"36.38, 128.124","geo_url":"https://www.google.com/maps/search/?api=1&query=36.38,128.124"},{"location":"Singapore","pop_id":"QPG","geo":"1.350189, 103.994433","geo_url":"https://www.google.com/maps/search/?api=1&query=1.350189,103.994433"},{"location":"Sofia","pop_id":"SOF","geo":"42.703, 23.306","geo_url":"https://www.google.com/maps/search/?api=1&query=42.703,23.306"},{"location":"St.Louis","pop_id":"STL","geo":"38.629, -90.197","geo_url":"https://www.google.com/maps/search/?api=1&query=38.629,-90.197"},{"location":"Stockholm","pop_id":"BMA","geo":"59.354372, 17.94165","geo_url":"https://www.google.com/maps/search/?api=1&query=59.354372,17.94165"},{"location":"Sydney","pop_id":"SYD","geo":"-33.946111, 151.177222","geo_url":"https://www.google.com/maps/search/?api=1&query=-33.946111,151.177222"},{"location":"Tokyo","pop_id":"HND","geo":"35.622281, 139.748426","geo_url":"https://www.google.com/maps/search/?api=1&query=35.622281,139.748426"},{"location":"Tokyo","pop_id":"NRT","geo":"35.617, 139.748","geo_url":"https://www.google.com/maps/search/?api=1&query=35.617,139.748"},{"location":"Tokyo","pop_id":"TYO","geo":"35.617, 139.748","geo_url":"https://www.google.com/maps/search/?api=1&query=35.617,139.748"},{"location":"Toronto","pop_id":"YYZ","geo":"43.677223, -79.630556","geo_url":"https://www.google.com/maps/search/?api=1&query=43.677223,-79.630556"},{"location":"Vancouver","pop_id":"YVR","geo":"49.1967, -123.1815","geo_url":"https://www.google.com/maps/search/?api=1&query=49.1967,-123.1815"},{"location":"Vienna","pop_id":"VIE","geo":"48.269, 16.41","geo_url":"https://www.google.com/maps/search/?api=1&query=48.269,16.41"},{"location":"Wellington","pop_id":"WLG","geo":"-41.327221, 174.805278","geo_url":"https://www.google.com/maps/search/?api=1&query=-41.327221,174.805278"}
];
let showCopyButton = false;

// Populate button text
document.querySelectorAll('[data-i18n]').forEach(el => {
  el.textContent = chrome.i18n.getMessage(el.getAttribute('data-i18n'));
});

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
    // // Debug view all headers
    // console.log(response);
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
              popInfoArray = [];
              headerValues = headerValue.split(',');
              headerValues.forEach(cacheName => {
                // Extract POP info
                popInfo = getPopInfo(cacheName);
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
              regex = /\((H|M) ([\w-]+) ([\d.-]+) ([\d.-]+) ([\d.-]+)\)/g;
              matches = Array.from(headerValue.matchAll(regex));
              parsedData = matches.map(match => {
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
                popInfo = getPopInfo(cacheName);
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
              regex = /\((D|F) ([\w-]+) (\d+)\)/g;
              matches = Array.from(headerValue.matchAll(regex));
              parsedData = matches.map(match => {
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
                popInfo = getPopInfo(cacheName);
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
            firstValue = value.shift();
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
    }

    document.getElementById("headers").innerHTML = displayText;
    if (showCopyButton) {
      copyButton = document.getElementById("copy");
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
    console.log("Content copied");
  } catch (err) {
    console.log("Failed to copy content: ", err);
  }

  selection.removeAllRanges();
}

// Copy element's contents to clipboard
copyButton = document.getElementById("copy");
copyButton.addEventListener("click", function() {
  copyToClipboard("headers");
});