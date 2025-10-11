const accountId=12345// its a block-scope variable cannot redeclear const variables and cannot update the value
let accountName="Debdulal Mahata"// By Using let its a block-scope variable and it value can be modified
let accountEmail="debdulalmahata06@gmail.com"
var accountPassword="56789" // dont use it because of the isssue of block-scope and functional scope
accountCity="Jhargram"
let accountS

  accountName="Subhapam Mahata"
 var accountPassword="236595"
accountCity="Kolkata"


//console.log(accountId)
//console.log(accountName)
//console.log(accountPassword)
//console.log(accountCity)

console.table([accountId,accountName,accountEmail,accountPassword,accountCity,accountS])