import { prisma } from '@/lib/prisma/prismaClient'

type CreateUserParams = {
    name?: string
    email: string
    image?: string
    role: string
    document?: string
}

export default function createNewUser(User: CreateUserParams) {
    const { name, email, image, role, document } = User

    const newUser = prisma.user.create({
        data: {
            name,
            email,
            image,
            role,
            document
        }
    })

    return newUser
}