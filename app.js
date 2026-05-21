/* ===================================================
   UpgradeIQ — United 1K Upgrade Tracker
   app.js — zero external dependencies
   =================================================== */

'use strict';

/* ============================================================
   1. AIRPORTS
   ============================================================ */
const AIRPORTS = [
  // United Hubs
  { code: 'EWR', city: 'Newark',        name: 'Newark Liberty International Airport' },
  { code: 'ORD', city: 'Chicago',       name: 'O\'Hare International Airport' },
  { code: 'SFO', city: 'San Francisco', name: 'San Francisco International Airport' },
  { code: 'LAX', city: 'Los Angeles',   name: 'Los Angeles International Airport' },
  { code: 'IAH', city: 'Houston',       name: 'George Bush Intercontinental Airport' },
  { code: 'IAD', city: 'Washington',    name: 'Washington Dulles International Airport' },
  { code: 'DEN', city: 'Denver',        name: 'Denver International Airport' },
  // Domestic
  { code: 'BOS', city: 'Boston',        name: 'Boston Logan International Airport' },
  { code: 'MIA', city: 'Miami',         name: 'Miami International Airport' },
  { code: 'JFK', city: 'New York',      name: 'John F. Kennedy International Airport' },
  { code: 'SEA', city: 'Seattle',       name: 'Seattle-Tacoma International Airport' },
  { code: 'LAS', city: 'Las Vegas',     name: 'Harry Reid International Airport' },
  { code: 'MCO', city: 'Orlando',       name: 'Orlando International Airport' },
  // Europe
  { code: 'LHR', city: 'London',        name: 'London Heathrow Airport' },
  { code: 'LGW', city: 'London',        name: 'London Gatwick Airport' },
  { code: 'FRA', city: 'Frankfurt',     name: 'Frankfurt Airport' },
  { code: 'CDG', city: 'Paris',         name: 'Charles de Gaulle Airport' },
  { code: 'AMS', city: 'Amsterdam',     name: 'Amsterdam Schiphol Airport' },
  { code: 'MXP', city: 'Milan',         name: 'Milan Malpensa Airport' },
  { code: 'FCO', city: 'Rome',          name: 'Rome Fiumicino Airport' },
  { code: 'MAD', city: 'Madrid',        name: 'Adolfo Suárez Madrid–Barajas Airport' },
  { code: 'ZRH', city: 'Zurich',        name: 'Zurich Airport' },
  { code: 'MUC', city: 'Munich',        name: 'Munich Airport' },
  { code: 'VIE', city: 'Vienna',        name: 'Vienna International Airport' },
  { code: 'BCN', city: 'Barcelona',     name: 'Barcelona El Prat Airport' },
  { code: 'LIS', city: 'Lisbon',        name: 'Lisbon Portela Airport' },
  { code: 'CPH', city: 'Copenhagen',    name: 'Copenhagen Airport' },
  { code: 'ARN', city: 'Stockholm',     name: 'Stockholm Arlanda Airport' },
  // Middle East / Africa
  { code: 'TLV', city: 'Tel Aviv',      name: 'Ben Gurion International Airport' },
  { code: 'NBO', city: 'Nairobi',       name: 'Jomo Kenyatta International Airport' },
  { code: 'DXB', city: 'Dubai',         name: 'Dubai International Airport' },
  { code: 'CAI', city: 'Cairo',         name: 'Cairo International Airport' },
  // Asia-Pacific
  { code: 'NRT', city: 'Tokyo',         name: 'Narita International Airport' },
  { code: 'HND', city: 'Tokyo',         name: 'Haneda Airport' },
  { code: 'ICN', city: 'Seoul',         name: 'Incheon International Airport' },
  { code: 'PEK', city: 'Beijing',       name: 'Beijing Capital International Airport' },
  { code: 'PVG', city: 'Shanghai',      name: 'Shanghai Pudong International Airport' },
  { code: 'HKG', city: 'Hong Kong',     name: 'Hong Kong International Airport' },
  { code: 'SIN', city: 'Singapore',     name: 'Singapore Changi Airport' },
  { code: 'SYD', city: 'Sydney',        name: 'Sydney Kingsford Smith Airport' },
  { code: 'MEL', city: 'Melbourne',     name: 'Melbourne Airport' },
  { code: 'BKK', city: 'Bangkok',       name: 'Suvarnabhumi Airport' },
  { code: 'DEL', city: 'New Delhi',     name: 'Indira Gandhi International Airport' },
  { code: 'BOM', city: 'Mumbai',        name: 'Chhatrapati Shivaji Maharaj International Airport' },
  // Latin America
  { code: 'GRU', city: 'Sao Paulo',     name: 'São Paulo/Guarulhos International Airport' },
  { code: 'EZE', city: 'Buenos Aires',  name: 'Ministro Pistarini International Airport' },
  { code: 'BOG', city: 'Bogota',        name: 'El Dorado International Airport' },
  { code: 'LIM', city: 'Lima',          name: 'Jorge Chavez International Airport' },
  { code: 'SCL', city: 'Santiago',      name: 'Arturo Merino Benítez International Airport' },
  { code: 'MEX', city: 'Mexico City',   name: 'Benito Juárez International Airport' },
];

/* ============================================================
   2. AIRCRAFT
   ============================================================ */
const AIRCRAFT = {
  '777-300ER': { polarisSeats: 60, seatScore: 15 },
  '777-200ER': { polarisSeats: 50, seatScore: 13 },
  '787-9':     { polarisSeats: 48, seatScore: 12 },
  '787-10':    { polarisSeats: 44, seatScore: 10 },
  '787-8':     { polarisSeats: 36, seatScore: 8  },
  '767-400ER': { polarisSeats: 46, seatScore: 11 },
  '767-300ER': { polarisSeats: 30, seatScore: 5  },
};

/* ============================================================
   3. ROUTES
   ============================================================ */
const ROUTES = {
  'EWR-LHR': {
    flights: [
      { flightNum: 'UA016', dep: '22:00', arr: '10:05+1', duration: '7h 05m', aircraft: '777-200ER', baseLoad: 0.72 },
      { flightNum: 'UA018', dep: '10:50', arr: '23:00',   duration: '7h 10m', aircraft: '767-400ER', baseLoad: 0.65 },
      { flightNum: 'UA020', dep: '17:00', arr: '05:10+1', duration: '7h 10m', aircraft: '777-300ER', baseLoad: 0.68 },
    ],
    baseUpgradeRate: 0.38, premiumDemand: 'high', peakMonths: [6,7,8,12],
    notes: 'UA016 (evening) historically clears upgrades most often — lower business load than morning bank.',
  },
  'LHR-EWR': {
    flights: [
      { flightNum: 'UA017', dep: '11:30', arr: '14:40',   duration: '9h 10m', aircraft: '777-200ER', baseLoad: 0.70 },
      { flightNum: 'UA019', dep: '14:00', arr: '17:15',   duration: '9h 15m', aircraft: '777-300ER', baseLoad: 0.67 },
      { flightNum: 'UA021', dep: '09:00', arr: '12:10',   duration: '9h 10m', aircraft: '767-400ER', baseLoad: 0.63 },
    ],
    baseUpgradeRate: 0.36, premiumDemand: 'high', peakMonths: [6,7,8,12],
    notes: 'Return transatlantic — business demand is highest Sun/Mon. Midweek departures open up.',
  },
  'ORD-LHR': {
    flights: [
      { flightNum: 'UA930', dep: '17:55', arr: '08:15+1', duration: '8h 20m', aircraft: '787-9',     baseLoad: 0.63 },
      { flightNum: 'UA932', dep: '21:50', arr: '11:55+1', duration: '8h 05m', aircraft: '787-10',    baseLoad: 0.58 },
    ],
    baseUpgradeRate: 0.44, premiumDemand: 'moderate', peakMonths: [6,7,8],
    notes: 'Chicago-London is a solid upgrade route — less corporate than EWR. UA932 night departure sees softer loads.',
  },
  'SFO-LHR': {
    flights: [
      { flightNum: 'UA836', dep: '15:40', arr: '11:25+1', duration: '10h 45m', aircraft: '787-9',    baseLoad: 0.60 },
      { flightNum: 'UA838', dep: '19:55', arr: '15:45+1', duration: '10h 50m', aircraft: '777-200ER', baseLoad: 0.64 },
    ],
    baseUpgradeRate: 0.46, premiumDemand: 'moderate', peakMonths: [6,7,8],
    notes: 'SFO–LHR sees tech-company travelers but load lightens dramatically in shoulder season.',
  },
  'IAH-LHR': {
    flights: [
      { flightNum: 'UA726', dep: '17:30', arr: '08:30+1', duration: '9h 00m', aircraft: '787-8',     baseLoad: 0.57 },
    ],
    baseUpgradeRate: 0.50, premiumDemand: 'low', peakMonths: [6,7,8],
    notes: 'Houston–London is a great upgrade bet. Single daily flight with lower demand than coastal hubs.',
  },
  'IAD-LHR': {
    flights: [
      { flightNum: 'UA920', dep: '20:30', arr: '08:40+1', duration: '7h 10m', aircraft: '767-400ER', baseLoad: 0.62 },
    ],
    baseUpgradeRate: 0.42, premiumDemand: 'moderate', peakMonths: [6,7,8,12],
    notes: 'Dulles–London carries government and consulting traffic. Avoid Mondays for better upgrade odds.',
  },
  'DEN-LHR': {
    flights: [
      { flightNum: 'UA168', dep: '17:30', arr: '10:20+1', duration: '9h 50m', aircraft: '787-9',     baseLoad: 0.53 },
    ],
    baseUpgradeRate: 0.52, premiumDemand: 'low', peakMonths: [6,7,8],
    notes: 'Underrated upgrade route — Denver generates lighter premium demand vs coastal cities.',
  },
  'EWR-FRA': {
    flights: [
      { flightNum: 'UA962', dep: '18:30', arr: '08:15+1', duration: '8h 45m', aircraft: '777-200ER', baseLoad: 0.69 },
      { flightNum: 'UA964', dep: '22:10', arr: '12:00+1', duration: '8h 50m', aircraft: '787-9',     baseLoad: 0.65 },
    ],
    baseUpgradeRate: 0.36, premiumDemand: 'high', peakMonths: [3,4,6,7,8,9],
    notes: 'Frankfurt is a major business hub — Mon/Fri loads are very high. Mid-week is the upgrade window.',
  },
  'ORD-FRA': {
    flights: [
      { flightNum: 'UA986', dep: '17:40', arr: '09:10+1', duration: '9h 30m', aircraft: '787-10',    baseLoad: 0.60 },
    ],
    baseUpgradeRate: 0.45, premiumDemand: 'moderate', peakMonths: [6,7,8],
    notes: 'One of United\'s better upgrade routes to Germany — fewer corporate accounts than EWR.',
  },
  'SFO-FRA': {
    flights: [
      { flightNum: 'UA980', dep: '16:15', arr: '13:05+1', duration: '11h 50m', aircraft: '787-9',    baseLoad: 0.59 },
    ],
    baseUpgradeRate: 0.47, premiumDemand: 'moderate', peakMonths: [6,7,8],
    notes: 'Long haul with decent Polaris availability. Best in spring and autumn.',
  },
  'IAH-FRA': {
    flights: [
      { flightNum: 'UA976', dep: '18:00', arr: '10:35+1', duration: '10h 35m', aircraft: '787-8',    baseLoad: 0.55 },
    ],
    baseUpgradeRate: 0.51, premiumDemand: 'low', peakMonths: [6,7,8],
    notes: 'Good odds — Houston hub serves oil & gas sector but Frankfurt demand lightens outside trade fairs.',
  },
  'EWR-CDG': {
    flights: [
      { flightNum: 'UA056', dep: '18:15', arr: '07:35+1', duration: '7h 20m', aircraft: '777-200ER', baseLoad: 0.66 },
      { flightNum: 'UA058', dep: '22:45', arr: '12:05+1', duration: '7h 20m', aircraft: '767-400ER', baseLoad: 0.60 },
    ],
    baseUpgradeRate: 0.40, premiumDemand: 'moderate', peakMonths: [6,7,8,12],
    notes: 'Paris is leisure-heavy in summer — upgrade competition peaks Jul/Aug. Great in October.',
  },
  'ORD-CDG': {
    flights: [
      { flightNum: 'UA974', dep: '17:50', arr: '09:25+1', duration: '9h 35m', aircraft: '787-9',     baseLoad: 0.58 },
    ],
    baseUpgradeRate: 0.46, premiumDemand: 'moderate', peakMonths: [6,7,8],
  },
  'EWR-AMS': {
    flights: [
      { flightNum: 'UA080', dep: '18:00', arr: '07:10+1', duration: '7h 10m', aircraft: '787-9',     baseLoad: 0.63 },
    ],
    baseUpgradeRate: 0.43, premiumDemand: 'moderate', peakMonths: [4,6,7,8],
    notes: 'Tulip season (April) packs premium cabin. Summer is competitive. October–March: excellent odds.',
  },
  'EWR-TLV': {
    flights: [
      { flightNum: 'UA090', dep: '17:30', arr: '11:35+1', duration: '10h 05m', aircraft: '787-9',    baseLoad: 0.58 },
    ],
    baseUpgradeRate: 0.48, premiumDemand: 'moderate', peakMonths: [3,4,7,9],
    notes: 'Security procedures and traffic patterns can affect upgrade clearing. Request immediately after booking.',
  },
  'SFO-NRT': {
    flights: [
      { flightNum: 'UA837', dep: '11:25', arr: '15:05+1', duration: '11h 40m', aircraft: '777-300ER', baseLoad: 0.67 },
      { flightNum: 'UA839', dep: '23:55', arr: '03:45+2', duration: '11h 50m', aircraft: '787-9',     baseLoad: 0.62 },
    ],
    baseUpgradeRate: 0.42, premiumDemand: 'moderate', peakMonths: [3,4,7,8,12],
    notes: 'Cherry blossom season (March–April) fills premium cabin fast. UA839 night departure has better odds.',
  },
  'ORD-NRT': {
    flights: [
      { flightNum: 'UA881', dep: '11:10', arr: '14:45+1', duration: '13h 35m', aircraft: '777-200ER', baseLoad: 0.64 },
    ],
    baseUpgradeRate: 0.44, premiumDemand: 'moderate', peakMonths: [3,4,7,8,12],
    notes: 'Long transpacific haul — United\'s 777-200ER has 50 Polaris seats, giving you more inventory.',
  },
  'LAX-NRT': {
    flights: [
      { flightNum: 'UA108', dep: '00:20', arr: '05:30+1', duration: '13h 10m', aircraft: '777-300ER', baseLoad: 0.66 },
    ],
    baseUpgradeRate: 0.41, premiumDemand: 'moderate', peakMonths: [3,4,7,8,12],
    notes: 'Largest cabin in the fleet: 60 Polaris seats. Midnight departure clears cleanly by T-24h.',
  },
  'SFO-HND': {
    flights: [
      { flightNum: 'UA031', dep: '10:10', arr: '13:45+1', duration: '11h 35m', aircraft: '777-200ER', baseLoad: 0.65 },
      { flightNum: 'UA035', dep: '16:05', arr: '19:45+1', duration: '11h 40m', aircraft: '787-9',     baseLoad: 0.60 },
    ],
    baseUpgradeRate: 0.43, premiumDemand: 'moderate', peakMonths: [3,4,7,8],
    notes: 'Haneda is highly convenient for central Tokyo. Slightly lower loads than Narita routes.',
  },
  'SFO-SIN': {
    flights: [
      { flightNum: 'UA001', dep: '09:30', arr: '17:30+1', duration: '17h 00m', aircraft: '787-9',    baseLoad: 0.54 },
    ],
    baseUpgradeRate: 0.50, premiumDemand: 'low', peakMonths: [6,7,8,12],
    notes: 'Ultra long-haul — great upgrade odds. Few people book last-minute Polaris and upgrades clear well.',
  },
  'SFO-SYD': {
    flights: [
      { flightNum: 'UA863', dep: '21:55', arr: '08:00+2', duration: '15h 05m', aircraft: '777-200ER', baseLoad: 0.55 },
    ],
    baseUpgradeRate: 0.51, premiumDemand: 'low', peakMonths: [12,1,2],
    notes: 'Southern hemisphere summer (Dec–Feb) spikes demand. March–November offers very good upgrade odds.',
  },
  'LAX-SYD': {
    flights: [
      { flightNum: 'UA839', dep: '22:55', arr: '09:00+2', duration: '15h 05m', aircraft: '777-300ER', baseLoad: 0.57 },
    ],
    baseUpgradeRate: 0.48, premiumDemand: 'low', peakMonths: [12,1,2],
    notes: '777-300ER brings 60 Polaris seats on this route — upgrade inventory is the best of any SYD service.',
  },
  'SFO-HKG': {
    flights: [
      { flightNum: 'UA869', dep: '01:00', arr: '07:05+1', duration: '14h 05m', aircraft: '777-200ER', baseLoad: 0.61 },
    ],
    baseUpgradeRate: 0.44, premiumDemand: 'moderate', peakMonths: [1,2,6,7,10],
    notes: 'Chinese New Year (Jan–Feb) and Golden Week (Oct) see premium cabin spike. Shoulder season upgrades clear well.',
  },
  'SFO-ICN': {
    flights: [
      { flightNum: 'UA891', dep: '11:15', arr: '16:25+1', duration: '13h 10m', aircraft: '787-9',    baseLoad: 0.60 },
    ],
    baseUpgradeRate: 0.46, premiumDemand: 'moderate', peakMonths: [7,8,12],
    notes: 'Seoul is increasingly popular — summer loads are high but spring and autumn are very manageable.',
  },
  'ORD-NBO': {
    flights: [
      { flightNum: 'UA988', dep: '21:00', arr: '19:05+1', duration: '14h 05m', aircraft: '787-9',    baseLoad: 0.50 },
    ],
    baseUpgradeRate: 0.54, premiumDemand: 'low', peakMonths: [7,8,12],
    notes: 'One of United\'s best upgrade routes — relatively low premium demand makes 1K upgrades clear reliably.',
  },
  'IAD-NBO': {
    flights: [
      { flightNum: 'UA994', dep: '22:10', arr: '19:35+1', duration: '13h 25m', aircraft: '787-9',    baseLoad: 0.48 },
    ],
    baseUpgradeRate: 0.55, premiumDemand: 'low', peakMonths: [7,8,12],
    notes: 'Excellent upgrade prospects — NGO and development travelers avoid premium cabins, leaving more for 1K members.',
  },
  'IAH-GRU': {
    flights: [
      { flightNum: 'UA036', dep: '22:45', arr: '09:30+1', duration: '10h 45m', aircraft: '787-9',    baseLoad: 0.59 },
    ],
    baseUpgradeRate: 0.46, premiumDemand: 'moderate', peakMonths: [1,2,7,12],
    notes: 'Carnival (Feb) and July holidays spike load. January after New Year and fall offer strong upgrade odds.',
  },
  'EWR-GRU': {
    flights: [
      { flightNum: 'UA140', dep: '20:55', arr: '08:50+1', duration: '9h 55m', aircraft: '777-200ER', baseLoad: 0.62 },
    ],
    baseUpgradeRate: 0.43, premiumDemand: 'moderate', peakMonths: [1,2,7,12],
  },
  'SFO-PEK': {
    flights: [
      { flightNum: 'UA857', dep: '01:30', arr: '06:10+1', duration: '12h 40m', aircraft: '777-200ER', baseLoad: 0.63 },
    ],
    baseUpgradeRate: 0.40, premiumDemand: 'moderate', peakMonths: [1,2,5,10],
    notes: 'China Golden Week (early Oct) and Chinese New Year drive premium demand. Avoid those windows.',
  },
  'ORD-PEK': {
    flights: [
      { flightNum: 'UA889', dep: '11:15', arr: '14:05+1', duration: '14h 50m', aircraft: '777-200ER', baseLoad: 0.64 },
    ],
    baseUpgradeRate: 0.39, premiumDemand: 'high', peakMonths: [1,2,5,7,10],
    notes: 'High-demand corporate route. Best upgrade chances in March, September, and November.',
  },
};

/* ============================================================
   4. SCORING ALGORITHM
   ============================================================ */
function calculateUpgradeScore(flight, route, dateStr, upgradeType) {
  const date = new Date(dateStr + 'T12:00:00');
  const month = date.getMonth() + 1; // 1-12
  const dow   = date.getDay();       // 0=Sun … 6=Sat

  const isPeak = route.peakMonths && route.peakMonths.includes(month);
  const effectiveLoad = Math.min(flight.baseLoad * (isPeak ? 1.25 : 0.90), 0.95);

  // Cabin Availability (0–35 pts)
  let avScore;
  if      (effectiveLoad < 0.40) avScore = 35;
  else if (effectiveLoad < 0.50) avScore = 28;
  else if (effectiveLoad < 0.60) avScore = 21;
  else if (effectiveLoad < 0.65) avScore = 15;
  else if (effectiveLoad < 0.75) avScore = 8;
  else                            avScore = 3;

  // Aircraft & Seats (0–20 pts) — scale seatScore (5–15) to 0–20
  const aircraft = AIRCRAFT[flight.aircraft] || { polarisSeats: 30, seatScore: 5 };
  const acScore = Math.round((aircraft.seatScore / 15) * 20);

  // Travel Day (0–15 pts)
  const dayScores = { 2: 15, 3: 15, 4: 13, 1: 12, 0: 7, 5: 7, 6: 5 };
  const dayScore = dayScores[dow] !== undefined ? dayScores[dow] : 7;

  // Season (0–15 pts)
  const seasonScore = isPeak ? 4 : 14;

  // Route History (0–15 pts)
  const routeScore = Math.round(route.baseUpgradeRate * 27);

  let total = avScore + acScore + dayScore + seasonScore + routeScore;
  total = Math.min(total, 100);

  // Complimentary upgrade penalty
  if (upgradeType === 'comp') {
    total = Math.round(total * 0.80);
  }

  const breakdown = [
    { label: 'Cabin Availability', score: avScore,    max: 35 },
    { label: 'Aircraft & Seats',   score: acScore,    max: 20 },
    { label: 'Travel Day',         score: dayScore,   max: 15 },
    { label: 'Season',             score: seasonScore, max: 15 },
    { label: 'Route History',      score: routeScore,  max: 15 },
  ];

  // Recompute breakdown proportionally if comp penalty applied
  if (upgradeType === 'comp') {
    const rawTotal = avScore + acScore + dayScore + seasonScore + routeScore;
    const factor = total / (rawTotal || 1);
    breakdown.forEach(b => {
      b.score = Math.round(b.score * factor);
    });
  }

  breakdown.forEach(b => {
    b.pct = b.max > 0 ? b.score / b.max : 0;
  });

  return { total, breakdown };
}

/* ============================================================
   5. GET RECOMMENDATION
   ============================================================ */
function getRecommendation(score, upgradeType) {
  if (score >= 75) {
    return {
      label:  'Excellent Odds',
      color:  'green',
      advice: 'Request your upgrade immediately — high likelihood of clearing by T-24h.',
    };
  } else if (score >= 55) {
    return {
      label:  'Good Odds',
      color:  'blue',
      advice: 'Worth requesting. Monitor the waitlist and consider a higher fare class.',
    };
  } else if (score >= 38) {
    return {
      label:  'Moderate Odds',
      color:  'yellow',
      advice: 'Possible but competitive. Consider saving PlusPoints for a better-scoring flight.',
    };
  } else if (score >= 20) {
    return {
      label:  'Low Odds',
      color:  'orange',
      advice: 'Tight inventory expected. Use points only if you have plenty to spare.',
    };
  } else {
    return {
      label:  'Poor Odds',
      color:  'red',
      advice: 'Very limited upgrade space. Strongly consider an alternative flight or date.',
    };
  }
}

/* ============================================================
   6. GENERATE FLIGHTS
   ============================================================ */
// State for current search
let currentFlights = [];
let currentOrigin  = '';
let currentDest    = '';

function generateFlights(origin, dest, dateStr, upgradeType) {
  const key     = `${origin}-${dest}`;
  const revKey  = `${dest}-${origin}`;
  let   route   = ROUTES[key];
  let   reversed = false;

  if (!route) {
    route    = ROUTES[revKey];
    reversed = true;
  }

  if (!route) {
    return null; // caller handles "no route" message
  }

  const flights = route.flights.map(f => {
    const scoreData  = calculateUpgradeScore(f, route, dateStr, upgradeType);
    const rec        = getRecommendation(scoreData.total, upgradeType);
    const aircraftObj = AIRCRAFT[f.aircraft] || { polarisSeats: 30, seatScore: 5 };
    return {
      ...f,
      score:       scoreData.total,
      breakdown:   scoreData.breakdown,
      rec,
      aircraftObj,
      route,
      reversed,
    };
  });

  return flights;
}

/* ============================================================
   7. BUILD GAUGE SVG
   ============================================================ */
function buildGaugeSVG(score) {
  const radius      = 30;
  const cx          = 40;
  const cy          = 40;
  const circumference = 2 * Math.PI * radius;
  const filled      = (score / 100) * circumference;
  const empty       = circumference - filled;

  let arcColor;
  if (score >= 75)      arcColor = '#4caf50';
  else if (score >= 40) arcColor = '#ffc107';
  else                  arcColor = '#f44336';

  return `
    <svg class="gauge-svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle class="gauge-bg" cx="${cx}" cy="${cy}" r="${radius}" />
      <circle class="gauge-arc"
        cx="${cx}" cy="${cy}" r="${radius}"
        stroke="${arcColor}"
        stroke-dasharray="${filled} ${empty}"
        stroke-dashoffset="0"
      />
      <g class="gauge-center" transform="rotate(90, ${cx}, ${cy})">
        <text class="gauge-score-text" x="${cx}" y="${cy - 5}">${score}</text>
        <text class="gauge-label-text" x="${cx}" y="${cy + 9}">SCORE</text>
      </g>
    </svg>`;
}

/* ============================================================
   7b. BUILD BREAKDOWN BARS HTML
   ============================================================ */
function buildBreakdownHTML(breakdown) {
  return breakdown.map(b => {
    const pct = Math.round(b.pct * 100);
    // Color the bar by score proportion
    let barColor = '#1e88e5';
    if (b.pct >= 0.75)      barColor = '#4caf50';
    else if (b.pct >= 0.45) barColor = '#ffc107';
    else                    barColor = '#f44336';

    return `<div class="breakdown-row">
      <span class="breakdown-label">${b.label}</span>
      <div class="breakdown-bar-wrap">
        <div class="breakdown-bar-fill" style="width:${pct}%;background:${barColor};"></div>
      </div>
      <span class="breakdown-score">${b.score}/${b.max}</span>
    </div>`;
  }).join('');
}

/* ============================================================
   7c. RENDER FLIGHTS
   ============================================================ */
function renderFlights(flights, origin, dest) {
  const grid = document.getElementById('flight-grid');
  if (!flights || flights.length === 0) {
    grid.innerHTML = `<div class="no-results">
      <h3>No flights found</h3>
      <p>No results available for this search.</p>
    </div>`;
    return;
  }

  const saved = getSaved();
  const savedKeys = new Set(saved.map(s => s.watchKey));

  grid.innerHTML = flights.map(f => {
    const watchKey  = `${f.flightNum}-${origin}-${dest}`;
    const isWatched = savedKeys.has(watchKey);

    // Card accent color
    let accentColor = '#f44336';
    if (f.score >= 75)      accentColor = '#4caf50';
    else if (f.score >= 55) accentColor = '#1e88e5';
    else if (f.score >= 38) accentColor = '#ffc107';
    else if (f.score >= 20) accentColor = '#ff9800';

    const notesHTML = f.route.notes
      ? `<div class="route-note">
           <div class="route-note-label">Insider Tip</div>
           ${escapeHTML(f.route.notes)}
         </div>`
      : '';

    return `<div class="flight-card" style="--card-accent:${accentColor}">
      <div class="card-header">
        <div class="card-flight-info">
          <div class="card-flight-num">${escapeHTML(f.flightNum)}</div>
          <div class="card-airline">United Airlines</div>
          <div class="card-aircraft">${escapeHTML(f.aircraft)} &bull; ${f.aircraftObj.polarisSeats} Polaris seats</div>
        </div>
        <div class="gauge-wrap">
          ${buildGaugeSVG(f.score)}
          <span class="gauge-label">Upgrade Score</span>
        </div>
      </div>

      <div class="card-times">
        <div class="card-time-block">
          <div class="card-time">${escapeHTML(f.dep)}</div>
          <div class="card-code">${escapeHTML(origin)}</div>
        </div>
        <div class="card-duration">
          <div class="duration-line">${escapeHTML(f.duration)}</div>
        </div>
        <div class="card-time-block">
          <div class="card-time">${escapeHTML(f.arr)}</div>
          <div class="card-code">${escapeHTML(dest)}</div>
        </div>
      </div>

      <div class="breakdown-section">
        ${buildBreakdownHTML(f.breakdown)}
      </div>

      <div class="rec-badge rec-${f.rec.color}">
        <div>
          <div class="rec-badge-label">${escapeHTML(f.rec.label)}</div>
          <div class="rec-badge-text">${escapeHTML(f.rec.advice)}</div>
        </div>
      </div>

      ${notesHTML}

      <button
        class="btn-watch${isWatched ? ' watching' : ''}"
        id="watch-${escapeAttr(watchKey)}"
        onclick="toggleWatch(${JSON.stringify(watchKey)}, ${JSON.stringify(f.flightNum)}, ${JSON.stringify(origin)}, ${JSON.stringify(dest)}, ${f.score}, ${JSON.stringify(f.rec.color)}, ${JSON.stringify(f.dep)}, ${JSON.stringify(f.arr)}, ${JSON.stringify(f.aircraft)})">
        ${isWatched ? '&#9829; Watching' : '&#9825; Watch Flight'}
      </button>
    </div>`;
  }).join('');
}

/* ============================================================
   8. SAVED FLIGHTS (localStorage)
   ============================================================ */
const STORAGE_KEY = 'upgradeiq-saved';

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function setSaved(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  updateSavedCount();
}

function updateSavedCount() {
  const count = getSaved().length;
  const el = document.getElementById('saved-count');
  if (el) el.textContent = count;
}

function toggleWatch(watchKey, flightNum, origin, dest, score, color, dep, arr, aircraft) {
  let saved = getSaved();
  const idx = saved.findIndex(s => s.watchKey === watchKey);
  if (idx === -1) {
    saved.push({ watchKey, flightNum, origin, dest, score, color, dep, arr, aircraft });
    setSaved(saved);
    updateWatchButton(watchKey, true);
  } else {
    saved.splice(idx, 1);
    setSaved(saved);
    updateWatchButton(watchKey, false);
  }
  renderSavedPanel();
}

function updateWatchButton(watchKey, watching) {
  const btn = document.getElementById(`watch-${watchKey}`);
  if (!btn) return;
  if (watching) {
    btn.classList.add('watching');
    btn.innerHTML = '&#9829; Watching';
  } else {
    btn.classList.remove('watching');
    btn.innerHTML = '&#9825; Watch Flight';
  }
}

function removeFromSaved(watchKey) {
  let saved = getSaved();
  saved = saved.filter(s => s.watchKey !== watchKey);
  setSaved(saved);
  renderSavedPanel();
  // Update watch button in results if visible
  updateWatchButton(watchKey, false);
}

function renderSavedPanel() {
  const body = document.getElementById('saved-panel-body');
  if (!body) return;
  const saved = getSaved();

  if (saved.length === 0) {
    body.innerHTML = `<p class="empty-msg">No flights watched yet. Click "Watch Flight" on any result.</p>`;
    return;
  }

  body.innerHTML = saved.map(s => {
    let scoreStyle = 'color:#f44336';
    if (s.score >= 75)      scoreStyle = 'color:#4caf50';
    else if (s.score >= 55) scoreStyle = 'color:#42a5f5';
    else if (s.score >= 38) scoreStyle = 'color:#ffc107';
    else if (s.score >= 20) scoreStyle = 'color:#ff9800';

    return `<div class="saved-mini-card">
      <div class="saved-mini-card__top">
        <span class="saved-mini-card__flight">${escapeHTML(s.flightNum)}</span>
        <span class="saved-mini-card__score" style="${scoreStyle}">${s.score}</span>
      </div>
      <div class="saved-mini-card__route">${escapeHTML(s.origin)} &rarr; ${escapeHTML(s.dest)}</div>
      <div class="saved-mini-card__details">${escapeHTML(s.dep)} &ndash; ${escapeHTML(s.arr)} &bull; ${escapeHTML(s.aircraft)}</div>
      <button class="btn-remove" onclick="removeFromSaved(${JSON.stringify(s.watchKey)})">Remove</button>
    </div>`;
  }).join('');
}

function openSavedPanel() {
  renderSavedPanel();
  document.getElementById('saved-panel').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}

function closeSavedPanel() {
  document.getElementById('saved-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

/* ============================================================
   9. AUTOCOMPLETE
   ============================================================ */
// Track selected airport codes
const selectedCodes = { origin: '', dest: '' };
let hideTimers = {};

function handleAutocomplete(field) {
  const inputId = field === 'origin' ? 'origin-input' : 'dest-input';
  const dropId  = field === 'origin' ? 'origin-dropdown' : 'dest-dropdown';
  const codeId  = field === 'origin' ? 'origin-code' : 'dest-code';

  const input = document.getElementById(inputId);
  const drop  = document.getElementById(dropId);
  const query = input.value.trim().toUpperCase();

  if (!query || query.length < 1) {
    drop.classList.remove('show');
    drop.innerHTML = '';
    return;
  }

  const matches = AIRPORTS.filter(a =>
    a.code.startsWith(query) ||
    a.city.toUpperCase().includes(query) ||
    a.name.toUpperCase().includes(query)
  ).slice(0, 6);

  if (matches.length === 0) {
    drop.classList.remove('show');
    drop.innerHTML = '';
    return;
  }

  drop.innerHTML = matches.map(a =>
    `<div class="autocomplete-item" onmousedown="selectAirport(event, '${field}', '${a.code}', '${escapeAttr(a.city)}', '${escapeAttr(a.name)}')">
      <span class="autocomplete-code">${a.code}</span>
      <span class="autocomplete-name">${escapeHTML(a.name)}</span>
      <span class="autocomplete-city">${escapeHTML(a.city)}</span>
    </div>`
  ).join('');
  drop.classList.add('show');
}

function selectAirport(event, field, code, city, name) {
  event.preventDefault();
  const inputId = field === 'origin' ? 'origin-input' : 'dest-input';
  const dropId  = field === 'origin' ? 'origin-dropdown' : 'dest-dropdown';
  const codeId  = field === 'origin' ? 'origin-code' : 'dest-code';

  const input = document.getElementById(inputId);
  const drop  = document.getElementById(dropId);
  const badge = document.getElementById(codeId);

  input.value = city + ' (' + code + ')';
  selectedCodes[field] = code;
  if (badge) badge.textContent = code;

  drop.classList.remove('show');
  drop.innerHTML = '';
}

function hideDropdown(field, delay) {
  const dropId = field === 'origin' ? 'origin-dropdown' : 'dest-dropdown';
  hideTimers[field] = setTimeout(() => {
    const drop = document.getElementById(dropId);
    if (drop) {
      drop.classList.remove('show');
      drop.innerHTML = '';
    }
  }, delay);
}

/* ============================================================
   10. SWAP AIRPORTS
   ============================================================ */
function swapAirports() {
  const originInput = document.getElementById('origin-input');
  const destInput   = document.getElementById('dest-input');
  const originBadge = document.getElementById('origin-code');
  const destBadge   = document.getElementById('dest-code');

  const tmpVal  = originInput.value;
  const tmpCode = selectedCodes.origin;

  originInput.value    = destInput.value;
  selectedCodes.origin = selectedCodes.dest;

  destInput.value    = tmpVal;
  selectedCodes.dest = tmpCode;

  if (originBadge) originBadge.textContent = selectedCodes.origin;
  if (destBadge)   destBadge.textContent   = selectedCodes.dest;
}

/* ============================================================
   11. SEARCH FLIGHTS
   ============================================================ */
function searchFlights() {
  const errorEl = document.getElementById('search-error');
  errorEl.textContent = '';

  const origin      = selectedCodes.origin;
  const dest        = selectedCodes.dest;
  const dateStr     = document.getElementById('travel-date').value;
  const upgradeType = document.getElementById('upgrade-type').value;

  // Validate
  if (!origin) {
    errorEl.textContent = 'Please select a valid origin airport from the dropdown.';
    document.getElementById('origin-input').focus();
    return;
  }
  if (!dest) {
    errorEl.textContent = 'Please select a valid destination airport from the dropdown.';
    document.getElementById('dest-input').focus();
    return;
  }
  if (origin === dest) {
    errorEl.textContent = 'Origin and destination must be different.';
    return;
  }
  if (!dateStr) {
    errorEl.textContent = 'Please select a travel date.';
    document.getElementById('travel-date').focus();
    return;
  }

  const flights = generateFlights(origin, dest, dateStr, upgradeType);

  const section = document.getElementById('results-section');
  const title   = document.getElementById('results-title');

  section.style.display = 'block';

  const originAirport = AIRPORTS.find(a => a.code === origin);
  const destAirport   = AIRPORTS.find(a => a.code === dest);
  const oName = originAirport ? originAirport.city : origin;
  const dName = destAirport   ? destAirport.city   : dest;

  if (!flights) {
    title.textContent = `No Direct Route: ${oName} → ${dName}`;
    document.getElementById('flight-grid').innerHTML = `
      <div class="no-results">
        <h3>No Direct United Route Found</h3>
        <p>United Airlines does not operate a direct nonstop route between <strong>${escapeHTML(oName)}</strong> and <strong>${escapeHTML(dName)}</strong>. Try a United hub as your origin (EWR, ORD, SFO, LAX, IAH, IAD, DEN) or choose a different destination.</p>
      </div>`;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  currentFlights = flights;
  currentOrigin  = origin;
  currentDest    = dest;

  // Default sort: by score descending
  currentFlights.sort((a, b) => b.score - a.score);

  title.textContent = `${oName} (${origin}) → ${dName} (${dest}) — ${flights.length} Flight${flights.length !== 1 ? 's' : ''}`;

  renderFlights(currentFlights, origin, dest);

  // Reset sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
  const scoreBtn = document.getElementById('sort-score');
  if (scoreBtn) scoreBtn.classList.add('active');

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   12. SORT RESULTS
   ============================================================ */
function sortResults(key) {
  if (!currentFlights || currentFlights.length === 0) return;

  document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));

  if (key === 'score') {
    currentFlights.sort((a, b) => b.score - a.score);
    const btn = document.getElementById('sort-score');
    if (btn) btn.classList.add('active');
  } else if (key === 'time') {
    currentFlights.sort((a, b) => a.dep.localeCompare(b.dep));
    const btn = document.getElementById('sort-time');
    if (btn) btn.classList.add('active');
  } else if (key === 'seats') {
    currentFlights.sort((a, b) => b.aircraftObj.polarisSeats - a.aircraftObj.polarisSeats);
    const btn = document.getElementById('sort-seats');
    if (btn) btn.classList.add('active');
  }

  renderFlights(currentFlights, currentOrigin, currentDest);
}

/* ============================================================
   14. DEFAULT DATE (today + 30 days)
   ============================================================ */
function setDefaultDate() {
  const el = document.getElementById('travel-date');
  if (!el) return;
  const d = new Date();
  d.setDate(d.getDate() + 30);
  const yyyy = d.getFullYear();
  const mm   = String(d.getMonth() + 1).padStart(2, '0');
  const dd   = String(d.getDate()).padStart(2, '0');
  el.value = `${yyyy}-${mm}-${dd}`;
}

/* ============================================================
   UTILITY HELPERS
   ============================================================ */
function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  if (str == null) return '';
  return String(str)
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;');
}

/* ============================================================
   15. INITIALIZE
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  setDefaultDate();
  updateSavedCount();
  renderSavedPanel();

  // Allow pressing Enter in the search inputs to trigger search
  ['origin-input', 'dest-input', 'travel-date'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          searchFlights();
        }
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#origin-wrap')) {
      const drop = document.getElementById('origin-dropdown');
      if (drop) { drop.classList.remove('show'); drop.innerHTML = ''; }
    }
    if (!e.target.closest('#dest-wrap')) {
      const drop = document.getElementById('dest-dropdown');
      if (drop) { drop.classList.remove('show'); drop.innerHTML = ''; }
    }
  });
});
