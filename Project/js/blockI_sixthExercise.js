'use strict'

var firstNum = parseInt(prompt("Enter first num:", 0));

while(isNaN(firstNum)){
	firstNum = parseInt(prompt("Enter first num:", 0));
}

if(firstNum%2 ==0){
	alert("Is pair");
}else{
	alert("Not is pair");
}