import { prisma } from '@/lib/prisma/prismaClient'
import getUserById from '@/lib/services/user/get-user-by-id'
import { NextRequest, NextResponse } from 'next/server'

type UserParams = {
    params: {
        userId: string
    }
}

export async function GET(
    _req: NextRequest, 
    { params }: UserParams
) {

    const { userId } = params
    
    if (!userId) {
        return NextResponse.json({ error: 'userId not provided' }, { status: 400 })
    }

    const user = await getUserById(userId)

    return NextResponse.json({ user })
}

export async function PATCH(
    request: NextRequest,
    { params }: UserParams
){
    const { credits } = await request.json()
    const { userId } = params

    if (!userId) {
        return NextResponse.json({ error: 'userId not provided' }, { status: 400 })
    }

    if (!credits) {
        return NextResponse.json({ error: 'credits not provided' }, { status: 400 })
    }

    const user = await getUserById(userId)

    if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            credits
        }
    })

    return NextResponse.json({ user })
}