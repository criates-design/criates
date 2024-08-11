
import loginUser from '@/lib/services/user/login'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    try {
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        if (!password) {
            return NextResponse.json({ error: 'Password is required' }, { status: 400 })
        }
        
        const loginResult = await loginUser({
            email,
            password
        })
        
        if (!loginResult) {
            return NextResponse.json({ error: 'Login failed' }, { status: 401 })
        }
        
        const { token, user } = loginResult

        const response = NextResponse.json({ user }, { status: 200 })
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

        return response
    } catch (error) {
        return NextResponse.json({ error: error || 'Internal Server Error' }, { status: 500 })
    }
}
