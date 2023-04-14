// Data type request
const prompt = require('prompt-sync')();
const scaleChoice = prompt('Enter the measurement scale (meters or feet): ');

// Declare measurements
let length = 3;
let height = 4;
let finalMeasure = 1;

// Calculate room area
if (scaleChoice === 'meters') {
  finalMeasure = length * height;
  console.log('Your room measures ' + finalMeasure + ' meters.');
} else if (scaleChoice === 'feet') {
  const conversionFactor = 3.28084;
  finalMeasure = (length * conversionFactor) * (height * conversionFactor);
  console.log('Your room measures ' + finalMeasure.toFixed(2) + ' feet.');
} else {
  console.log('You must enter the correct measurement scale (meters or feet).');
}

