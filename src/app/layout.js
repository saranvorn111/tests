"use client"

import ProviderRedux from '@/redux/ProviderRedux'
import './globals.css'
import { Inter } from 'next/font/google'
import NavbarComponent from '@/components/NavbarComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavbarComponent/>
        <ProviderRedux>
          {children}
        </ProviderRedux>
        </body>
    </html>
  )
}