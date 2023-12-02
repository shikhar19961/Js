const accountId = 121233
let accountEmail = "shikhar@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountAddress; //this will be undefined

//accountId = 2 //Not allowed we can not change const keyword 
 /*
 Prefer not to use var because of block and functional scope instead use let keyword
 */
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountAddress])