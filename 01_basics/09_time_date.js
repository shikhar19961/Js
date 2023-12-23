// Dates

let myDate = new Date();
console.log(myDate); // 2023-12-04T06:01:44.190Z
console.log(myDate.toString()); //Mon Dec 04 2023 11:31:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Mon Dec 04 2023
console.log(myDate.toLocaleString()); // 12/4/2023, 11:31:44 AM
console.log(typeof(myDate)); // Object
let myCreatedDate = new Date(2023,0,23,5,3) // if dates are written in , sep them month starts from 0 else 1
console.log(myCreatedDate.toString());
console.log(`This is my created date time ${myCreatedDate.getTime()}`);
console.log(`This is my created date time ${myCreatedDate.getTime()}`);
let formatsDeclareDate = new Date("2023-01-14") // here month will start from 1
console.log(formatsDeclareDate);
let formatsDeclareDateTwo = new Date("01-12-2023") // here month will start from 1
console.log(formatsDeclareDateTwo);
let timeStamp = Date.now();
console.log(Math.floor(timeStamp/1000)); // Convert milliseconds to seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());





