'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Globe, Award } from 'lucide-react'
import Image from 'next/image'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="comprehensive-hub" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Large Graphic Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-blue-100 shadow-xl">
            <Image
              src="/newgraphic.png"
              alt="T1D Impact Graphic"
              fill
              className="object-contain p-8"
            />
          </div>
        </motion.div>

        {/* Text Content Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="heading-font text-xl lg:text-2xl font-bold text-slate-900 leading-tight mb-4"
          >
            Your Comprehensive Hub for Excellence in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-yellow-500 to-teal-600 bg-clip-text text-transparent">
              T1D education
            </span>
          </motion.h2>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <div className="space-y-3 text-xs lg:text-sm leading-relaxed">
              <p className="text-slate-700">
                Through integration of evidence-based therapies, cutting-edge technologies, and the authentic patient voice, IMPACT equips clinicians to deliver care that is both scientifically rigorous and deeply personalized.
              </p>
              <p className="text-slate-700">
                By aligning treatment strategies with guideline-directed goals and patient priorities, and by embedding real-world data and quality improvement principles, the IMPACT T1D fosters sustainable improvements in glycemic control, quality of life, and complication prevention.
              </p>
              <p className="text-slate-700">
                Together, IMPACT T1D offers a unique opportunity to drive meaningful change in the management, acceleration in the potential adoption of innovative therapies, and ultimately elevate standards of care on a global scale.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 