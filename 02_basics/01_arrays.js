// const myHeroes = ['Shikhar','Amit']

// const myArr2 = new Array(11,12,13,15,16)
// console.log(myArr);
// myArr2.push(6)
// myArr2.push(7) // add value at last in arr
// myArr2.pop() // remove last value
// console.log(myArr2);

// myArr.unshift(0)
// myArr.unshift(111) // add elements to the first place
// myArr.shift() // remove elements from the first place

// const newArr = myArr.join() // convert array into string

// console.log(typeof newArr);

// Log the array to the console
// console.log(myArr);
// console.log(myArr.indexOf(69));
// console.log(myArr.includes(9));


// You can copy the arrayString variable value from the console and use it as needed.



// console.log("A",myArr);

// const nym1 = myArr.slice(1,3);
const myArr = [0,1,2,3,4,5,6,7]

const myArrOne  = myArr.slice(0,2);
console.log('Slice method usage',myArrOne);
console.log('Original array after slice method',myArr);

const myArrTwo  = myArr.splice(0,2);
console.log('Splice method usage',myArrTwo);
console.log('Original array after splice method',myArr);
