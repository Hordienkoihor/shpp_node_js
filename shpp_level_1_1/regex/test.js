import {Validator} from "./validator.js";

const validator = new Validator();

const validEmail1 = "fi@secondpart.end"
const validEmail2 = "first-part@.se=cond%p.art.end"
const validEmail3 = "first.part@se=cond%part.r"

const invalidEmail1 = "f@secondart.end"
const invalidEmail2 = "first-part@.se=cond@part.end"
const invalidEmail3 = "-firstpart@.se=cond%.enddeded"
const invalidEmail4 = "firs_tpart@.se.en"
const invalidEmail5 = "firstpart@.se.enddeded"

const validEmails = [validEmail1, validEmail2, validEmail3]
const invalidEmails = [invalidEmail1, invalidEmail2, invalidEmail3, invalidEmail4, invalidEmail5]

// validEmails.map((email) => {
//     console.log(validator.validateEmail(email))
// })
//
// invalidEmails.map((email) => {
//     console.log(validator.validateEmail(email))
// })


const validPhones = ["+38 (099) 567 8901", "+38 099 5 6 7 8 9  01", "(09-9) 567-890-1", "--  (099) 567 890-1"]
const invalidPhones = ["+38 (099) 567 8901 0", "+38 099 a0000000", "+38 (0989) 567 8901", "+48 (0989) 567 8901"]

function runInvalidPhoneTest(phones) {
    phones.forEach((phone) => {
        if (validator.validatePhone(phone)) {
            return `Invalid test failed
            phone = ${phone} is considered valid`
        }
    })

    return "Success, all phones were validated as invalid"
}

function runValidPhoneTest(phones) {
    phones.forEach((phone) => {
        if (!validator.validatePhone(phone)) {
            return `valid test failed
            phone = ${phone} is considered invalid`
        }
    })

    return "Success, all phones were validated"
}

console.log("testing phones")
console.log(runInvalidPhoneTest(invalidPhones))
console.log(runValidPhoneTest(validPhones) + "\n")

const validPasswords = ["C00l_Pass", "SupperPas1"]
const invalidPasswords = ["Cool_pass", "C00l", "1"]

function runInvalidPasswordTest(passwords) {
    passwords.forEach((password) => {
        if (validator.validatePassword(password)) {
            return `Invalid test failed
            password = ${password} is considered valid`
        }
    })

    return "Success, all password were validated as invalid"
}

function runValidPasswordTest(passwords) {
    passwords.forEach((password) => {
        if (!validator.validatePassword(password)) {
            return `valid test failed
            password = ${password} is considered invalid`
        }
    })

    return "Success, all password were validated"
}

console.log("testing passwords")
console.log(runValidPasswordTest(validPasswords));
console.log(runInvalidPasswordTest(invalidPasswords));