//пункт 1

(async () => {
    try {
        let data = await fetch('https://api.ipify.org?format=json');
        const json: { ip: string } = await data.json();

        console.log(json.ip);
    } catch (err) {
        console.log(err);
    }
})();

// пункт 2
async function getMyIp() {
    try {
        let data: Response = await fetch('https://api.ipify.org?format=json');
        const json: { ip: string } = await data.json()

        return json.ip;
    } catch (err) {
        console.log(err);
    }
}

getMyIp()
    .then(ip => console.log(ip))
    .catch(err => console.log(err));


// fetch('https://api.ipify.org?format=json').then(function (res) {
//     return res.json();
// }).then(function (data) {
//     console.log(data);
// })
//
//
// function getIp() {
//     fetch('https://api.ipify.org?format=json').then(function (res) {
//         return res.json();
//     }).then(function (data) {
//         console.log(data);
//     })
// }
//
// getIp();

//пункт 3

//a. Використайте async/await + Promise.all
async function fetchThreeNamesA() {
    try {
        const responses = await Promise.all([
            fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01'),
            fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01'),
            fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01')
        ]);
        const data = await Promise.all(responses.map(response => response.json()));
        return data.map(each => each.data[0].firstname);
    } catch (err) {
        console.log(err);
    }
}

fetchThreeNamesA().then(res => console.log(res))

//b. Використайте async/await але без Promise.all

async function fetchThreeNamesB() {
    try {
        const people: { data: [{ firstname: string }] }[] = []

        await fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01')
            .then(res => res.json())
            .then(json => people.push(json))
        await fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01')
            .then(res => res.json())
            .then(json => people.push(json))
        await fetch('https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01')
            .then(res => res.json())
            .then(json => people.push(json))

        // people.forEach(_person => console.log(_person.data[0]));
        return people.map(each => each.data[0].firstname);

    } catch (err) {
        console.log(err);
    }
}


fetchThreeNamesB().then(res => console.log(res))







