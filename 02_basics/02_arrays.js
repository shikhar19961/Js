const intranet = ['pankaj','ritu','monika']
const skillStone = ['alka','amit','aman']
const managers = ['shikhar','dhirendra']
skillStone.push(...managers)
const newIntranet  = intranet.concat(skillStone)
const allTeam = [...intranet,...skillStone,...managers]
console.log(skillStone);
console.log(newIntranet);
console.table(allTeam);
skillStone.push(managers)
const newSubArray = [intranet,skillStone]

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(newSubArray);

const flatArray = newSubArray.flat(Infinity)
console.log(`This is test`,flatArray);

console.log(Array.isArray("Hitest"));
console.log(Array.from('Shikhar')); // convert from string to array 
console.log(Array.from({
    name: "Shikhar"
})); 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // convert set of element into array
