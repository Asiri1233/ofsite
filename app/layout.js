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
      <script async src="https://umamiupdate-vu9i.vercel.app/script.js" data-website-id="97bec51e-ee7d-4e6c-a8b4-050379be9ff0"></script>
      <body className={`${inter.className} background `}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
