import { verify } from 'jsonwebtoken'

const Authorization = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.sendStatus(403)
    }

    const token = authorization.split(' ')[1]
    
    try {
        const data = verify(token, 'otpNHcjBp2SO5gU')
        req.userId = data.id
        req.isAdmin = data.isAdmin
        return next()
    } catch {
        return res.sendStatus(403)
    }
}

export default Authorization
