// Array Literal
const fruits: string[] = ['Apple', 'Banana', 'Grapes'];

// Array Constructor
const numbers: number[] = new Array(1, 2, 3, 4, 5);

// Initialize empty array
const emptyArray: string[] = [];

console.log(fruits[0]); // Indexing starts from 0
console.log(fruits[2]);

console.log(numbers[2]);
numbers[2] = 10;
console.log(numbers[2]);

console.log("Length of array before adding " + numbers.length);
numbers.push(6);
console.log("Length of array after adding " + numbers.length);

console.log(numbers[numbers.length - 1]);

numbers.pop();
console.log("Length of array after removing " + numbers.length);

console.log(numbers[0]);
numbers.shift(); // Removes and returns the first element in array
console.log(numbers[0]);

numbers.unshift(1) // Elements to insert at the start of the array
console.log(numbers[0]);

console.log(numbers);
const slicedArray = numbers.slice(1, 3); // Creates new array with elements between index 1 and 3 (including)
console.log(slicedArray);


const doubledArray = numbers.map((num) => num * 2); // To perform operations on the elements and return the array
console.log(doubledArray);


const greaterThanTwo = numbers.filter((num) => num > 2);
console.log(greaterThanTwo);

// Read only array
const readOnlyArray: readonly number[] = [1, 2, 3];
// readOnlyArray[0] = 5; // Not possible