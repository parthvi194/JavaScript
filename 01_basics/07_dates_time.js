// Dates

let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2026, 7, 3)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 7, 3, 5, 3)

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-08-03")

// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("08-03-2026")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})