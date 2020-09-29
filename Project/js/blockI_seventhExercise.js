'use strict'

var firstNum = parseInt(prompt("Enter num:", 0));

while(isNaN(firstNum)){
	firstNum = parseInt(prompt("Enter num:", 0));
}

document.write("<h1>The multiplication table of the number "+ firstNum+ " is: </h1>");

for(var i=0; i<=10; i++){
	document.write(i+ "x"+ firstNum + "=" + (i*firstNum) + "</br>");
}

document.write("<h1>All multiplication tables </h1>");
for(var i=0; i<=15; i++){
	document.write("<h2>Multiplication tables of number: "+ i + " </h2>");
	for(var j=0; j<=10; j++){
		document.write(j+ "x"+ i + "=" + (i*j) + "</br>");
	}
}