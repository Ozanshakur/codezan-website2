'use client'

import { motion } from 'framer-motion'
import { Globe, Search, ShoppingCart, Users } from 'lucide-react'

const reasons = [
  {
    icon: Globe,
    title: 'Globale Präsenz',
    description: 'Erreichen Sie Kunden weltweit, rund um die Uhr.'
  },
  {
    icon: Search,
    title: 'Bessere Sichtbarkeit',
    description: 'Verbessern Sie Ihr Ranking in Suchmaschinen und werden Sie leichter gefunden.'
  },
  {
    icon: ShoppingCart,
    title: 'Online-Verkäufe',
    description: 'Eröffnen Sie neue Vertriebskanäle durch E-Commerce-Funktionen.'
  },
  {
    icon: Users,
    title: 'Kundenbindung',
    description: 'Bleiben Sie mit Ihren Kunden in Kontakt und bauen Sie langfristige Beziehungen auf.'
  }
]

export function ReasonsSection() {
  return (
    <section id="dienstleistungen" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Warum Sie eine Website brauchen
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6 text-center"
            >
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

