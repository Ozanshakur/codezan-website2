import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-8">Vielen Dank für Ihre Anfrage!</h1>
          <p className="text-xl mb-8">
            Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.
          </p>
          <Link href="/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

