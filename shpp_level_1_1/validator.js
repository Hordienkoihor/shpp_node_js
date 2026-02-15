export function Validator() {
    this.validateEmail = (email) => {
        if (email.length < 6) {
            return false
        }

        email = email.toLowerCase()
        // const startsWithLetterRegex = /^[a-z]/
        // const firstPartRegex = /[a-z0-9.+-]{1,19}/
        // const snailRegex = /@/
        // const secondPartRegex = /[a-z0-9.!$%&’*+/=?^_-]{1,15}/
        // const point = /\./
        // const domain = /[a-z]{1,5}/
        const fullRegex = /^[a-z][a-z0-9.+-]{1,19}@[a-z0-9.!$%&’*+/=?^_-]{1,15}\.[a-z]{1,5}$/

        return fullRegex.test(email)
    }
}