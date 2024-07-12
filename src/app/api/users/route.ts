import createNewUser from '@/lib/services/user/create-new-user'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json('Healthy')
}

export async function POST(request: NextRequest) {
    const { name, email, image, role, document } = await request.json()

    const user = await createNewUser({
        name,
        email,
        image,
        role,
        document
    })

    return NextResponse.json(user, { status: 201 })
}
