'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/config/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20"
      id="hero"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-latte/30 opacity-60 pointer-events-none" />

      {/* Decorative circle elements for depth */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-latte/10 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-52 h-52 rounded-full bg-bronze/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 text-center space-y-8 md:space-y-12">
        <motion.div
          className="flex justify-center"
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo badge */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-latte to-bronze flex items-center justify-center shadow-luxury">
            <span className="text-4xl md:text-5xl">✨</span>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline badge */}
          <motion.p
            className="section-label"
            variants={itemVariants}
          >
            Melbourne Eastern Suburbs
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
            variants={itemVariants}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8"
            variants={itemVariants}
          >
            <Link href="#booking">
              <motion.button
                className="btn btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.hero.ctaPrimary}
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                className="btn btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.hero.ctaSecondary}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-cocoa/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
