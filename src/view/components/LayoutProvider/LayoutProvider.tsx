'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import SideDrawer from '@/view/components/SideDrawer'

export default function LayoutProvider({children }: {
    children: React.ReactNode
}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth')
                if (response.ok) {
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false)
                }
            } catch (error) {
                setIsAuthenticated(false)
            }
        }

        checkAuth()
    }, [])

    useEffect(() => {
        if (isAuthenticated === false && !pathname.includes('/login')) {
            router.push('/login')
        }
    }, [isAuthenticated, pathname, router])

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }

    const isLoginPage = pathname.includes('/login')

    return (
        <div className='flex h-[100vh] w-[100vw]'>
            {!isLoginPage && isAuthenticated && (
                <div>
                    <SideDrawer />
                </div>
            )}
            <div className="flex flex-col justify-center items-center gap-4 h-[100vh] min-w-[100vw]">
                {children}
            </div>
        </div>
    )
}
