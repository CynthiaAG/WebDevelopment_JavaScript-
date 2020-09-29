'use strict'

var firstNum = parseFloat(prompt("Enter first num:", 0.));
var secondNum= parseFloat(prompt("Enter second num:", 0.));

while(isNaN(firstNum) || isNaN(secondNum)){
	firstNum = parseFloat(prompt("Enter first num:", 0.));
	secondNum= parseFloat(prompt("Enter second num:", 0.));
}

var result ="The sum of "+ firstNum + " and " + secondNum + " is: "+ (firstNum+secondNum) + "</br>" + 
			"The subtract of "+ firstNum + " and " + secondNum + " is: "+ (firstNum-secondNum) + "</br>" + 
			"The multiplication of "+ firstNum + " and " + secondNum + " is: "+ (firstNum*secondNum) + "</br>" + 
			"The division of "+ firstNum + " and " + secondNum + " is: "+ (firstNum/secondNum) + "</br>";

var result2 ="The sum of "+ firstNum + " and " + secondNum + " is: "+ (firstNum+secondNum) + "\n" + 
			"The subtract of "+ firstNum + " and " + secondNum + " is: "+ (firstNum-secondNum) + "\n" + 
			"The multiplication of "+ firstNum + " and " + secondNum + " is: "+ (firstNum*secondNum) + "\n" + 
			"The division of "+ firstNum + " and " + secondNum + " is: "+ (firstNum/secondNum) + "\n";


alert(result2);
console.log(result2);
document.write(result);