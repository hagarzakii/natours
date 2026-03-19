/* eslint-disable */

// console.log('hello from the client side');
// const locations = JSON.parse(document.getElementById('map').dataset.locations);
// console.log(locations);

// get the locations from the dataset attribute
// const locations = JSON.parse(document.getElementById('map').dataset.locations);

// // init map - center on first location
// const map = L.map('map', {
//   scrollWheelZoom: false
// }).setView([locations[0].coordinates[1], locations[0].coordinates[0]], 6);

// // add OpenStreetMap tiles
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '© OpenStreetMap contributors'
// }).addTo(map);

// // add a marker for each location
// locations.forEach(loc => {
//   L.marker([loc.coordinates[1], loc.coordinates[0]])
//     .addTo(map)
//     .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`)
//     .openPopup();
// });

import L from 'leaflet';

export const displayMap = locations => {
  const map = L.map('map', {
    scrollWheelZoom: false
  }).setView([locations[0].coordinates[1], locations[0].coordinates[0]], 6);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  locations.forEach(loc => {
    L.marker([loc.coordinates[1], loc.coordinates[0]])
      .addTo(map)
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .openPopup();
  });
};
