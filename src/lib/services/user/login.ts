import { prisma } from '@/lib/prisma/prismaClient'

export type LoginUserParams = {
    email: string
    password: string
}

export default async function loginUser(User: LoginUserParams) {
    const { email, password } = User
    console.log(email, password)

    try {
        const newUser = await prisma.user.findFirst({
            where: {
                email,
                password
            }
        })

        return newUser
    } catch (e) {
        console.log(e)
    }

}