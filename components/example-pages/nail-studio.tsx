import Image from 'next/image'
import { Calendar, Sparkles, Star, Phone, Clock, Gift, Droplet, Palette } from 'lucide-react'

export function NailStudioExample() {
  return (
    <div className="min-h-full bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Nagel Oase</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Startseite</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Leistungen</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Galerie</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Über uns</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Kontakt</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <button className="py-2 px-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">Termin buchen</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-pink-600 h-96">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Nagelstudio Interieur" layout="fill" objectFit="cover" className="opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Willkommen in der Nagel Oase</h1>
            <p className="text-xl text-white mb-4">Wo Schönheit auf Fingerspitzen trifft</p>
            <button className="bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
              Jetzt Termin vereinbaren
            </button>
          </div>
        </div>
      </div>

      {/* Leistungen */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Droplet className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maniküre</h3>
              <p className="text-gray-600">Klassische und Spa-Maniküre für gepflegte Hände.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Palette className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gelnägel & Acryl</h3>
              <p className="text-gray-600">Langanhaltende, perfekt geformte Nägel nach Ihren Wünschen.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <Sparkles className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nail Art</h3>
              <p className="text-gray-600">Kreative Designs und einzigartige Nail Art Kreationen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Über uns */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Über die Nagel Oase</h2>
              <p className="text-gray-600 mb-6">
                In der Nagel Oase verwöhnen wir Sie seit über einem Jahrzehnt mit erstklassigen Nagelpflege-Dienstleistungen. Unser leidenschaftliches Team aus erfahrenen Nageldesignerinnen setzt sich dafür ein, Ihnen ein entspannendes Erlebnis und makellose Ergebnisse zu bieten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Ausgezeichnet als "Bestes Nagelstudio 2023"</span>
                </li>
                <li className="flex items-center">
                  <Droplet className="w-5 h-5 text-pink-500 mr-2" />
                  <span>Nur hochwertige, hautfreundliche Produkte</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
                  <span>Regelmäßige Fortbildungen für unser Team</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Unser Studio" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Galerie */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unsere Arbeiten</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative aspect-square">
                <Image src={`/placeholder.svg?height=300&width=300&text=Nail${item}`} alt={`Nail Art ${item}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kundenbewertungen */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Die Nagel Oase ist mein absoluter Lieblingsort für Maniküre und Pediküre. Das Team ist super freundlich und die Ergebnisse sind immer top!"</p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Ich bin begeistert von der Kreativität und Präzision der Nageldesignerinnen. Meine Nägel sehen jedes Mal fantastisch aus!"</p>
              <p className="font-semibold">- Lisa M.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-4">"Die Atmosphäre in der Nagel Oase ist so entspannend. Es ist wie ein Mini-Urlaub für mich, jedes Mal wenn ich hierher komme!"</p>
              <p className="font-semibold">- Anna K.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-pink-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Bereit für wunderschöne Nägel?
            </h2>
            <p className="text-xl text-pink-200">
              Buchen Sie jetzt Ihren Termin und lassen Sie sich verwöhnen!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-pink-50 transition duration-300">
              Termin buchen
            </button>
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 transition duration-300">
              Unsere Leistungen
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-semibold mb-2">Nagel Oase</h3>
              <p className="text-gray-400">Ihr Ort für Entspannung und Schönheit.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-semibold mb-2">Öffnungszeiten</h3>
              <p className="text-gray-400">Di - Fr: 10:00 - 19:00 Uhr</p>
              <p className="text-gray-400">Sa: 9:00 - 16:00 Uhr</p>
              <p className="text-gray-400">So & Mo: Geschlossen</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-white text-lg font-semibold mb-2">Kontakt</h3>
              <p className="text-gray-400 flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                +49 (0) 987 654321
              </p>
              <p className="text-gray-400 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                info@nageloase.de
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Nagel Oase. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

