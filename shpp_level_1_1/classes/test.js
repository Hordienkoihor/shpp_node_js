import {Clothes} from "./clothes2.js";
import {AbstractProduct} from "./abstractProduct2.js";

const shirt = new Clothes("shirt", "plain shirt", 9, "Polo", 32)
// const abstractShirt = new AbstractProduct("shirt", "plain shirt", 9, "Polo", 32)
shirt.setProperty("price", 25)



console.log(shirt.getFullInformation())

function Hello() {
    this.message = "world";
    return "hey"
}


var { a: { x: X, x: Y }, a } = { a: { x: 1 } };

X;	// 1
Y;	// 1
a;	// { x: 1 }

