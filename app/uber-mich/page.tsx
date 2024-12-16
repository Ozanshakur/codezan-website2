import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/Footer'

export default function UberMichPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Über mich</h1>
          <p className="text-lg mb-6">
            Willkommen auf meiner "Über mich" Seite. Hier erfahren Sie mehr über meine Erfahrungen,
            Fähigkeiten und Leidenschaft für Webentwicklung.
          </p>
          {/* Fügen Sie hier weitere Inhalte hinzu */}
        </div>
      </main>
      <Footer />
    </>
  )
}

