export class AbstractProduct {
    id
    name
    description
    price
    quantity
    reviews
    images
    date
    brand

    generateId() {
        return 'id' + new Date().getTime() * Math.random()
    }

    setName(name) {
        this.name = name;
    };

    setDescription(description) {
        this.description = description;
    };

    setPrice(price) {
        this.price = price
    };

    setBrand(brand) {
        this.brand = brand
    }


    setQuantity(quantity) {
        this.quantity = quantity
    }

    setDate(date) {
        this.date = date
    }


    setReviews(reviews) {
        this.reviews = reviews
    }

    setImages(images) {
        this.images = images
    }


    getName() {
        return this.name
    };


    getDescription() {
        return this.description
    };


    getPrice() {
        return this.price
    };

    getBrand() {
        return this.brand
    }

    getQuantity() {
        return this.quantity
    }


    getDate() {
        return this.date
    }

    getReviews() {
        return this.reviews
    }

    getImages() {
        return this.images
    }

    getId() {
        return this.id
    }

    getReviewById(id) {
        return this.reviews.find((review) => review.id === id);
    };

    getImage(name) {
        if (!name) {
            return this.images[0];
        }

        return this.images.find((image) => image.name === name) || this.images[0];
    };

    addReview(review) {
        if (!this.reviews.find((r) => r.id === review.id)) {
            this.reviews.push(review);
        }
    };

    deleteReview(id) {
        let index = this.reviews.findIndex((r) => r.id === id);
        if (index !== -1) {
            this.reviews.splice(index, 1);
        }
    };

    getAverageRating() {
        let cumulativeRating = 0;

        this.reviews.forEach((r) => {
            cumulativeRating += r.rating;
        });

        return cumulativeRating / this.reviews.length;
    };

    getFullInformation() {
        return `
        id${this.id}
        name - ${this.name}\n
        description - ${this.description}\n
        price - ${this.price}\n
        price - ${this.price}\n
        images - ${this.images}\n
        date - ${this.date}\n
        brand - ${this.brand}\n
        price - ${this.price}\n
        images - ${this.images}\n
        reviews - ${this.reviews}\n
        `
    }

    getPriceForQuantity(quantity) {
        if (this.quantity <= 0) {
            return NaN
        }

        return this.price * quantity
    }

}