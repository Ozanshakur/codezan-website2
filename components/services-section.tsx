'use client'

import { motion } from 'framer-motion'
import { Globe, Code, Smartphone, ShoppingCart, Megaphone, BarChart } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Webdesign & Entwicklung',
    description: 'Maßgeschneiderte, responsive Websites für Ihr Unternehmen.'
  },
  {
    icon: Code,
    title: 'Frontend-Entwicklung',
    description: 'Moderne, interaktive Benutzeroberflächen mit React und Next.js.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimierung',
    description: 'Optimierung Ihrer Website für alle Geräte und Bildschirmgrößen.'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Lösungen',
    description: 'Sichere und benutzerfreundliche Online-Shops für Ihr Geschäft.'
  },
  {
    icon: Megaphone,
    title: 'SEO-Optimierung',
    description: 'Verbesserung Ihrer Sichtbarkeit in Suchmaschinen.'
  },
  {
    icon: BarChart,
    title: 'Leistungsoptimierung',
    description: 'Beschleunigung Ihrer Website für bessere Benutzererfahrung und SEO.'
  }
]

export function ServicesSection() {
  return (
    <section id="dienstleistungen" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-foreground mb-12"
        >
          Unsere Dienstleistungen
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-lg p-6"
            >
              <service.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

