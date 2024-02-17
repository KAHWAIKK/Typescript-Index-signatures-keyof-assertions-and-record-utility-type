

/* TYPESCRIPT INDEX SIGNATURES,KEYOF ASSERTIONS & RECORD UTILITY TYPE */

//Index signatures

//index signature are useful when we are creating objects but we do not know the exact names of the object keys but we do know the shape of the object and you can declare the type of keys and the types of the values
//index signature are useful if you try to access the object properties dynamically


//example
interface TransactionObj {
    Pizza : number,
    Books : number,
    Job : number
}

const todaysTransactions: TransactionObj = {
    Pizza : -10,
    Books : -5,
    Job: 50

    
}

//index signature syntax
interface TransactionObjA {
    //{key : value} pairs
    //index or key keywords maybe used
    [index : string]/* representing the key */ : number/* representing the value */
}

const todaysTransactionsA: TransactionObjA = {
    Pizza : -10,
    Books : -5,
    Job: 50

    
}

/* --------------------------------------------------------------- */



//lets say we do not know what the member name are i.e Pizza, books, job in the TransactionObj interface are..

//one way to access the property

console.log(todaysTransactions.Pizza)// -10
console.log(todaysTransactions['Pizza'])// -10

//what we mean when we say to dynamically access the property, 1. Through creating a loop 2. Without creating a loop

let prop: string = 'Pizza'
//console.log(todaysTransactions[prop])
//Typescript shows an error >No index signature with a parameter of type 'string' was found on type 'TransactionObj'.


const todaysNet = (transactions : TransactionObj):
number => {
    let total = 0
    //using a for...in loop
    for ( const transaction in transactions ) {
       // total += transactions[transaction]
        //same error No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
        //we fix this by providing the index signature

    }
    return total
}

//lets say we do not know what the member name are i.e Pizza, books, job in the TransactionObj interface are..

//one way to access the property

console.log(todaysTransactions.Pizza)// -10
console.log(todaysTransactions['Pizza'])// -10

//what we mean when we say to dynamically access the property, 1. Through creating a loop 2. Without creating a loop

let propA: string = 'Pizza'
console.log(todaysTransactionsA[propA])//-10


const todaysNetA = (transactions : TransactionObjA):
number => {
    let total = 0
    //using a for...in loop
    for ( const transaction in transactions ) {
        total += transactions[transaction]//-10
        
    }
    return total
}

console.log(todaysNetA(todaysTransactionsA))//35


/* ----------------------- */

//OPTIONAL PROPERTIES

interface Student {
    [index : string] : string | number | number[] | undefined
    //you have to provide undefined when one of the properties is an option
    name: string,
    GPA : number,
    classes ?: number[]
}

//an object

const student : Student = {
    name : "Doug",
    GPA : 3.5,
    classes : [100,200]

}

//console.log(student.score)
//TS says score does not exist on type student
//This error goes away the moment we provided the undefined value in the index signature of undefined

console.log(student);//{
//     "name": "Doug",
//     "GPA": 3.5,
//     "classes": [
//         100,
//         200
//     ]
// }

//Writing loop that should iterate over the student object

for (const key in student){
    console.log(`${key} : ${student[key]}`)
    //name : "Doug",
    // GPA : 3.5,
    // classes : [100,200]
}

/* ------------------------------------- */

/* keyofAssertions */

//keyofAssertions are used to iterate over the object you have provided which does not have an index signature provided at the type interface
//we the the keywords -as keyof-


interface StudentA {
    /* [index : string] : string | number | number[] | undefined */
    //you have to provide undefined when one of the properties is an option
    name: string,
    GPA : number,
    classes ?: number[]
}

//an object

const studentA : StudentA = {
    name : "Doug",
    GPA : 3.5,
    classes : [100,200]

}

//console.log(student.score)
//TS says score does not exist on type student
//This error goes away the moment we provided the undefined value in the index signature of undefined

console.log(studentA);//{
//     "name": "Doug",
//     "GPA": 3.5,
//     "classes": [
//         100,
//         200
//     ]
// }

//Writing loop that should iterate over the student object

for (const key in studentA){
    console.log(`${key} : ${studentA[key as keyof StudentA]}`)
    //name : "Doug",
    // GPA : 3.5,
    // classes : [100,200]
}

/* Note the keyof type creates a union type and union type is the specific string literal so it will be the name gpa and classes  */


console.log(Object.keys(studentA))
// [
//     "name",
//     "GPA",
//     "classes"
// ]

//Alternatively you can use the keyword keyof and typeof to dynamically access the property values of the student object even if we do not know what the student object type is

Object.keys(studentA).map(key =>{
    console.log(student[key as keyof typeof student])
    //Doug
    //3.5
    //[100,200]
})


/* RECORD UTILITY TYPE */

const logStudentKey = (
    student : Student ,
    //we specify the key right here
    key : keyof Student) : void =>{
        console.log(`Student ${key} : ${student[key]}`)
    }

    logStudentKey(student, 'name')//Student name : Doug
    logStudentKey(student, 'GPA')//Student GPA : 3.5
    logStudentKey(student, 'classes')//Student classes : 100,200

    /* --------------------------------------- */

    /* interface Incomes {
        [key : string]: number
    } */

    //Alternatively

    type Streams = 'salary' | 'bonus' | 'sidehustle'

    //we will use utility type Record 
    type Incomes = Record<Streams, number>

    const monthlyIncomes: Incomes = {
        salary: 500,
        bonus: 100,
        sidehustle: 250
    }

    //For one to loop over items in the record utility type you have to use keyof assertions.

    for ( const reveneu in monthlyIncomes) {
        console.log(monthlyIncomes[reveneu as keyof Incomes])
        //console returns 
        //500
        //100
        //250
    }