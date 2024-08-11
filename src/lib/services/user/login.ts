import { prisma } from '@/lib/prisma/prismaClient'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export type LoginUserParams = {
    email: string
    password: string
}

export default async function loginUser(User: LoginUserParams) {
    const { email, password } = User

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!existingUser) {
            throw new Error('Invalid credentials')
        }

        const isPasswordValid = bcrypt.compare(password, existingUser.password ?? '')

        if (!isPasswordValid) {
            throw new Error('Invalid credentials')
        }

        const jwtSecret = process.env.JWT_SECRET

        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined')
        }

        const token = jwt.sign({ id: existingUser.id, email: existingUser.email }, jwtSecret, {
            expiresIn: '1h',
        })

        return { token, user: existingUser }
    } catch (e) {
        console.log(e)
    }
}
