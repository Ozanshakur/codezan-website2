import Image from 'next/image'
import { Calendar, Scissors, Star, Phone, Clock, Users, Sparkles, Gift } from 'lucide-react'

export function HairSalonExample() {
  return (
    <div className="min-h-full bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Haartraum</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Startseite</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Dienstleistungen</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Über uns</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Galerie</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Kontakt</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <button className="py-2 px-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-400 transition duration-300">Termin buchen</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-purple-600 h-96">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Salon Interieur" layout="fill" objectFit="cover" className="opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Willkommen bei Haartraum</h1>
            <p className="text-xl text-white mb-4">Wo Stil auf Selbstvertrauen trifft</p>
            <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
              Jetzt Termin vereinbaren
            </button>
          </div>
        </div>
      </div>

      {/* Dienstleistungen */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unsere Dienstleistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Scissors className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Haarschnitt & Styling</h3>
              <p className="text-gray-600">Professionelle Schnitte und Stylings für jeden Anlass.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Sparkles className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Farbe & Highlights</h3>
              <p className="text-gray-600">Brillante Farben und natürlich aussehende Highlights.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Braut- & Event-Styling</h3>
              <p className="text-gray-600">Perfektes Styling für Ihren besonderen Tag.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Über uns */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Über Haartraum</h2>
              <p className="text-gray-600 mb-6">
                Seit über 20 Jahren verwandeln wir bei Haartraum nicht nur Haare, sondern auch das Selbstvertrauen unserer Kunden. Unser erfahrenes Team von Stylisten kombiniert Kreativität mit Präzision, um Ihnen den Look zu geben, von dem Sie schon immer geträumt haben.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Ausgezeichnet mit dem "Goldenen Kamm" 2022</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Über 10.000 zufriedene Kunden</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Nur hochwertige, umweltfreundliche Produkte</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Unser Team" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Kundenbewertungen */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Ich fühle mich jedes Mal wie neu geboren, wenn ich Haartraum verlasse. Die Stylisten sind echte Künstler!"</p>
              <p className="font-semibold">- Maria S.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Endlich habe ich einen Salon gefunden, der versteht, was ich will. Die Atmosphäre ist entspannt und das Ergebnis immer top!"</p>
              <p className="font-semibold">- Thomas K.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Die Beratung ist erstklassig und die Ergebnisse sprechen für sich. Ich komme immer wieder gerne zu Haartraum!"</p>
              <p className="font-semibold">- Laura M.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Bereit für eine Veränderung?
            </h2>
            <p className="text-xl text-purple-200">
              Buchen Sie noch heute Ihren Termin und erleben Sie den Haartraum-Unterschied!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition duration-300">
              Termin buchen
            </button>
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 transition duration-300">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-semibold mb-2">Haartraum</h3>
              <p className="text-gray-400">Ihr Partner für traumhaft schönes Haar.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-semibold mb-2">Öffnungszeiten</h3>
              <p className="text-gray-400">Mo - Fr: 9:00 - 20:00 Uhr</p>
              <p className="text-gray-400">Sa: 9:00 - 18:00 Uhr</p>
              <p className="text-gray-400">So: Geschlossen</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-white text-lg font-semibold mb-2">Kontakt</h3>
              <p className="text-gray-400 flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                +49 (0) 123 456789
              </p>
              <p className="text-gray-400 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                info@haartraum.de
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Haartraum. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

