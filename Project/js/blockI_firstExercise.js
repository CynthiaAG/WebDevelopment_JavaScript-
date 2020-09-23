'use strict'

var enter = 0;


while(enter==0){
	var number1= parseInt(prompt("Enter the first number: ", 0));
	var number2 = parseInt(prompt ("Enter the second number: ", 0));

	if(number1==0 || number2==0 || isNaN(number2) || isNaN(number1)){
		alert("Enter a number diferent 0: ");
		continue;
	}else if(number1<number2){
		alert("The small number is : "+ number1);
		enter=1;
		break;
	}else{
		alert("The big number is : "+ number1);
		enter=1;
		break;
	}	
}
