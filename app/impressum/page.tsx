import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { LegalPageHeader } from '@/components/legal-page-header'

export default function ImpressumPage() {
  return (
    <>
      <NavBar />
      <LegalPageHeader 
        title="Impressum" 
        description="Rechtliche Informationen und Kontaktdaten"
      />
      <main className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section id="angaben">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Angaben gemäß § 5 TMG</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
            </section>
            <section id="kontakt">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Kontakt</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Telefon: +49 (0) 123 456789</p>
                <p>E-Mail: info@codezan.de</p>
              </div>
            </section>
            <section id="umsatzsteuer">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Umsatzsteuer-ID</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789</p>
              </div>
            </section>
            <section id="verantwortlich">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Verantwortlich für den Inhalt</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
            </section>
          </div>
          <p className="text-sm text-gray-400 mt-12">
            Hinweis: Dies ist ein Platzhalter-Impressum. Bitte ersetzen Sie alle Informationen durch Ihre tatsächlichen Daten und lassen Sie den Inhalt von einem Rechtsexperten überprüfen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

