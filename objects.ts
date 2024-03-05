const sampleData = {
    firstName: 'Tanmay',
    age: 24,
    isStudent: false
}

console.log(sampleData);

const sampleData2: {firstName: string, age: number, isStudent: boolean} = {
    firstName: 'Tanmay',
    age: 24,
    isStudent: false
}

console.log(sampleData2.firstName);


const contactInfo = {
    email: 'typescriptlearning@mail.com',
    phone: 1234567890
}

const mergedData = {...sampleData2, ...contactInfo}
console.log(mergedData);



type Person = {
    name: string,
    age: number
}

const tanmay: Person = {
    name: 'Tanmay',
    age: 24
}