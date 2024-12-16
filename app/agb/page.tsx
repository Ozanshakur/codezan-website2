import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { LegalPageHeader } from '@/components/legal-page-header'

export default function AGBPage() {
  return (
    <>
      <NavBar />
      <LegalPageHeader 
        title="Allgemeine Geschäftsbedingungen (AGB)" 
        description="Rechtliche Grundlagen unserer Geschäftsbeziehung"
      />
      <main className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section id="geltungsbereich">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Geltungsbereich</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Codezan (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Auftraggeber") über die Erstellung und Pflege von Websites sowie damit zusammenhängende Dienstleistungen.
                </p>
              </div>
            </section>
            <section id="vertragsschluss">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Vertragsschluss</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>
                  Der Vertrag kommt durch die Annahme des Angebots des Anbieters durch den Auftraggeber zustande. Die Annahme erfolgt durch schriftliche Bestätigung oder durch schlüssiges Handeln, insbesondere durch Zahlung der vereinbarten Vergütung.
                </p>
              </div>
            </section>
            <section id="leistungsumfang">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Leistungsumfang</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>
                  Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot des Anbieters. Änderungen und Erweiterungen des Leistungsumfangs bedürfen einer gesonderten schriftlichen Vereinbarung.
                </p>
              </div>
            </section>
            <section id="mitwirkungspflichten">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Mitwirkungspflichten des Auftraggebers</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>
                  Der Auftraggeber ist verpflichtet, dem Anbieter alle für die Durchführung des Auftrags erforderlichen Informationen und Materialien rechtzeitig zur Verfügung zu stellen. Bei Verzögerungen durch den Auftraggeber verlängern sich die vereinbarten Fristen entsprechend.
                </p>
              </div>
            </section>
            <section id="verguetung">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Vergütung und Zahlungsbedingungen</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>
                  Die Vergütung richtet sich nach dem vereinbarten Angebot. Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
                </p>
              </div>
            </section>
          </div>
          <p className="text-sm text-gray-400 mt-12">
            Hinweis: Dies sind Platzhalter-AGB. Bitte passen Sie den Inhalt an Ihre spezifischen Geschäftsbedingungen an und lassen Sie ihn von einem Rechtsexperten überprüfen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

