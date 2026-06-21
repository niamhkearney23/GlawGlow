'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function WhyUs() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container">
        <motion.div
          className="space-y-16 md:space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-serif">Personalised Luxury</h2>
            <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
              Every service is tailored to you. We're not just a studio — we're your glow-up partner.
            </p>
          </motion.div>

          {/* Why Us cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.whyUs.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 md:p-10 bg-white rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-latte to-bronze flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif">{item.title}</h3>
                  <p className="text-espresso/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicator */}
          <motion.div
            className="text-center pt-8 border-t border-latte/30"
            variants={itemVariants}
          >
            <p className="text-espresso/60 italic">
              Founded by Elissa Colafella • Trusted by hundreds of happy clients
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
