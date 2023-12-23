const object = {
    js : 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in object) {
    console.log(` ${key} -> ${object[key]}`);    
}

const arr = [1,2,3,4,5,6,7,8,9]

for (const key in arr) { // forIn loop pick up keys
    console.log(arr[key]);
}

const map = new Map() // Map store unique value // it is not interatable
map.set('IN' , 'India')
map.set('USA' , 'United States of America')
map.set('Fr' , 'France')
map.set('IN' , 'India')

for (const key in map) { // forIn loop pick up keys
    console.log(key); // Map can not be iterate using key
}