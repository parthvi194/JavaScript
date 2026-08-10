// # Primitive Datatypes

// 7 types : String, Num, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const islogged_in = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 35488665445844n


// reference Type (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "parthvi",
    age: 22
}

const myFunction = function(){
    console.log("hello!");
}

// console.log(typeof bigNumber);
// console.log(typeof scoreValue);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof anotherId);

// *************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "modiparthvidotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@1234"
}

let userTwo = userOne

userTwo.email = "h1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);