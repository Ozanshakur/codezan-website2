'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { HairSalonExample } from './example-pages/hair-salon'
import { NailStudioExample } from './example-pages/nail-studio'

const examples = [
  {
    name: 'Friseursalon "Haartraum"',
    component: HairSalonExample
  },
  {
    name: 'Nagelstudio "Nagel Oase"',
    component: NailStudioExample
  }
]

export function ExampleWidget() {
  const [currentExample, setCurrentExample] = useState(0)

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length)
  }

  const CurrentExampleComponent = examples[currentExample].component

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Beispiele unserer Arbeit
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-lg p-4 shadow-2xl"
        >
          <div className="relative rounded-lg overflow-hidden mb-4" style={{ height: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExample}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full overflow-y-auto"
              >
                <CurrentExampleComponent />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white text-lg font-semibold">{examples[currentExample].name}</p>
            <Button onClick={nextExample} className="text-white border-white hover:bg-white hover:text-black transition-colors">
              Nächstes Beispiel
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

