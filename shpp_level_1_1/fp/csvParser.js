export const generateRating = function (csv) {
    const checkString = /^(\d{2}\.\d{2},\d{2}\.\d{2},[а-яА-ЯіїєґІЇЄҐ\s]{3,},\d+)/
    let counter = 1

    function cityObjectGenerator(str) {
        const [x, y, name, population] = str.split(",")
        return {x: Number(x), y: Number(y), name, population: ~~population}
    }

    function populationComparator(a, b) {
        return b.population - a.population
    }

    function csvValidator(regex) {
        return (str) => {
            return regex.test(str)
        }
    }

    let data = csv.split("\n")
        .filter(csvValidator(checkString))
        .map(cityObjectGenerator)
        .sort(populationComparator)
        .slice(0, 10)
        .reduce((place, city) => {
            place[city.name] = {
                population: city.population,
                rating: counter++
            }
            return place
        }, {})

    return (text) => {
        return text.replace(new RegExp(Object.keys(data).join("|"), "g"), (word) => {
            return data.hasOwnProperty(word)
                ? `${word} (${data[word].rating} місце в ТОП-10 найбільших міст України, населення ${data[word].population} чоловік)`
                : word
        })
    }
}