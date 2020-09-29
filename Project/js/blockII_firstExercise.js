'use strict'

function getElements (){
	var arrayElement = new Array();
	for (var i = 0; i <= 5; i++) {
		arrayElement.push(prompt("Enter the elements", ""));
	}
	return arrayElement;
}

function showArray(elements, customText=""){
	document.write("<h1> Content to array" + customText + "</h1>");
	document.write("<ul>");
	elements.forEach((element, index) => {
		document.write("<li>"+ element + "</li>");
	});
	document.write("</ul>");
}

function searchElement(elements){
	var element = parseInt(prompt("Enter the elements to search", ""));
	var index= elements.findIndex(number => number == element);
	if(index && index > -1){
		document.write("<h1> Found at position: " + index + "</h1>");
	}else{
		document.write("<h1> Not found </h1>");
	}

}

var result = new Array();
result = getElements();
console.log(result);
/*result.sort(function (a, b) { return a-b});
result.sort();
result.reverse();
showArray(result, " organized");
document.write(result.length); */
searchElement(result);



