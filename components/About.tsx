'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Passionate about creating exceptional web experiences
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            With years of experience in web development, we bring creativity and technical expertise to every project.
          </motion.p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: 'Innovative Solutions',
                description: 'We leverage cutting-edge technologies to deliver innovative web solutions.',
              },
              {
                name: 'Client-Focused Approach',
                description: 'Your success is our priority. We work closely with you to understand and meet your needs.',
              },
              {
                name: 'Quality Assurance',
                description: 'Rigorous testing ensures that every project meets the highest standards of quality.',
              },
              {
                name: 'Ongoing Support',
                description: 'We provide continuous support and maintenance to keep your web presence running smoothly.',
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

