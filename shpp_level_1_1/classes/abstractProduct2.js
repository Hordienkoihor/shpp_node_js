
/**
 * Abstract prototype style class for a product
 * @name - string
 * @description - string
 * @price - number
 * @brand - string
 * @quantity - number
 * @date - new Date()
 * @reviews - array of Review() objects
 * @images - string array
 * */
export function AbstractProduct(
    name,
    description,
    price,
    brand ,
    quantity,
    date = new Date(),
    reviews = [],
    images = []
) {
    if (this instanceof AbstractProduct) {
        throw new Error("is Abstract")
    }

    this.id = generateId();
    this.name = name
    this.description = description
    this.price = price
    this.brand = brand
    this.quantity = quantity
    this.date = date
    this.reviews = reviews
    this.images = images

    function generateId() {
        return 'id' + Math.round(new Date().getTime() * Math.random())
    }

    this.setName = function (name) {
        this.name = name;
    };

    this.setDescription = function (description) {
        this.description = description;
    };

    this.setPrice = function (price) {
        this.price = price
    };

    this.setBrand = function (brand) {
        this.brand = brand
    }

    this.setQuantity = function (quantity) {
        this.quantity = quantity
    }

    this.setDate = function (date) {
        this.date = date
    }

    this.setReviews = function (reviews) {
        this.reviews = reviews
    }

    this.setImages = function (images) {
        this.images = images
    }

    this.getName = function () {
        return this.name
    };

    this.getDescription = function () {
        return this.description
    };

    this.getPrice = function () {
        return this.price
    };

    this.getBrand = function () {
        return this.brand
    }

    this.getQuantity = function () {
        return this.quantity
    }

    this.getDate = function () {
        return this.date
    }

    this.getReviews = function () {
        return this.reviews
    }

    this.getImages = function () {
        return this.images
    }

    this.getId = function () {
        return this.id
    }

    this.getReviewById = function (id) {
        return this.reviews.find((review) => review.id === id)
    }

    this.getImage = function (name) {
        if (!name) {
            return this.images[0]
        }

        return this.images.find((image) => image.name === name) || this.images[0]
    }

    this.addReview = function (review) {
        if (!this.reviews.find((r) => r.id === review.id)) {
            this.reviews.push(review)
        }
    }

    this.deleteReview = function (id) {
        let index = this.reviews.findIndex((r) => r.id === id);
        if (index !== -1) {
            this.reviews.splice(index, 1)
        }
    }

    this.getAverageRating = function () {
        let cumulativeRating = 0;

        this.reviews.forEach((r) => {
            cumulativeRating += r.rating;
        })

        return cumulativeRating / this.reviews.length;
    }

    this.getFullInformation = function () {
        return `
        id - ${this.id}
        name - ${this.name}
        description - ${this.description}
        price - ${this.price}
        images - ${this.images}
        date - ${this.date}
        brand - ${this.brand}
        images - ${this.images}
        reviews - ${this.reviews}
        `
    }

    this.getPriceForQuantity = function (quantity) {
        if (quantity <= 0) {
            return NaN
        }

        return this.price * quantity
    }

    this.setProperty = function (property, value) {
        this[property] = value
    }
}

// AbstractProduct.prototype.getFullInformation = function () {
//     return `
//         id - ${this.id}
//         name - ${this.name}
//         description - ${this.description}
//         price - ${this.price}
//         images - ${this.images}
//         date - ${this.date}
//         brand - ${this.brand}
//         images - ${this.images}
//         reviews - ${this.reviews}
//         `
// }
//
// AbstractProduct.prototype.getPriceForQuantity = function (quantity) {
//     if (quantity <= 0) {
//         return NaN
//     }
//
//     return this.price * quantity
// }