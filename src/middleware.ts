
import { NextRequest, NextResponse } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function middleware(req: NextRequest) {
    const token = req.headers.get('Authorization')?.split(' ')[1]
    console.log(token)

    if (!token) {
        // Redirecionar para a página de login se o token não for fornecido
        return NextResponse.redirect(new URL('/login', req.url))
    }

    try {
        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined')
        }

        const decoded = jwt.verify(token, jwtSecret)

        if (typeof decoded === 'object' && decoded && 'id' in decoded) {
            req.nextUrl.searchParams.set('userId', (decoded as JwtPayload & { id: string }).id)
            return NextResponse.next()
        } else {
            // Redirecionar para a página de login se o token for inválido
            return NextResponse.redirect(new URL('/login', req.url))
        }

    } catch (error) {
        // Redirecionar para a página de login se o token estiver expirado ou for inválido
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: [
        '/api/arts',
        '/dashboard',
        '/',
        '/downloads',
        '/profile',
    ],
}
