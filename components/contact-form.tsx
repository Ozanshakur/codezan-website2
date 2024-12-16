'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react'

interface ContactFormProps {
  selectedPackage?: string;
  onSubmit?: (formData: { name: string; email: string; message: string }) => Promise<void>;
}

export function ContactForm({selectedPackage, onSubmit}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      if (onSubmit) {
        await onSubmit(formState)
      } else {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formState, package: selectedPackage }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || `HTTP error! status: ${response.status}`)
        }

        if (!data.success) {
          throw new Error(data.error || 'An unknown error occurred')
        }
      }

      setIsSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError(`Ein Fehler ist aufgetreten: ${err instanceof Error ? err.message : 'Unbekannter Fehler'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background opacity-50" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 20,
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-foreground mb-8"
        >
          Bereit zu starten?
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full bg-secondary text-foreground border-2 border-muted rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
              placeholder="Ihr Name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full bg-secondary text-foreground border-2 border-muted rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
              placeholder="Ihre E-Mail"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-5 text-muted-foreground" size={20} />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-secondary text-foreground border-2 border-muted rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
              placeholder="Ihre Nachricht"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 relative overflow-hidden"
            type="submit"
            disabled={isSubmitting}
          >
            <span className="relative z-10">{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-25"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            <Send className="absolute right-4 top-1/2 transform -translate-y-1/2" size={20} />
          </motion.button>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mt-6 bg-green-500 text-white p-4 rounded-lg flex items-center justify-center"
              >
                <CheckCircle className="mr-2" />
                <span>Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.</span>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mt-6 bg-destructive text-destructive-foreground p-4 rounded-lg flex items-center justify-center"
              >
                <AlertTriangle className="mr-2" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  )
}

