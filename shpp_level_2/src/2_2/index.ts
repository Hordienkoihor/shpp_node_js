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
/**
 * logs your current ip via api
 * */
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

//пункт 3

//a. Використайте async/await + Promise.all
/**
 * fetching 3 random person from https://fakerapi.it/
 * using async/await + Promise.all
 * @return an array containing 3 names of random people
 * */
async function fetchThreeNamesA() {
    try {
        const link = 'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01'
        const responses = await Promise.all([
            fetch(link),
            fetch(link),
            fetch(link)
        ]);
        const data = await Promise.all(responses.map(response => response.json()));
        return data.map(each => each.data[0].firstname);
    } catch (err) {
        console.log(err);
    }
}

fetchThreeNamesA().then(res => console.log("with async/promiseAll: " + res))

//b. Використайте async/await але без Promise.all
/**
 * fetching 3 random person from https://fakerapi.it/
 * using async/await
 * @return an array containing 3 names of random people
 * */
async function fetchThreeNamesB() {
    try {
        const link = 'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01'
        const [promise1, promise2, promise3] = [
            fetch(link),
            fetch(link),
            fetch(link)
        ]

        const [res1, res2, res3] = [await promise1, await promise2, await promise3];

        const [people1, people2, people3] = [await res1.json(), await res2.json(), await res3.json()];

        return [people1.data[0].firstname, people2.data[0].firstname, people3.data[0].firstname,];

    } catch (err) {
        console.log(err);
    }
}

fetchThreeNamesB().then(res => console.log("with async: " + res))

//c. Скористуйтеся виключно промісами, без async/await, без Promise.all .... це може бути досить важко
function fetchThreeNamesC() {
    const link = 'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01'

    return new Promise<string[]>((resolve, reject) => {
        const [promise1, promise2, promise3] = [
            fetch(link),
            fetch(link),
            fetch(link)
        ]

        let count = 0;

        function resolvePromise(promise: Promise<Response>) {
            promise
                .then((res: Response): Promise<{ data: [{ firstname: string }] }> => {
                    return res.json();
                })
                .then(json => {
                    names.push(json.data[0].firstname)
                    count++;

                    if (count === 3) {
                        names.push("resolved")
                        resolve(names)
                    }
                })
                .catch(err => console.log(err));
        }

        let names: string[] = [];
        resolvePromise(promise1)
        resolvePromise(promise2)
        resolvePromise(promise3)
    })


}

fetchThreeNamesC().then(res => console.log("without async/promiseAll: " + res))

function getRandomGender(): "female" | "male" {
    return Math.random() > 0.5 ? "female" : "male"
}

// Напишіть функцію, яка повинна за мінімальну кількість запитів отримати користувача жінку
//b з async/await
async function fetchWoman(fetchCount: number = 0) {
    let gender = getRandomGender();
    const link = `https://fakerapi.it/api/v2/persons?_quantity=1&_gender=${gender}&_birthday_start=2005-01-01`

    try {
        const response = await fetch(link)
        const person = await response.json()


        if (person.data[0].gender === "female") {
            return person.data[0].firstname + "fetches: " + fetchCount
        } else {
            return fetchWoman(fetchCount + 1)
        }
    } catch (err) {
        console.log(err);
    }
}


fetchWoman().then(res => console.log("fetching woman with async: " + res))

//a. без async/await
function fetchWomanPromise(fetchCount: number = 0): Promise<string> {
    let gender = getRandomGender();
    const link = `https://fakerapi.it/api/v2/persons?_quantity=1&_gender=${gender}&_birthday_start=2005-01-01`


    return fetch(link)
        .then((res: Response): Promise<{ data: [{ firstname: string, gender: string }] }> => {
            return res.json();
        })
        .then((json): string | Promise<any> => {
            if (json.data[0].gender === "female") {
                return (json.data[0].firstname + "fetches: " + fetchCount)
            } else {
                return fetchWomanPromise(fetchCount + 1)
            }
        })
        .catch(err => console.log(err));
}

fetchWomanPromise().then(res => console.log("fetching woman with promise: " + res))




