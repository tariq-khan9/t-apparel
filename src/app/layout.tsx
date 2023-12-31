import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  Navbar  from '@/components/Navbar'
import {lobster, logo} from '../fonts/font'
import "slick-carousel/slick/slick.css"; 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T-APPAREL',
  description: 'Best online clothing store.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lobster.variable} ${logo.variable} bg-gray-200`}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
