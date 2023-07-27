import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skyroots Attestation',
  description: 'Skyroots offers you genuine attestation services for educational, non-educational and commercial certificates. Talk to our experts - 9567397477.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='mt-24 md:mt-24'>
          {children}
        </main>
      </body>
    </html>
  )
}
