interface BaseTshirt{
	setColour(colour);
	getColour();
}

function stamp(logo: string){
	return function(target: Function){
		target.prototype.stamping = function():void{
			console.log("T-shirt has been printed with the logo: "+logo);
		}
	}
}

@stamp('Gucci Gang')
class Tshirt implements BaseTshirt{

	private colour: string;
	private model: string;
	private brand: string;
	private size: string;
	private price: number;

	constructor(colour, model, brand, size, price){
		this.colour = colour;
		this.model = model;
		this.brand = brand;
		this.size = size;
		this.price = price;
	}

	public setColour(colour){
		this.colour = colour;
	}

	public getColour(){
		return this.colour
	}

}

class Sweatshirt extends Tshirt{
	public hood: boolean;

	setHood(hood: boolean){
		this.hood = hood;
	}

	getHood():boolean{
		return this.hood;
	}
}


var tshirt = new Tshirt("fdas","fads","fdas","fas", 12);
console.log(tshirt);
tshirt.stamping();

var sweatshirtAdidas = new Sweatshirt("Red","Long sleeve", "Nike", "L", 30);
sweatshirtAdidas.setHood(true);
sweatshirtAdidas.setColour("Gray");

console.log(sweatshirtAdidas);