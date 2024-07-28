import getArts from '@/lib/services/arts/get-arts'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const requesterId = searchParams.get('requesterId') || '1'
    const artsPage = await getArts(page, requesterId)
    return NextResponse.json(artsPage)
}
