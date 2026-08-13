const coding = ["js", "rb", "py", "cpp", "php"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "PHP",
        languageFile: "php"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
    
} )