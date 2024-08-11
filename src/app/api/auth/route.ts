import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(req: NextRequest) {
    const token = req.cookies.get('token')?.value

    if (!token) {
        return NextResponse.json({ error: 'Token is missing' }, { status: 401 })
    }

    try {
        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) {
            return NextResponse.json({ error: 'Jwt secret is not defined' }, { status: 500 })
        }
        const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload

        if (decoded && decoded.id) {
            return NextResponse.json({ userId: decoded.id }, { status: 200 })
        } else {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
    }
}
