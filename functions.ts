function sayHi() {
    console.log('Hi!');
}

sayHi();

function calcTotal(price: number, quantity: number): number {
    return price * quantity;
}

console.log(calcTotal(10, 5));

// Optional parameter
function greet(name: string, greetMessage?: string) {
    if (greetMessage) {
        return `Hello ${name}, ${greetMessage}`;
    } else {
        return `Hello ${name}`;
    }
}

console.log(greet('Tanmay', 'Good Morning'));
console.log(greet('Tanmay'));

// Default value in function
function add(a: number, b: number = 0) {
    console.log(a + b);
}

add(1, 2);
add(1);

// Arrow function
const multiply = (a: number, b: number): number => a * b;

console.log((multiply(5, 6)));


let no1 = 5;
let no2 = 7;
type MatchOperation = (a: number, b: number) => number;
const addNumbers: MatchOperation = (no1, no2) => no1 + no2;
