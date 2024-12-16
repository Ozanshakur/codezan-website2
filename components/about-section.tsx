'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Lightbulb, Zap } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="uber-mich" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Profilbild"
              width={300}
              height={300}
              className="rounded-full glass-effect p-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Über mich</h2>
            <p className="text-lg text-muted-foreground">
              Hallo! Ich bin Max Mustermann, ein leidenschaftlicher Webentwickler mit über 10 Jahren Erfahrung in der Erstellung moderner und effektiver Websites.
            </p>
            <p className="text-lg text-muted-foreground">
              Meine Expertise liegt in der Entwicklung von maßgeschneiderten Lösungen, die nicht nur gut aussehen, sondern auch optimal funktionieren und Ihrem Unternehmen einen echten Mehrwert bieten.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center p-6 glass-effect rounded-lg"
          >
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Moderne Technologien</h3>
            <p className="text-center text-muted-foreground">Ich arbeite mit den neuesten Webtechnologien, um Ihre Website zukunftssicher zu machen.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center p-6 glass-effect rounded-lg"
          >
            <Lightbulb className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Kreative Lösungen</h3>
            <p className="text-center text-muted-foreground">Jedes Projekt ist einzigartig. Ich entwickle individuelle Lösungen für Ihre spezifischen Anforderungen.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center p-6 glass-effect rounded-lg"
          >
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Schnelle Umsetzung</h3>
            <p className="text-center text-muted-foreground">Effiziente Arbeitsweise für eine schnelle Projektrealisierung ohne Kompromisse bei der Qualität.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

