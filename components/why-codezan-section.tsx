'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Smile, Clock, Rocket, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Moderne Technologie',
    description: 'Wir nutzen die neuesten Webtechnologien für schnelle, responsive Websites.'
  },
  {
    icon: Shield,
    title: 'Sicherheit',
    description: 'Ihre Website und Kundendaten sind bei uns in sicheren Händen.'
  },
  {
    icon: Smile,
    title: 'Kundenorientiert',
    description: 'Wir hören Ihnen zu und setzen Ihre Vision präzise um.'
  },
  {
    icon: Clock,
    title: 'Pünktliche Lieferung',
    description: 'Wir halten Deadlines ein und liefern Ihr Projekt rechtzeitig.'
  },
  {
    icon: Rocket,
    title: 'Skalierbare Lösungen',
    description: 'Unsere Websites wachsen mit Ihrem Unternehmen mit.'
  },
  {
    icon: Headphones,
    title: 'Exzellenter Support',
    description: 'Wir bieten erstklassigen Support auch nach Projektabschluss.'
  }
]

export function WhyCodezanSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Warum Codezan?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6"
            >
              <reason.icon className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

