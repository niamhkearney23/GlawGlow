'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/config/content'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cocoa shadow-luxury' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-full bg-latte flex items-center justify-center text-cocoa font-bold text-lg">
              ✨
            </div>
            <div className={`hidden sm:block transition-all ${isScrolled ? 'text-cream' : 'text-espresso'}`}>
              <p className="text-sm font-semibold">Glam & Glow</p>
              <p className="text-xs tracking-widest uppercase">Studio</p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className={`transition-colors ${isScrolled ? 'text-cream hover:text-latte' : 'text-espresso hover:text-cocoa'}`}>
            Services
          </Link>
          <Link href="#gallery" className={`transition-colors ${isScrolled ? 'text-cream hover:text-latte' : 'text-espresso hover:text-cocoa'}`}>
            Gallery
          </Link>
          <Link href="#booking" className={`transition-colors ${isScrolled ? 'text-cream hover:text-latte' : 'text-espresso hover:text-cocoa'}`}>
            Booking
          </Link>
          <motion.a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Follow on IG
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-cream hover:bg-bronze/20' : 'text-espresso hover:bg-cocoa/10'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-cocoa border-t border-latte/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container py-4 space-y-3 flex flex-col">
            <Link href="#services" className="text-cream hover:text-latte transition-colors py-2" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#gallery" className="text-cream hover:text-latte transition-colors py-2" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="#booking" className="text-cream hover:text-latte transition-colors py-2" onClick={() => setIsOpen(false)}>
              Booking
            </Link>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tertiary text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Follow on IG
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
