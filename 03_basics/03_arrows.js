const user = {
    username: "Shikhar.uttam",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} Good evening`);
        console.log(this);
    } 
}

user.welcomeMessage()

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(this);

// const chai = function(){
//     let username = "Shikhar Uttam"
//     console.log(this.username);// cannot acces this
// }
// chai()

// const chai = ()=>{
//     let username = "Shikhar Uttam"
//     console.log(this); // cannot acces this
// }
// chai()

const addTwo = (num1,num2)=> (num1+num2) // () does not require return statement {} requires

console.log(addTwo(2,4))
