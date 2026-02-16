export function Validator() {
    this.validateEmail = function (email) {
        const fullRegex = /^[a-z][a-z0-9.+-]{1,19}@[a-z0-9.!$%&’*+/=?^_-]{1,15}\.[a-z]{1,5}$/

        return fullRegex.test(email)
    }

    this.validatePhone = function (phone) {
        if (phone.length > 25) {
            return false
        }

        const regex = /^(\+38)?[\s-]*\(?[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\)?[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*\d[\s-]*(?!.)/

        return regex.test(phone)
    }

    this.validatePassword = function (password) {
        const regex = /(?=\w{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/

        return regex.test(password)
    }
}