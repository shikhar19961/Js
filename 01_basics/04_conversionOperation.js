let score = "33abc"


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN type - number
// true => 1 , falase => 0 

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true
// 0=> false
// "Shikhar"=>true
// ""=> false

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof String);