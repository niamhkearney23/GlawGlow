'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/config/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="container">
        <motion.div
          className="space-y-20 md:space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <p className="section-label">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-serif">Services</h2>
          </motion.div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group"
                variants={itemVariants}
              >
                <div className="space-y-6">
                  {/* Image with hover zoom */}
                  <motion.div
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-luxury"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-serif">{service.title}</h3>
                    <p className="text-espresso/70 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-bronze text-lg mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-espresso/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="pt-4 border-t border-latte">
                      <p className="text-bronze font-semibold">{service.priceRange}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
