import loginUser from '@/lib/services/user/login'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    try {

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        if (!password) {
            return NextResponse.json({ error: 'Role is required' }, { status: 400 })
        }
        
        const user = await loginUser({
            email,
            password
        })
    
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}