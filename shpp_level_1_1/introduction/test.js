import {Product} from "./product.js";
import {sortProducts} from "./sortProducts.js";
import {Review} from "./review.js";
import {search} from "./search.js";

const products = [
    new Product(
        "TestName1232312",
        "TestDescription1",
        10,
        "abibas",
        ["M", "L"],
        "M",
        10,
        new Date("2023-01-01"),
        [],
        [],
    ),
    new Product(
        "TestName3",
        "TestDescription3",
        4.22,
        "abibas",
        ["S", "M", "L"],
        "L",
        50,
        new Date("2022-12-20"),
        [],
        [],
    ),
    new Product(
        "TestName4",
        "TestDescription4",
        120.0,
        "abibas",
        ["M"],
        "M",
        2,
        new Date("2024-02-10"),
        [],
        [],
    ),
    new Product(
        "TtName2222222222",
        "TestDescription2",
        7.0,
        "abibas",
        ["S", "XL"],
        "S",
        5,
        new Date("2023-05-15"),
        [],
        [],
    ),
];

products[0].setName("yallll")
console.log(products[0].name)

// const foundProducts = search(products, "stn");
// console.log(foundProducts.map((p) => p.name));
//
// const sortedByName = sortProducts(products, "name");
// const sortedByPrice = sortProducts(products, "price");
// const sortedById = sortProducts(products, "id");
//
// console.log(
//     "Sorted by Name:",
//     sortedByName.map((p) => p.getName() + " " + p.getId()),
// );
// console.log(
//     "Sorted by Price:",
//     sortedByPrice.map((p) => p.getName() + " " + p.getPrice()),
// );
// console.log(
//     "Sorted by Id:",
//     sortedById.map((p) => p.getName() + " " + p.getId()),
// );