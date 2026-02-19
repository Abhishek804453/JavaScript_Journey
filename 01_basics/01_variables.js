const accountId = 13245
let accountEmail = "abhi@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abhishek@gmail.com" // allowed

accountPassword = "14325" // allowed

accountCity = "Patna" // allowed



 console.log(accountId);

/*
Prefer not to use var
beecause of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])