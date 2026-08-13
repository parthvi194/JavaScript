// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);   
// }
// chai()

(function chai() {
    console.log(`DB CONNECTED`);   
})();                                // chai = named IIFE used

( (name)  => {
    console.log(`DB CONNECTED TWO ${name}`); 
} )('parthvi')                      // unnamed IIFE used



// if you want to use two IIFE at same time then ; is used after 1 IIFE. 