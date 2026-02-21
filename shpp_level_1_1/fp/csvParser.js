export const generateRating = function (csv) {
    const checkString = /^(\d{2}\.\d{2},\d{2}\.\d{2},[а-яА-ЯіїєґІЇЄҐ\s]{3,},\d+)/
    let arr = csv.split("\n")

    arr = arr.filter(str => {
        return checkString.test(str)
    })
    arr = arr.map(s => {
        const [x, y, name, population] = s.split(",")
        return {x: Number(x), y: Number(y), name, population: ~~population}
    })

    arr = arr.sort((a, b) => {
        let ap = a.population
        let bp = b.population

        if (ap > bp) {
            return -1
        } else if (ap < bp) {
            return 1
        }

        return 0
    }).slice(0, 10)

    console.log(arr)

    let counter = 1
    console.log(arr)

    const topTenObj = arr.reduce((place, city) => {
        place[city.name] = {
            population: city.population,
            rating: counter++
        }
        return place
    }, {})

    return (text) => {
        return text.replace(new RegExp(Object.keys(topTenObj).join("|"), "g"), (word) => {
            return topTenObj.hasOwnProperty(word)
                ? `${word} (${topTenObj[word].rating} місце в ТОП-10 найбільших міст України, населення ${topTenObj[word].population} чоловік)`
                : word
        })
    }
}