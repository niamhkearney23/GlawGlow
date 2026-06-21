'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-32">
      <div className="container">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <p className="section-label">Client Results</p>
            <h2 className="text-4xl md:text-5xl font-serif">Gallery</h2>
            <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
              See the transformations our clients love
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {siteConfig.gallery.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-luxury hover:shadow-luxury-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 md:p-6 w-full">
                    <p className="text-cream font-serif text-lg">{item.category}</p>
                    <p className="text-latte text-sm opacity-90">{item.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center pt-8"
            variants={itemVariants}
          >
            <p className="text-espresso/70 mb-6">
              Ready to see your own transformation?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
