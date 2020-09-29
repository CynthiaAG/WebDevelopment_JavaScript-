'use strict'

var firstNum = parseInt(prompt("Enter first num:", 0));
var secondNum= parseInt(prompt("Enter second num:", 0));

if(isNaN(firstNum) || isNaN(secondNum)){
	firstNum = parseInt(prompt("Enter first num:", 0));
	secondNum= parseInt(prompt("Enter second num:", 0));

}

document.write("<h1>From "+ firstNum + " to " + secondNum + " are these numbers: </h1>");

for (var i = firstNum; i <= secondNum; i++) {
	if(i%2 !=0){
		document.write("<p>"+ i + "</p>");
	}
	
}