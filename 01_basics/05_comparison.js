console.log("2" > 1);
console.log("02" > 1);

/*
    In comparison :-
        if we check by  == or any similar operator js convert into similar data type and then compare
        if we use === check then it does not perform conversion it directly compares
*/
var num = 2
//Conversion is performed
console.log("conversion is performed because of  == ",num== "2","check type");

//Converison is not performed
console.log("conversion is performed because of  === ",num === "2","check type");

//we should avoid below type of conversions
console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)



