'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertTriangle } from 'lucide-react'
import { ContactForm } from './contact-form'

interface OfferWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
}

export function OfferWidget({ isOpen, onClose, selectedPackage }: OfferWidgetProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, package: selectedPackage }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      if (!data.success) {
        throw new Error(data.error || 'An unknown error occurred')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 5000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError(`Ein Fehler ist aufgetreten: ${err instanceof Error ? err.message : 'Unbekannter Fehler'}`)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background p-8 rounded-lg shadow-xl max-w-md w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {selectedPackage === 'Individuell' ? 'Individuelles Angebot' : `${selectedPackage}-Paket buchen`}
            </h2>
            <p className="text-muted-foreground mb-6">
              Bitte füllen Sie das Formular aus, um Ihr {selectedPackage === 'Individuell' ? 'individuelles Angebot anzufordern' : 'ausgewähltes Paket zu buchen'}.
            </p>
            <ContactForm onSubmit={handleSubmit} selectedPackage={selectedPackage} />
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-green-500 text-white p-4 rounded-lg flex items-center"
              >
                <CheckCircle className="mr-2" />
                <span>Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.</span>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-destructive text-destructive-foreground p-4 rounded-lg flex items-center"
              >
                <AlertTriangle className="mr-2" />
                <span>{error}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

