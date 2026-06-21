'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/config/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream py-16 md:py-20">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 pb-12 border-b border-cream/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Studio info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-serif font-semibold">Studio</h4>
            <div className="space-y-2 text-cream/80">
              <p>{siteConfig.location}</p>
              <p className="text-sm">{siteConfig.name}</p>
              <p className="text-sm">By {siteConfig.founder}</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-serif font-semibold">Hours</h4>
            <div className="space-y-1 text-cream/80 text-sm">
              {siteConfig.footer.hours.map((hour, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-serif font-semibold">Connect</h4>
            <div className="space-y-2 text-cream/80 text-sm">
              <p>
                <a
                  href={`mailto:${siteConfig.footer.email}`}
                  className="hover:text-bronze transition-colors"
                >
                  {siteConfig.footer.email}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.footer.phone}`} className="hover:text-bronze transition-colors">
                  {siteConfig.footer.phone}
                </a>
              </p>
              <p className="pt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-bronze transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                  {siteConfig.instagram}
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-cream/60 text-sm space-y-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs">
            Designed with ✨ for premium beauty experiences
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
