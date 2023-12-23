// singleton

// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Shikhar",
    "full name": 'Hitest Choudhary',
    [mySym] : "my key 1", //in object we give symbol using []
    age: 18,
    location: "Jaipur",
    email: "shikhar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Mondays','Saturdays']
}

console.log(jsUser.name);
console.log(jsUser['name']);
console.log(jsUser['full name']);

console.log(jsUser[mySym]); // symbol is access using []

jsUser.email = 'amit@gmail.com'
// Object.freeze(jsUser) // it freeze the object
jsUser.email = 'changeVakye@gmail.com'

console.log(jsUser);

jsUser.greeting = function(){
    return console.log("Hello Good morning from js user",this.name);
}

console.log(jsUser.greeting); // return reference of functions
console.log(jsUser.greeting());

