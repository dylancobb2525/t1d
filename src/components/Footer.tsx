'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="bg-gray-200 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/glc.png"
              alt="Global Learning Collaborative"
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <span className="text-gray-600">
              Privacy
            </span>
            <span className="text-gray-600">
              Terms
            </span>
            <span className="text-gray-600">
              About
            </span>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="mailto:info@glc.healthcare"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-300 text-center"
        >
          <p className="text-gray-500 text-sm">
            This curriculum is provided by IMPACT T1D.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            © 2025 IMPACT T1D. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}