/**
 * function designed to sort an array of Product() objects
 * as for today can sort by 3 fields
 * 1) id
 * 2) name
 * 3) price
 *
 * @products: array of Product() objects
 * @sortRule: name of the field to be sorted by
 *
 * @return: sorted array
 * */
export const sortProducts = (products, sortRule) => {
    const options = ["id", "name", "price"]
    sortRule = sortRule.toLowerCase()

    if (!options.find((sr) => sr === sortRule)) {
        return products
    }

    return [...products].sort((a, b) => {
        let propertyA = a[sortRule]
        let propertyB = b[sortRule]

        if (sortRule === options[0] || sortRule === options[2]) {
            return Number(propertyA) - Number(propertyB)
        }

        return propertyA.toLowerCase().localeCompare(propertyB.toLowerCase())
    })

}