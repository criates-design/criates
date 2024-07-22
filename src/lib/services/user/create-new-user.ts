import { prisma } from '@/lib/prisma/prismaClient'

type CreateUserParams = {
    name?: string
    email: string
    image?: string
    role: 'DESIGNER' | 'USER'
    password: string
    document?: string
}

export default function createNewUser(User: CreateUserParams) {
    const { name, email, image, role, document, password } = User

    const newUser = prisma.user.create({
        data: {
            name,
            email,
            image,
            role,
            password,
            document
        }
    })

    return newUser
}