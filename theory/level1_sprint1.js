// const a = { hello: ")))" }
// // що буде?
// a.hello = 4
// console.log(a.hello)
// a.hello++
// console.log(a.hello)

// let name = "vasya"
// name++
// console.log(name) // NaN тому що інкрементувати можна лише числа.
//
// if(name === NaN)
//     console.log("помилка в обчисленнях.") // виведеться?

// які з варіантів виведуть "Hello, vasya"?
// console.log("Hello, ${name}");
// console.log('Hello, ${name}');
// console.log(`Hello, ${name}`);

// let a = {}
// a.test = 1
// const name = "test"
// a[name]++ // це той же a.test
//
// console.log(a.hasOwnProperty("test"))
// console.log(a.test)
// console.log("test" in a) // що за in такий?
//
// delete a.test
// console.log(a["test"])

// let a = {  }
// let b = a
// b.hello = 1
// console.log(a.hello)
//
// // ===================
//
// let w = 10
// let v = w
// v = 1
// console.log(w)
//
// // ===================
//
// let c = []
// let d = c
// c[0] = 10
// console.log(d[0])

// ===================

// function test(z) {
//     z++
// }
// let z = 0
// test(z)
// console.log(z)

// ===================

// function test(zz) {
//     zz[0]++
// }
// let zz = [10,20,30]
// test(zz)
// console.log(zz[0])
//
// // ===================
//
// let k = [10,20,30]
// k[2] = k
// console.log(k[2][2][0])

// let a = () => "hello"
// console.log(typeof a)
//
// let b = [1,2,3]
// console.log(typeof b)
//
// class Hello { }
// let c = new Hello()
// console.log(typeof c)

// let name = "vasya"
// console.log(+name) // ?
// console.log(-name) // ?
//
// let age = "12"
// console.log(+age) // ?
// console.log(-age) // ?

// // що виведеться в консоль?
//
// if("10" > "2")
//     console.log("works fine1")
//
// if("10" > 2)
//     console.log("works fine2")
//
// // чому це так працює?

// const $ = [1, 2, 3];
//
//     console.log(typeof $)
let TestConstructor = function() {
}

TestConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function () {
        return this.myNumber;
    }
}

const myObj = new TestConstructor()
console.log(myObj.myNumber)
