const accountId="acc_12345"
let accountEmail="rishabsingh8953@gmail.com"
var accountPassword="Rishab@123"
accountCity="New Delhi"
let accountState;

// accountId=2// not allowed
accountEmail="viv@w.com"
accountPassword="Viv@123"
accountCity="Mumbai"
console.log(accountId);
/*
Prefer not use var
because of its function scope and block scope

*/

console.table( [accountId,accountEmail,accountPassword,accountCity,accountState] );