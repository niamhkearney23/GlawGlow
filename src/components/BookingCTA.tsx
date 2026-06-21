'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function BookingCTA() {
  return (
    <section id="booking" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cocoa via-cocoa to-espresso" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-20 w-40 h-40 rounded-full bg-bronze/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-latte/5 blur-3xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center space-y-8 md:space-y-12 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main CTA */}
          <motion.h2
            className="text-4xl md:text-6xl font-serif text-cream"
            variants={itemVariants}
          >
            {siteConfig.booking.headline}
          </motion.h2>

          <motion.p
            className="text-lg text-latte leading-relaxed"
            variants={itemVariants}
          >
            {siteConfig.booking.description}
          </motion.p>

          {/* Primary CTA button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={siteConfig.booking.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tertiary inline-block text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(176, 130, 84, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {siteConfig.booking.buttonText}
            </motion.a>
          </motion.div>

          {/* Secondary info */}
          <motion.div
            className="pt-8 border-t border-latte/20 space-y-2"
            variants={itemVariants}
          >
            <p className="text-cream/80">Follow us for updates and inspiration</p>
            <p className="text-latte font-semibold">{siteConfig.instagram}</p>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            className="pt-8 space-y-2"
            variants={itemVariants}
          >
            <p className="text-cream/60 text-sm">Trusted by hundreds • Melbourne based • Personalised care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
