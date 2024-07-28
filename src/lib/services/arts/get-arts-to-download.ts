import { prisma } from '@/lib/prisma/prismaClient'

export default async function getArtsToDownload(page: number, requesterId: string) {
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

    return arts
}
