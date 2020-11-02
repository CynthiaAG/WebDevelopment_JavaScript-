var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function stamp(logo) {
    return function (target) {
        target.prototype.stamping = function () {
            console.log("T-shirt has been printed with the logo: " + logo);
        };
    };
}
var Tshirt = /** @class */ (function () {
    function Tshirt(colour, model, brand, size, price) {
        this.colour = colour;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
    Tshirt.prototype.setColour = function (colour) {
        this.colour = colour;
    };
    Tshirt.prototype.getColour = function () {
        return this.colour;
    };
    Tshirt = __decorate([
        stamp('Gucci Gang')
    ], Tshirt);
    return Tshirt;
}());
var Sweatshirt = /** @class */ (function (_super) {
    __extends(Sweatshirt, _super);
    function Sweatshirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sweatshirt.prototype.setHood = function (hood) {
        this.hood = hood;
    };
    Sweatshirt.prototype.getHood = function () {
        return this.hood;
    };
    return Sweatshirt;
}(Tshirt));
var tshirt = new Tshirt("fdas", "fads", "fdas", "fas", 12);
console.log(tshirt);
tshirt.stamping();
var sweatshirtAdidas = new Sweatshirt("Red", "Long sleeve", "Nike", "L", 30);
sweatshirtAdidas.setHood(true);
sweatshirtAdidas.setColour("Gray");
console.log(sweatshirtAdidas);
