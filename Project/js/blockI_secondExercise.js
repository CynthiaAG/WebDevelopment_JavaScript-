'use strict'

var add= 0;
var counter= 0;

do{
	var number= parseInt(prompt("Enter number until you enter a negative number"));
	if(isNaN(number)){
		number=0;

	}else{
		add=add+number;
		counter++;
	}
} while(number>=0){
	alert("The sum is: " + add);
	alert(" The medium is :" + add/counter);
}