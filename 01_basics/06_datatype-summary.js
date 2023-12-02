// Primitive Data Type

// 7 Types : String , Number , Boolean , null , udefined , Symbol(used to make value unique) , BigInt

// Non Primitive data type or reference type
// Array ,  Objects , Funcitons

/*
1 month ago
dynamically typed language
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


const heroes = ['Captain Americal','Thor'];
console.log(heroes);

const anotherHeroes = heroes;
anotherHeroes.push("Hitest Choudhary")
const name = {
    firstName:"Shikhar",
    lastName:"Uttam"
}
const myFunction = function(){
    console.log("This is function");
}
console.log(heroes);
console.log(typeof anotherHeroes);
console.log(typeof(myFunction));