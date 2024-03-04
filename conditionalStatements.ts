// If statements
// if (condition) {
// Code to be executed if condition is true
// }

let currentAge = 24;
if (currentAge >= 18) {
    console.log("You are an adult.");
}

// Else if statement
let sampleNum = -10;
if (sampleNum > 0) {
    console.log("Positive number");
} else if (sampleNum < 0) {
    console.log("Negative number");
}

// Else statement
let sampleNum2 = 0;
if (sampleNum2 > 0) {
    console.log("Positive number");
} else if (sampleNum2 < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Nested Condition
let sampleNum3 = 0;
if (sampleNum3 >= 0) {
    if (sampleNum3 === 0) {
        console.log('Number is zero')
    }
    else {
        console.log('Number is Positive')
    }
}
else {
    console.log('Number is negative');
}