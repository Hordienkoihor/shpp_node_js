import {AbstractProduct} from "./abstractProduct";

export class Clothes extends AbstractProduct {
    sizes
    activeSize

    constructor(name, price, quantity, reviews, images, ) {
        super();
    }

    setSizes(sizes) {
        this.sizes = sizes
    }

    setActiveSize(activeSize) {
        this.activeSize = activeSize
    }

    getSizes() {
        return this.sizes
    }

    getActiveSize() {
        return this.activeSize
    }

    addSize(newSize) {
        if (!this.sizes.find((size) => size === newSize)) {
            this.sizes.push(newSize);
        }
    };

    deleteSize(sizeToDelete) {
        let index = this.sizes.findIndex((size) => size === sizeToDelete);
        if (index !== -1) {
            this.sizes.splice(index, 1);
        }
    };
}