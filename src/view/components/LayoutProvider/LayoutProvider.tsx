'use client'

import SideDrawer from '@/view/components/SideDrawer'
import { usePathname } from 'next/navigation'

export default function LayoutProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const isLoginPage = usePathname().includes('/login')
    return (
        <div className='flex h-[100vh], w-[100vw]'>
            {!isLoginPage && (
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
