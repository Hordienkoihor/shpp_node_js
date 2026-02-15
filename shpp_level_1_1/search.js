/**
 * function designed to find products by their name
 * not case-sensitive
 *
 * @products: array of Product() objects
 * @search: string
 *
 * @return array containing every product which name contains search value as substring
 * */
export const search = (products, search) => {
    return products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
};
