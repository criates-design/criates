import createNewUser from '@/lib/services/user/create-new-user'
import getUserList from '@/lib/services/user/get-user-list'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    const userList = await getUserList()
    return NextResponse.json(userList)
}

export async function POST(request: NextRequest) {
    const { name, email, image, role, document } = await request.json()

    try {

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        if (!role) {
            return NextResponse.json({ error: 'Role is required' }, { status: 400 })
        }
        
        const user = await createNewUser({
            name,
            email,
            image,
            role,
            document
        })
    
        return NextResponse.json(user, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
