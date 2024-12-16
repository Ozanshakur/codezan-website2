'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Package } from 'lucide-react'
import { OfferWidget } from './offer-widget'

const pricingPlans = [
  {
    name: 'Basis',
    price: '499€',
    features: [
      'Responsive Design',
      'Bis zu 5 Seiten',
      'Kontaktformular',
      'SEO-Grundoptimierung'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: '999€',
    features: [
      'Alles aus Basis',
      'Bis zu 10 Seiten',
      'Content Management System',
      'E-Mail-Setup',
      'Premium SEO-Optimierung',
      '1 Monat kostenloser Support'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: '1999€',
    features: [
      'Alles aus Premium',
      'Unbegrenzte Seiten',
      'E-Commerce Integration',
      'Benutzerdefinierte Funktionen',
      'Leistungsoptimierung',
      '3 Monate kostenloser Support'
    ],
    popular: false
  }
]

export function PricingSection() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

  const openWidget = (packageName: string) => {
    setSelectedPackage(packageName)
    setIsWidgetOpen(true)
  }

  return (
    <section id="preise" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-foreground mb-12"
        >
          Unsere Angebote
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-effect rounded-lg p-6 flex flex-col ${
                plan.popular ? 'border-2 border-primary relative overflow-hidden' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-sm font-semibold">
                  Beliebtes Angebot
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="w-full bg-primary text-primary-foreground font-bold py-2 px-4 rounded transition duration-300 mt-auto hover:bg-primary/80"
                onClick={() => openWidget(plan.name)}
              >
                Auswählen
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-lg p-6 inline-block">
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Individuelles Paket</h3>
            <p className="text-muted-foreground mb-4">
              Nicht das Richtige dabei? Erstellen Sie Ihr maßgeschneidertes Paket, das perfekt zu Ihren Bedürfnissen passt.
            </p>
            <button 
              className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded transition duration-300 hover:bg-primary/80"
              onClick={() => openWidget('Individuell')}
            >
              Individuelles Angebot anfordern
            </button>
          </div>
        </motion.div>
      </div>

      <OfferWidget 
        isOpen={isWidgetOpen} 
        onClose={() => setIsWidgetOpen(false)} 
        selectedPackage={selectedPackage} 
      />
    </section>
  )
}

