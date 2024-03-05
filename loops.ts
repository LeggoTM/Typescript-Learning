// For Loop
// for (initialization; condition; increment/decrement) {
//     // Code to be executed in each iteration
//   }

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// While Loop
// while (condition) {
//     // Code to be executed in each iteration
//   }

  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }

// Do While Loop 
//  do {
//     // Code to be executed in each iteration
//   } while (condition);

let z = 5;
do {
  console.log(z);
  z++;
} while (z < 5);


// Break Statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Continue Statement

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Exit the loop when i is 5
  }
  console.log(i);
}  