let score = "100";

//console.log (typeof score);
//console.log (typeof (score ));

let valueInNumber = Number(score);
//console.log (typeof valueInNumber);
//console.log (valueInNumber);
// "100"= 100
//"100abc"= NaN
// true=1 , false=0

/*let isLoggedIn = "";
console.log (typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log (booleanIsLoggedIn);
console.log (typeof booleanIsLoggedIn);
// 1=true, 0=false
// "abc"= true, ""=false  */  

//
 
console.log (+true); // 3
console.log (+false); // 0
console.log (+""); // 0
console.log (+"123abc"); // NaN
console.log (+"123"); // 123

let gameConducted = "500";
gameConducted++;// ++gameCounter; -> same works
console.log (gameConducted); //501
console.log (typeof gameConducted); //string 

console.log ("2" === 2); // false
console.log ("2" == 2); // true
