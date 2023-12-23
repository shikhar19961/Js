// 12345
// 1234
// 123
// 12
// 1

let num = 5
let str = '' 
for(let i=num;i>0;i--){
    for(let j=1;j<=i;j++){
        str+=j
    }
    str+='\n'
}
console.log(str);