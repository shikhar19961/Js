// // const tinderUser = new Object() // It is singleton object

// // const tinder = {}

// // tinder.id = "1"
// // tinder["Full Name"] = "Shikhar Uttam"
// // tinder.isLoggedIn = false
// // console.log(tinder); 

// const regularUser= { 
//     email: "some@gmail.com",
//     fullName: {
//         userFullName : {
//             firstName : "Shikhar",
//             lastName : "Uttam"
//         }
//     }
// }

// // console.log(regularUser.fullName.userFullName.firstName);

// const objectOne = {
//     1:"a",
//     2:"b"
// }
// const objectTwo = {
//     3:"c",
//     4:"d"
// }

// const objectThree = Object.assign({},objectOne,objectTwo) // This will combine the object and first param is target

// // const objectThree = {
// //     ...objectOne , ...objectTwo
// // }

// console.log(`This is object three ${JSON.stringify(objectThree)}`);

// console.log(Object.keys(objectOne)); // it return key in array format
// console.log(Object.values(objectOne)); // it return key in array format
// console.log(Object.entries(objectOne)); // it return key in array format
// console.log(objectOne.hasOwnProperty('1')); // it return key in array format

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "Shikhar Uttam",
}


const {courseInstructor} = course // object destructure

console.log(courseInstructor);

// {
//     "name": "Shikhar",
//     "courseName": "Js in hindi",
//     "price": "free",
// }

