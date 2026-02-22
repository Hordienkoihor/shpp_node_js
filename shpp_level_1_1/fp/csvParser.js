export const generateRating = function (csv) {
    const checkString = /^(\d{2}\.\d{2},\d{2}\.\d{2},[а-яА-ЯіїєґІЇЄҐ\s]{3,},\d+)/
    let counter = 1

    let data = csv.split("\n")
        .filter(str => {
            return checkString.test(str)
        })
        .map(s => {
            const [x, y, name, population] = s.split(",")
            return {x: Number(x), y: Number(y), name, population: ~~population}
        })
        .sort((a, b) => {
            return b.population - a.population;
        })
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