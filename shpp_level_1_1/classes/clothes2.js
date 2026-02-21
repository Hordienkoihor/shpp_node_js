import {AbstractProduct} from "./abstractProduct2.js";

/**
 *  prototype style class for a clothes product
 * @name - string
 * @description - string
 * @price - number
 * @brand - string
 * @quantity - number
 * @date - new Date()
 * @reviews - array of Review() objects
 * @images - string array
 * @sizes - string array, by default set to full range
 * @activeSize - string
 * */
export function Clothes(
    name,
    description,
    price,
    brand ,
    quantity,
    date = new Date(),
    reviews = [],
    images = [],
    sizes = ["XS", "S", "M", "L", "XL", "XXL"],
    activeSize = "M"
    ) {
    AbstractProduct.call(this, name, description, price, brand , quantity, date);

    this.sizes = sizes;
    this.activeSize = activeSize;

    // this.setName(name)
    // this.setDescription(description)
    // this.setPrice(price)
    // this.setBrand(brand)
    // this.setQuantity(quantity)
    // this.setDate(date)
    // this.setReviews(reviews)
    // this.setImages(images)

    this.setSizes = function (sizes) {
        this.sizes = sizes
    }

    this.setActiveSize = function (activeSize) {
        this.activeSize = activeSize
    }

    this.getSizes = function () {
        return this.sizes
    }

    this.getActiveSize = function () {
        return this.activeSize
    }

    this.addSize = function (newSize) {
        if (!this.sizes.find((size) => size === newSize)) {
            this.sizes.push(newSize);
        }
    };

    this.deleteSize = function (sizeToDelete) {
        let index = this.sizes.findIndex((size) => size === sizeToDelete);
        if (index !== -1) {
            this.sizes.splice(index, 1);
        }
    };


}

// Clothes.prototype = AbstractProduct.prototype;
