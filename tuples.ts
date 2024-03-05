let person: [string, number] = ['Tanmay', 24];

console.log(person)

let username: string = person[0];
let userAge: number = person[1];

console.log(username);
console.log(userAge);

person[0] = 'Random';
person[1] = 10;

console.log(person);