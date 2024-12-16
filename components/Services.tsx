'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with the latest technologies.',
    icon: '🌐',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores for your products.',
    icon: '🛒',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications.',
    icon: '📱',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and visibility.',
    icon: '🔍',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            We offer a wide range of web development services to help your business grow online.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg text-white text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{service.title}</h3>
                  <p className="mt-5 text-base text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

