import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codezan - Web Development',
  description: 'Modern web development solutions for businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

