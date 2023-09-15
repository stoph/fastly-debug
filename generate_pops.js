// Make new pops object for "pops" variable in popup.js
// Copy locations from  https://developer.fastly.com/learning/concepts/pop#complete-list-of-pops
// to rawData below and run in console
const rawData = `Adelaide	ADL	-34.9285, 138.6007
Amsterdam	AMS	52.308613, 4.763889
Ashburn	DCA	38.944533, -77.455811
Ashburn	IAD	38.944533, -77.455811
Ashburn	WDC	39.022, -77.451
Atlanta	ATL	33.636719, -84.428067
Atlanta	FTY	33.636719, -84.428067
Atlanta	PDK	33.876819, -84.302921
Auckland	AKL	-37.008056, 174.791667
Bangkok	BKK	13.756, 100.501
Bogota	BOG	4.711, -74.072
Boston	BOS	42.364347, -71.005181
Brisbane	BNE	-27.384167, 153.1175
Brussels	BRU	50.871, 4.476
Buenos Aires	EZE	-34.815, -58.5348
Calgary	YYC	51.047, -114.08
Cape Town	CPT	-33.97, 18.464
Chennai	MAA	12.9941, 80.1709
Chicago	CHI	41.863, -87.641
Christchurch	CHC	-43.532, 172.636
Columbus	CMH	40.116, -83.002
Columbus	LCK	40.116, -83.002
Copenhagen	CPH	55.728081, 12.37752
Curitiba	CWB	-25.4809, -49.3044
Dallas	ADS	32.896828, -97.037997
Dallas	DFW	32.896828, -97.037997
Delhi	DEL	28.506912, 77.378557
Denver	DEN	39.861656, -104.673178
Detroit	DTW	42.448, -83.263
Dubai	DXB	25.032, 55.19
Dublin	DUB	53.35, -6.26
Fortaleza	FOR	-3.735, -38.458
Frankfurt	FRA	50.026421, 8.543125
Frankfurt	WIE	50.11975, 8.738472
Fujairah Al Mahta	FJR	25.112225, 56.323964
Gainesville	GNV	29.6516, -82.3248
Ghana	ACC	5.573, -0.203
Helsinki	HEL	60.1699, 24.9384
Hong Kong	HKG	22.308919, 113.914603
Honolulu	HNL	21.364, -157.869
Houston	IAH	29.99022, -95.336783
Hyderabad	HYD	17.442, 78.378
Johannesburg	JNB	-26.13778, 28.19756
Kansas City	MCI	39.101, -94.581
Kolkata	CCU	22.588, 88.393
Kuala Lumpur	KUL	3.149, 101.706
Lima	LIM	-12.088902, -76.973405
Lisbon	LIS	38.788, -9.123
London	LCY	51.505278, 0.055278
London	LHR	51.4775, -0.461389
London	LON	51.499, -0.011
Los Angeles	BUR	34.198312, -118.357404
Los Angeles	LGB	33.942536, -118.408075
Madrid	MAD	40.439323, -3.621211
Manchester	MAN	53.4808, -2.2426
Manila	MNL	14.566, 121.022
Marseille	MRS	43.311, 5.373
Melbourne	MEL	-37.673333, 144.843333
Miami	MIA	25.79325, -80.290556
Milan	LIN	45.47, 9.036
Milan	MXP	45.4642, 9.19
Minneapolis	MSP	44.971401, -93.254501
Minneapolis	STP	44.971401, -93.254501
Montreal	YUL	45.497497, -73.570959
Mumbai	BOM	18.975, 72.825833
Munich	MUC	48.143, 11.555
New York City	LGA	40.639751, -73.778925
New York City	NYC	40.778, -74.073
Newark	EWR	40.736844, -74.173402
Osaka	ITM	34.785528, 135.438222
Oslo	OSL	59.922, 10.809
Palermo	PMO	38.1607109, 13.3157489
Palo Alto	PAO	37.454965, -122.110783
Paris	PAR	48.856654, 2.38532
Perth	PER	-31.940278, 115.966944
Phoenix	PHX	33.396, -111.97
Portland	PDX	45.552, -122.914
Rio de Janeiro	GIG	-22.81341, -43.249423
Rome	FCO	41.89891, 12.51206
San Jose	SJC	37.3626, -121.929022
San Jose	WVI	37.242, -121.782
Santiago	SCL	-33.3936, -70.7935
Sao Paulo	CGH	-23.498, -46.815
Sao Paulo	GRU	-23.432075, -46.469511
Seattle	BFI	47.449, -122.309306
Seoul	ICN	36.38, 128.124
Singapore	QPG	1.350189, 103.994433
Sofia	SOF	42.703, 23.306
St.Louis	STL	38.629, -90.197
Stockholm	BMA	59.354372, 17.94165
Sydney	SYD	-33.946111, 151.177222
Tokyo	HND	35.622281, 139.748426
Tokyo	NRT	35.617, 139.748
Tokyo	TYO	35.617, 139.748
Toronto	YYZ	43.677223, -79.630556
Vancouver	YVR	49.1967, -123.1815
Vienna	VIE	48.269, 16.41
Wellington	WLG	-41.327221, 174.805278`;

const lines = rawData.split('\n');
const locations = [];

lines.forEach(line => {
  const [location, pop_id, geo] = line.split('\t');
  const [lat, long] = geo.split(', ');
  const geo_url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
  locations.push({ location, pop_id, geo, geo_url });
});

const jsonOutput = JSON.stringify(locations, null, 2);
console.log(jsonOutput);