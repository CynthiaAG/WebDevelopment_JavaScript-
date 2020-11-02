type mix = string | number;

let chain: mix = "cynthiaJ.";

chain = 45;

// number
let num: number = 12;

// Boleano
let bool: boolean = true;

// Any
let anything: any = "hello";
anything = 77;

// Arrays
var lenguages: Array<string> = ["PHP", "JS", "CSS"];

let years: any[] = ["twelve", 13, 14];

// Let vs var
var num1 = 10;
var num2 = 12;

if(num1 == 10){
	var num1 = 44;
	var num2 = 55;

	console.log(num1, num2);
}

console.log(num1, num2);


console.log(chain, num, bool, anything, lenguages, years);