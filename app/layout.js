import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL ('https://www.skyroots.co.in/'),
  title:{
    default: 'Skyroots Attestation',
    template: '%s | Skyroots'
  },
  description: 'Skyroots offers you genuine attestation services for educational, non-educational and commercial certificates. Talk to our experts - 9567397477.',
  keywords:["certificate attestation", "attestation", "apostille", "apostille services", "attestation for uae", "attestation for kuwait", "attestation for qatar", "embassy attestation for saudi", "apostille for oman", "pcc attestation", "police clearance certificate attestation", "education certificate attestation", "wes", "wes for canada", "wes verification", "hrd attestation", "translation", "home department"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='mt-24 md:mt-24'>
          <NextTopLoader
            showSpinner={false}
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
