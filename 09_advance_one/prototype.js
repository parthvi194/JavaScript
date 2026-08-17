// let myName = "Parthvi   "
// let myName = "Chai   "

// console.log(myName.trueLength);


let myHeros = ["Spiderman", "Thor"]

let heroPower = {
    Spiderman: "sling",
    Thor: "hammer",

    getSpiderpower: function () {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.parthvi = function () {
    // console.log(`Parthvi is present in all objects`);
}

Array.prototype.heyParthvi = function () {
    // console.log(`Parthvi says Hello!`);
}

// heroPower.parthvi()
myHeros.parthvi()
myHeros.heyParthvi()
// heroPower.heyParthvi()


// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignments',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode          "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"piyush".trueLength()
"iceTea".trueLength()