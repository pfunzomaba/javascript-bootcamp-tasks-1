// Exercise 1: Temperature Check
// Store the temperature value
let temperature = 18;

// Check if temperature is below 0
if (temperature < 0) {
    console.log("It's freezing!");

// Check if temperature is between 0 and 15
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");

// Check if temperature is between 16 and 25
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");

// If none of the above conditions are true
} else {
    console.log("It's warm.");
}

// 2. Using switch

// Use switch(true) to evaluate conditions
switch (true) {

    // Temperature below 0
    case (temperature < 0):
        console.log("It's freezing!");
        break;

    // Temperature between 0 and 15
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;

    // Temperature between 16 and 25
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;

    // Any temperature above 25
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check
// 1. Using if...els

// Store the number
let number = 12;

// Check if number is divisible by both 2 and 3
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");

// Check if number is divisible only by 2
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");

// Check if number is divisible only by 3
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");

// If number is not divisible by 2 or 3
} else {
    console.log("Not divisible by 2 or 3.");
}

// 2. Using switch

// Use switch(true) for condition checking
switch (true) {

    // Divisible by both 2 and 3
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;

    // Divisible only by 2
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;

    // Divisible only by 3
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;

    // Not divisible by either
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops
//1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//3. Calculate the sum from 1 to 100
// Variable to store the sum
let sum = 0;

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {

    // Add current number to sum
    sum += i;
}

// Print final result
console.log(sum);


// 4. Print each array element
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {

    // Print each element
    console.log(numbers[i]);
}

// 5. Find the largest number
// Array of numbers
const arrayNumbers = [3, 7, 2, 5, 10, 6];

// Assume first number is the largest
let largest = arrayNumbers[0];

// Loop through the array
for (let i = 1; i < arrayNumbers.length; i++) {

    // Compare current number with largest
    if (arrayNumbers[i] > largest) {
        largest = arrayNumbers[i];
    }
}

// Print the largest number
console.log("Largest number is:", largest);

//Exercise 4: While Loops
//1. Print numbers from 1 to 10
// Start counting from 1
let i = 1;

// Continue while i is less than or equal to 10
while (i <= 10) {
    console.log(i);

    // Increase i by 1
    i++;
}

// 2. Print even numbers between 1 and 20
// Start counting from 1
i = 1;

// Loop until 20
while (i <= 20) {

    // Check if number is even
    if (i % 2 === 0) {
        console.log(i);
    }

    // Increase number
    i++;
}

// 3. Calculate the sum from 1 to 100
// Starting number
i = 1;

// Variable to store sum
sum = 0;

// Loop from 1 to 100
while (i <= 100) {

    // Add current number to sum
    sum += i;

    // Increase number
    i++;
}

// Print the total sum
console.log(sum);

// 4. Print multiples of 5 less than 50
// Start counting from 1
i = 1;

// Loop while number is less than 50
while (i < 50) {

    // Check if number is divisible by 5
    if (i % 5 === 0) {
        console.log(i);
    }

    // Increase number
    i++;
}

//Exercise 5: Do While Loops
// 1. Print numbers from 1 to 10
// Start counting from 1
i = 1;

do {
    console.log(i);

    // Increase number
    i++;

} while (i <= 10);


//2. Calculate the sum from 1 to 100
// Starting number
i = 1;

// Variable to store total sum
sum = 0;

// Run loop at least once
do {

    // Add current number to sum
    sum += i;

    // Increase number
    i++;

} while (i <= 100);

// Print final sum
console.log(sum);

//3. Ask user for a number greater than 10
// Variable to store user input
 number=0;

// Keep asking until number is greater than 10
do {
    number = prompt("Enter a number greater than 10:");

} while (number <= 10);

// Print valid number
console.log("Valid number entered:", number);


// 4. Guessing game
// Secret number
let secretNumber = 7;

// Variable for user's guess
let guess;

// Keep looping until correct guess
do {

    // Ask user to guess
    guess = prompt("Guess a number between 1 and 10:");

    // Check if guess is incorrect
    if (guess != secretNumber) {
        console.log("Wrong guess. Try again!");
    }

} while (guess != secretNumber);

// Print success message
console.log("Correct! You guessed the number.");