'use strict'

var firstNum = parseInt(prompt("Enter first num:", 0));

if(isNaN(firstNum)){
	firstNum = parseInt(prompt("Enter first num:", 0));
}

for (var i = 1; i <=firstNum; i++) {
	if(firstNum%i ==0){
		console.log(i + " is divisors of " + firstNum);
	}
	
}