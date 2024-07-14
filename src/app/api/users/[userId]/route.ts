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