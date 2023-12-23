const isUserLoggedIn = true


// if(2 === "2") 
//     console.log("working")
// else 
//     console.log("working here")


//falsy
// false,0,-0 BigInt 0n,"",null,undefined,NaN


//truthy
// '0','false',[],{}, function(){}

// const values  = function(){
//     return false;
// }

// if(values()){
//     console.log("working");
// }else{
//     console.log("not working");
// }
if(Object.keys({}).length != 0){
    console.log("In if condition");
}else{
    console.log("In else condition");
}

if([].length == 0){
    console.log("In empty array");
}else{
    console.log("In non emopty erray");
}

if(0n){
    console.log("Working for false");
}else{
    console.log("working non false");
}

if(""){
    console.log("------------asd");
}else{
    console.log("----------else");   
}

// Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10

console.log(val1);

val2 = undefined ?? null ?? 10
val3 = undefined ?? 20
console.log(val3);