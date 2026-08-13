// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best No.");
//     }
//     console.log(element);
// }

// console.log(element);

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
// }


let myArray = ["flash", "superman", "batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     } 
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    } 
    console.log(`value of i is ${index}`);
}