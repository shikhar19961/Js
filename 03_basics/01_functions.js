
function sayMyName(){
    console.log("Shikhar");
}

let sum=0;
function addTwoNumbers(num1,num2){ // value inside () are parameters
    console.log(num1+num2);
}
addTwoNumbers(2,5) // value inside call is arguments

function calculateCartPrice(...number){
    console.log(number);
    return number;
}

console.log(calculateCartPrice(200,400,600));

