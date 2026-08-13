// if

// const isUserloggedIn = true
// const temp = 41

// if(temp === 55){
//     console.log("less than 50");
// } else {
//     console.log("temp is greater than 50");
// }

// comparision <, >, <=, >=, ==, !=, ===, !==

// --------------------------------------

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// --------------------------------------

// const balance = 10000

// if(balance > 500) console.log("test"), console.log("test2");     // --- do not use

// if (balance < 5000) {
//     console.log("less than 5000");
// } else if (balance <7500) {
//     console.log("less than 7500");
// }else if (balance < 9500) {
//     console.log("less than 9500");
// }else {
//     console.log("less than 12000");
// }

const UserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (UserloggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail) {
    
    console.log("User logged in");    
}