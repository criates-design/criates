import { prisma } from '@/lib/prisma/prismaClient'
import { Art } from '@prisma/client'

export type ArtsList = {
    arts: Art[],
    totalPages: number
}

export default async function getArts(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    const skip = (page - 1) * itemsPerPage

    const arts = await prisma.art.findMany({
        where: {
            status: 'concluido',
            requesterId: requesterId
        },
        skip: skip,
        take: itemsPerPage
    })

    const totalItems = await prisma.art.count({
        where: {
            status: 'concluido',
            requesterId: requesterId
        }
    })

    const totalPages = Math.ceil(totalItems / itemsPerPage)

    return {
        arts,
        totalPages
    }
}
