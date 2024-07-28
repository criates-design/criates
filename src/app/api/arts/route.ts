import getArtsToDownload from '@/lib/services/arts/get-arts-to-download'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const requesterId = searchParams.get('requesterId') || '1'
    const userList = await getArtsToDownload(page, requesterId)
    return NextResponse.json(userList)
}
