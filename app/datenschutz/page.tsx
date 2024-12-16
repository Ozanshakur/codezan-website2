import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { LegalPageHeader } from '@/components/legal-page-header'

export default function DatenschutzPage() {
  return (
    <>
      <NavBar />
      <LegalPageHeader 
        title="Datenschutzerklärung" 
        description="Informationen zum Schutz Ihrer persönlichen Daten"
      />
      <main className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section id="ueberblick">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Datenschutz auf einen Blick</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </section>
            <section id="allgemein">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Allgemeine Hinweise</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </div>
            </section>
            <section id="datenerfassung">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Datenerfassung auf dieser Website</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                <p>
                  Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
              </div>
            </section>
            <section id="plugins">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Plugins und Tools</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Google Web Fonts</h3>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
              </div>
            </section>
          </div>
          <p className="text-sm text-gray-400 mt-12">
            Hinweis: Dies ist eine Platzhalter-Datenschutzerklärung. Bitte passen Sie den Inhalt an Ihre spezifische Situation an und lassen Sie ihn von einem Rechtsexperten überprüfen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

