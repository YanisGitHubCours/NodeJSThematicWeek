import jwt from 'jsonwebtoken'
import fs from 'fs'

const generatedAccessToken = (data) => {
    if (!data) return null

    delete data.password
    return jwt.sign(data, process.env.TOKEN, { expiresIn: '1800s' })
}

const auth = (name, password) => {
    const file = fs.readFileSync('./auth/user.json', 'utf8')
    const users = JSON.parse(file)
    const user = users.find((e) => e.name === name && e.password === password)

    return generatedAccessToken(user)
}

export { auth }