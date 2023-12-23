// 1
// 12
// 123
// 1234
// 12345

let  num = 5
let str=''
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        str+=j
    }
    str+='\n'
}
console.log(str);