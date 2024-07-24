import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideDrawer from '@/view/components/SideDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Criates',
  description: 'Criado de uma forma diferente',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
      <div className='flex h-[100vh], w-[100vw]'>
            <div>
                <SideDrawer />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 h-[100vh] min-w-[100vw]">
              {children}
            </div>
        </div>
      </body>
    </html>
  )
}
