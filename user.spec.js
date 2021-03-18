// import User from './user.js'
class User {
    constructor(details) {
        const { firstname, lastname } = details
        this.firstname = firstname
        this.lastname = lastname
    }
    get name() {
        return `${this.firstname} ${this.lastname}`
    }
}

describe('User', () => {
    test('name return fullname', () => {
        const user = new User({
            firstname: 'Pich',
            lastname: 'Chaya'
        })

        expect(user.name).toBe('Pich Chaya')
    })
})
