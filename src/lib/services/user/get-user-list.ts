import { prisma } from '@/lib/prisma/prismaClient'

type User = {
    id: string
    name: string
    email: string
    image: string
    role: string
    document: string
}

export default async function getUserList(): Promise<User[]> {
    try {
        const users = await prisma.user.findMany()
        const userList: User[] = []
        users.forEach((user: User) => {
            userList.push({
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image!,
                role: user.role,
                document: user.document!
            })
        })
        return userList
    } catch (error) {
        console.error(error)
        throw error
    }
}