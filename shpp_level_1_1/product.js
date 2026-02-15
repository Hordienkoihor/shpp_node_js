/**
 *
 * constructor function for Product type object
 *  @name: string
 *  @description: string
 *  @price: number
 *  @brand: string
 *  @sizes: string array
 *  @active size: string
 *  @quantity: number
 *  @date: new Date()
 *  @reviews: Review type objects array
 *  @images: string array
 *
 *  @return: new Product()
 * */
export function Product(
    name,
    description,
    price,
    brand,
    sizes,
    activeSize,
    quantity,
    date,
    reviews,
    images,
) {
    this.id = String(new Date() * Math.random())
    this.name = name
    this.description = description
    this.price = price
    this.brand = brand
    this.sizes = sizes || ["XS", "S", "M", "L", "XL", "XXL"]
    this.activeSize = activeSize
    this.quantity = quantity
    this.date = date instanceof Date ? date : new Date()
    this.reviews = reviews
    this.images = images

    this.setName = (name) => {
        this.name = name;
    };

    this.setDescription = (description) => {
        this.description = description;
    };

    this.setPrice = (price) => {
        this.price = price
    };

    this.setBrand = (brand) => {
        this.brand = brand
    }

    this.setSizes = (sizes) => {
        this.sizes = sizes
    }

    this.setActiveSize = (activeSize) => {
        this.activeSize = activeSize
    }

    this.setQuantity = (quantity) => {
        this.quantity = quantity
    }

    this.setDate = (date) => {
        this.date = date
    }

    this.setReviews = (reviews) => {
        this.reviews = reviews
    }

    this.setImages = (images) => {
        this.images = images
    }

    this.getName = () => {
        return this.name
    };

    this.getDescription = () => {
        return this.description
    };

    this.getPrice = () => {
        return this.price
    };

    this.getBrand = () => {
        return this.brand
    }

    this.getSizes = () => {
        return this.sizes
    }

    this.getActiveSize = () => {
        return this.activeSize
    }

    this.getQuantity = () => {
        return this.quantity
    }

    this.getDate = () => {
        return this.date
    }

    this.getReviews = () => {
        return this.reviews
    }

    this.getImages = () => {
        return this.images
    }

    this.getId = () => {
        return this.id
    }

    this.getReviewById = (id) => {
        return reviews.find((review) => review.id === id);
    };

    this.getImage = (name) => {
        if (!name) {
            return this.images[0];
        }

        return images.find((image) => image.name === name) || this.images[0];
    };

    this.addSize = (newSize) => {
        if (!this.sizes.find((size) => size === newSize)) {
            sizes.push(newSize);
        }
    };

    this.deleteSize = (sizeToDelete) => {
        let index = this.sizes.findIndex((size) => size === sizeToDelete);
        if (index !== -1) {
            this.sizes.splice(index, 1);
        }
    };

    this.addReview = (review) => {
        if (!this.reviews.find((r) => r.id === review.id)) {
            reviews.push(review);
        }
    };

    this.deleteReview = (id) => {
        let index = this.reviews.findIndex((r) => r.id === id);
        if (index !== -1) {
            this.reviews.splice(index, 1);
        }
    };

    this.getAverageRating = () => {
        let cumulativeRating = 0;

        reviews.forEach((r) => {
            cumulativeRating += r.rating;
        });

        return cumulativeRating / reviews.length;
    };
}
