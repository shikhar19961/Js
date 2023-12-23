 
var array = [1,2,3,4,5]
for (const num of array) {
    console.log(num);
}

const greetings = "Hello World !!" // we can iterate str too using for of loop
for (const str of greetings) {
        console.log(`Each char is ${str}`);
}

// Maps

const map = new Map() // Map store unique value
map.set('IN' , 'India')
map.set('USA' , 'United States of America')
map.set('Fr' , 'France')
map.set('IN' , 'India')

for (const [key,value] of map) { // for of loop pick up values
        console.log(`${key}->${value}`);
}

// const myObject = {
//     GameOne: 'Nfs',
//     GameTwo: 'Gta v',
// }

// for (const [gKey,gValue] of myObject) {
//         console.log(`${gKey}->${gValue}`);
// }