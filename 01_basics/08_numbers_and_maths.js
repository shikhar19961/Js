const score = 400

console.log(score);

const balance = new Number(100.2323)
console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++ Maths +++++++++++++++

console.log(Math.PI.toFixed(2));
console.log(Math.abs(-4)); // abs to convert - to + value
console.log(Math.round(4.3)); // To roundOff value
console.log(Math.round(4.5)); // To roundOff value
console.log(Math.ceil(4.4)); // To round higher value
console.log(Math.floor(4.2)); // To round lower value
console.log(Math.min(1,23,4,5,6)); //  min value
console.log(Math.max(1,23,4,5,6)); //  max value
console.log(Math.random()); //  random value

console.log((Math.random()*10)+1); //  random value

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);






