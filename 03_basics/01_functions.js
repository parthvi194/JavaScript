function sayMyname(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("V");
    console.log("I");
}

// sayMyname()

// function addTwonum(number1, number2){  // parameter passed
//     console.log(number1 + number2);
// }

function addTwonum(number1, number2){  // parameter passed

    // let result = number1 + number2
    // return result                    // method-1

    return number1 + number2            // method-2
}

const result = addTwonum(67, 66)        // arguments passed
// console.log("Result:", result);


function loginUserMessage(username = "you are") {
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Parthvi"))     // value passed (o/p -- Parthvi just logged in)
// console.log(loginUserMessage(""))     // empty string passed (o/p --  just logged in)
// console.log(loginUserMessage())      // value not passed (o/p -- undefined just logged in)


function calculateCartprice(...num1) {          // ... - REST operator
    return num1
}

// console.log(calculateCartprice(200, 400, 500, 900));

const user ={
    username: "Parthvi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Parthvi",
    price: 199
})

const mynewArray = [200, 400, 600, 800]

function returnSecondvalue(getArray) {
    return getArray[1]
}

// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([200, 400, 600, 800]));
