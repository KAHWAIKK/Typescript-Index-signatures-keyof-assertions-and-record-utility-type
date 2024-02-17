"use strict";
/* TYPESCRIPT INDEX SIGNATURES,KEYOF ASSERTIONS & RECORD UTILITY TYPE */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
const todaysTransactionsA = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
/* --------------------------------------------------------------- */
//lets say we do not know what the member name are i.e Pizza, books, job in the TransactionObj interface are..
//one way to access the property
console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10
//what we mean when we say to dynamically access the property, 1. Through creating a loop 2. Without creating a loop
let prop = 'Pizza';
//console.log(todaysTransactions[prop])
//Typescript shows an error >No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
const todaysNet = (transactions) => {
    let total = 0;
    //using a for...in loop
    for (const transaction in transactions) {
        // total += transactions[transaction]
        //same error No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
        //we fix this by providing the index signature
    }
    return total;
};
//lets say we do not know what the member name are i.e Pizza, books, job in the TransactionObj interface are..
//one way to access the property
console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10
//what we mean when we say to dynamically access the property, 1. Through creating a loop 2. Without creating a loop
let propA = 'Pizza';
console.log(todaysTransactionsA[propA]); //-10
const todaysNetA = (transactions) => {
    let total = 0;
    //using a for...in loop
    for (const transaction in transactions) {
        total += transactions[transaction]; //-10
    }
    return total;
};
console.log(todaysNetA(todaysTransactionsA)); //35
//an object
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.score)
//TS says score does not exist on type student
//This error goes away the moment we provided the undefined value in the index signature of undefined
console.log(student); //{
//     "name": "Doug",
//     "GPA": 3.5,
//     "classes": [
//         100,
//         200
//     ]
// }
//Writing loop that should iterate over the student object
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
    //name : "Doug",
    // GPA : 3.5,
    // classes : [100,200]
}
//an object
const studentA = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.score)
//TS says score does not exist on type student
//This error goes away the moment we provided the undefined value in the index signature of undefined
console.log(studentA); //{
//     "name": "Doug",
//     "GPA": 3.5,
//     "classes": [
//         100,
//         200
//     ]
// }
//Writing loop that should iterate over the student object
for (const key in studentA) {
    console.log(`${key} : ${studentA[key]}`);
    //name : "Doug",
    // GPA : 3.5,
    // classes : [100,200]
}
/* Note the keyof type creates a union type and union type is the specific string literal so it will be the name gpa and classes  */
console.log(Object.keys(studentA));
// [
//     "name",
//     "GPA",
//     "classes"
// ]
//Alternatively you can use the keyword keyof and typeof to dynamically access the property values of the student object even if we do not know what the student object type is
Object.keys(studentA).map(key => {
    console.log(student[key]);
    //Doug
    //3.5
    //[100,200]
});
/* RECORD UTILITY TYPE */
const logStudentKey = (student, 
//we specify the key right here
key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, 'name'); //Student name : Doug
logStudentKey(student, 'GPA'); //Student GPA : 3.5
logStudentKey(student, 'classes'); //Student classes : 100,200
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
//For one to loop over items in the record utility type you have to use keyof assertions.
for (const reveneu in monthlyIncomes) {
    console.log(monthlyIncomes[reveneu]);
    //console returns 
    //500
    //100
    //250
}
