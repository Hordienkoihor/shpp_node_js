// 1.

function getFirstWord(a: string): number {
    // @ts-ignore //todo <<
    return a.split(/ +/)[0].length;
}

// 2.

function getUserNamings(a: { name: string, surname: string }) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

// 3.

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a?: { products?: { name?: string }[] }) {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
// type user = {
//     name: () => string,
//     cuteness?: number,
//     coolness?: number
// }

function hey(a: { name: () => string, cuteness: number } | { name: () => string, coolness: number }) {
    return "hey! i'm " + a.name();
}

hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})

// 4.2


function heyAbsPet(abstractPet: { name: () => string }) {
    return "hey! i'm " + abstractPet.name();
}

interface abstractPet {
    name: () => string,
}

class Cat implements abstractPet {
    constructor(public catName: string, public isBlack: boolean) {

    }

    name = () => this.catName;
}

class Dog implements abstractPet {
    constructor(public dogName: string, public id: number) {
    }

    name = () => this.dogName;
}

let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
heyAbsPet(a)
heyAbsPet(b)

// 4.3

function heySomething(a : {name : () => string, type: string, cuteness? : number, coolness? : number}) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness))
}

heySomething({name: () => "roma", type: "cat", cuteness: 100})
heySomething({name: () => "vasya", type: "dog", coolness: 100})

// 5.

// google for Record type
function stringEntries(a: Record<any, any>) {
    return Array.isArray(a) ? a : Object.keys(a)
}

// 6.

// you don't know Promises and async/await yet. Or do you?
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number) {
    return "*".repeat(a)
}

const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))