import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LeakedFans',
  description: 'Stop paying for hoes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} background `}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
