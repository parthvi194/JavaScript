// singleton
// object.

// ******** object literals ********

const mySym = Symbol("key1")

const jsUser = {
    name: "Parthvi",
    "full name": "parthvi modi",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 23,
    location: "patan",
    email: "parthvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.location)

// console.log(jsUser["email"]) // most used
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)

jsUser.email = "parthvi@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "parthvi@microsoft.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());