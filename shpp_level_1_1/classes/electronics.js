import {AbstractProduct} from "./abstractProduct2.js";

/**
 *  prototype style class for an electronics product
 * @name - string
 * @description - string
 * @price - number
 * @brand - string
 * @quantity - number
 * @date - new Date()
 * @reviews - array of Review() objects
 * @images - string array
 * @warranty - number, by default set to 0
 * @power - number, by default set to 1
 * */
export function Electronics(
    name,
    description,
    price = 1,
    brand,
    quantity = 1,
    date = new Date(),
    reviews = [],
    images = [],
    warranty = 0,
    power = 1
) {
    AbstractProduct.call(this, name, description, price, brand, quantity, date, reviews, images);

    this.setWarranty = function (warranty) {
        this.warranty = warranty
    }

    this.setPower = function (power) {
        this.power = power
    }
}