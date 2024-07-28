import { prisma } from '@/lib/prisma/prismaClient'
import { Art } from '@prisma/client'

export type DownloadArtsList = {
    arts: Art[],
    totalPages: number
}

export default async function getArtsToDownload(page: number, requesterId: string): Promise<DownloadArtsList> {
    const itemsPerPage = 6
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
