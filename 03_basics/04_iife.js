// Immediately Invoked Function Expressions (IIFE)

(()=>{
    console.log("this is first iife");
})(); // to stop context of this iife we need ; at end 


(function(username){
    console.log("this is second iife",username);
})("Shikhar Uttam") // this will be sent to function for iifee

console.log("ouside iifee");