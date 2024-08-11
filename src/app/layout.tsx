import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutProvider from '@/view/components/LayoutProvider/LayoutProvider'

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
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
