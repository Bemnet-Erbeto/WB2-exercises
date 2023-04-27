'use strict'
// set the dimensions of the room in feet
let length = 10;
let width = 12;

// calculate the area of the room in square feet
let area = length * width;

// calculate the number of boxes of tiles needed
let tilesPerBox = 121;
let tilesNeeded = Math.ceil(area / tilesPerBox);

// calculate the number of boxes with the 10% buffer
let buffer = 1.1;
let boxesNeeded = Math.ceil(tilesNeeded * buffer);

console.log(`You need to buy ${boxesNeeded} boxes of tiles.`);
