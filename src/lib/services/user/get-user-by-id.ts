import { prisma } from '@/lib/prisma/prismaClient'

type User = {
    id: string
    name: string
    credits: number
    email: string
    image: string
    role: string
    document: string
}

export default async function getUserById(userId: string): Promise<User> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user) {
            throw new Error('Usuário não encontrado')
        }
        return {
            id: user.id,
            name: user.name!,
            credits: user.credits!,
            email: user.email,
            image: user.image!,
            role: user.role,
            document: user.document!
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}