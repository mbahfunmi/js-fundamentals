#!/usr/bin/node

const arg = process.argv[2]; // Step 1: Get the first command-line argument
const num = Number(arg);     // Step 2: Try to convert it to a number

if (Number.isInteger(num)) {         // Step 3: Check if it’s an integer
  console.log('My number: ' + num);  // Step 4a: Print the number
} else {
  console.log('Not a number');       // Step 4b: Print "Not a number" if it fails
}
