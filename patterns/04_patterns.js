// 1
// 22
// 333
// 4444
// 55555

let num = 5
let str = ''

for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        str+=i
    }
    str+='\n'
}
console.log(str);