// /**
//  *
//  * constructor function for Product type object
//  *  @name: string
//  *  @description: string
//  *  @price: number
//  *  @brand: string
//  *  @sizes: string array
//  *  @active size: string
//  *  @quantity: number
//  *  @date: new Date()
//  *  @reviews: Review type objects array
//  *  @images: string array
//  *
//  *  @return: new Product()
//  * */
// export function Product(
//     name,
//     description,
//     price,
//     brand,
//     sizes,
//     activeSize,
//     quantity,
//     date,
//     reviews,
//     images,
// ) {
//     this.id = String(new Date() * Math.random())
//     this.name = name
//     this.description = description
//     this.price = price
//     this.brand = brand
//     this.sizes = sizes || ["XS", "S", "M", "L", "XL", "XXL"]
//     this.activeSize = activeSize
//     this.quantity = quantity
//     this.date = date instanceof Date ? date : new Date()
//     this.reviews = reviews
//     this.images = images
//
//     this.setName = function (name) {
//         this.name = name;
//     };
//
//     this.setDescription = function (description) {
//         this.description = description;
//     };
//
//     this.setPrice = function (price) {
//         this.price = price
//     };
//
//     this.setBrand = function (brand) {
//         this.brand = brand
//     }
//
//     this.setSizes = function (sizes) {
//         this.sizes = sizes
//     }
//
//     this.setActiveSize = function (activeSize) {
//         this.activeSize = activeSize
//     }
//
//     this.setQuantity = function (quantity) {
//         this.quantity = quantity
//     }
//
//     this.setDate = function (date) {
//         this.date = date
//     }
//
//     this.setReviews = function (reviews) {
//         this.reviews = reviews
//     }
//
//     this.setImages = function (images) {
//         this.images = images
//     }
//
//     this.getName = function () {
//         return this.name
//     };
//
//     this.getDescription = function () {
//         return this.description
//     };
//
//     this.getPrice = function () {
//         return this.price
//     };
//
//     this.getBrand = function () {
//         return this.brand
//     }
//
//     this.getSizes = function () {
//         return this.sizes
//     }
//
//     this.getActiveSize = function () {
//         return this.activeSize
//     }
//
//     this.getQuantity = function () {
//         return this.quantity
//     }
//
//     this.getDate = function () {
//         return this.date
//     }
//
//     this.getReviews = function () {
//         return this.reviews
//     }
//
//     this.getImages = function () {
//         return this.images
//     }
//
//     this.getId = function () {
//         return this.id
//     }
//
//     this.getReviewById = function (id) {
//         return this.reviews.find((review) => review.id === id);
//     };
//
//     this.getImage = function (name) {
//         if (!name) {
//             return this.images[0];
//         }
//
//         return this.images.find((image) => image.name === name) || this.images[0];
//     };
//
//     this.addSize = function (newSize) {
//         if (!this.sizes.find((size) => size === newSize)) {
//             this.sizes.push(newSize);
//         }
//     };
//
//     this.deleteSize = function (sizeToDelete) {
//         let index = this.sizes.findIndex((size) => size === sizeToDelete);
//         if (index !== -1) {
//             this.sizes.splice(index, 1);
//         }
//     };
//
//     this.addReview = function (review) {
//         if (!this.reviews.find((r) => r.id === review.id)) {
//             this.reviews.push(review);
//         }
//     };
//
//     this.deleteReview = function (id) {
//         let index = this.reviews.findIndex((r) => r.id === id);
//         if (index !== -1) {
//             this.reviews.splice(index, 1);
//         }
//     };
//
//     this.getAverageRating = function () {
//         let cumulativeRating = 0;
//
//         this.reviews.forEach((r) => {
//             cumulativeRating += r.rating;
//         });
//
//         return cumulativeRating / this.reviews.length;
//     };
// }
