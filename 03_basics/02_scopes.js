// ******** global and local scope ********

// let a = 10
// const b = 20
// var c = 30

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// ******** nested scope ********

function one() {
    const username = "Parthvi"

    function two(){
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username ="Parthvi"
    if (username === "Parthvi") {
        const website = " YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ********* Interesting *********

// console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// console.log(addOne(5))




const addTwo = function (num) {
    return num + 2
}

// console.log(addTwo(5))