const user = {
    username: "parthvi",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomemessage()
// user.username = "piyush"
// user.welcomemessage()

// console.log(this);

// function chai() {
//     let username = "parthvi"
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "parthvi"
//     console.log(this.username);
// }

// chai()


// const chai = () => {
//     let username = "parthvi"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {     // {} --- use thay tyare return lakhvu pade
//     return num1 + num2
// }

// console.log(addTwo(5,5));

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(5,5));

// const addTwo = (num1, num2) => (num1 + num2)        // () --- use thay tyare return na lakhvu pade

// const addTwo = (num1, num2) => ({username: "Parthvii"})

// console.log(addTwo(5,5));

// const myArray = [2, 3, 5, 8, 6, 1]

// myArray.forEach()