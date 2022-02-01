export default {
    email (v) {
        let errors = []

        try {
            v = new URL(v)
            if (v.protocol !== 'http:' && v.protocol !== 'https:') throw 'error'
        } catch (e) {
            errors = ['Ce lien ne semble pas correct']
        }

        return { valid: errors.length == 0, errors }
    },
    password (v) {
        let errors = []

        if (v.length < 6) errors.push('Ton mot de passe doit faire au moins 6 caractères.')

        return { valid: errors.length == 0, errors }
    }
}