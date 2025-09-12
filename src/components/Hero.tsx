'use client'

import { motion } from 'framer-motion'
import { Heart, Activity, Users, Award, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Sophisticated Background Patterns */}
      <div className="absolute inset-0">
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-blue-300/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-blue-300/20 w-full" />
            ))}
          </div>
        </div>

        {/* Animated Molecular Structures */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 opacity-20"
        >
          <div className="relative w-32 h-32">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-yellow-400 rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-300 rounded-full -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Floating Medical Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-20 opacity-30"
        >
          <Heart size={24} className="text-yellow-300" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-32 opacity-30"
        >
          <Activity size={28} className="text-teal-300" />
        </motion.div>

        {/* Dynamic Gradient Overlays */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%), radial-gradient(circle at 60% 80%, rgba(255, 193, 7, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 166, 184, 0.3) 0%, transparent 60%), radial-gradient(circle at 30% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 70%, rgba(0, 212, 229, 0.3) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(255, 193, 7, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%), radial-gradient(circle at 60% 80%, rgba(255, 193, 7, 0.08) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-6">


            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="heading-font text-3xl lg:text-4xl font-bold text-white leading-tight text-shadow-md">
                IMPACT T1D: Patient Journey-Driven Approach for{' '}
                <span className="bg-gradient-to-r from-blue-300 via-yellow-300 to-teal-300 bg-clip-text text-transparent">
                  Optimizing T1D care
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="text-sm lg:text-base text-blue-100 leading-relaxed max-w-xl"
            >
              IMPACT T1D seeks to redefine Type 1 Diabetes care by advancing healthcare professional education across the entire patient journey — from early risk identification to long-term outcome optimization.
            </motion.p>



            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pt-4"
            >
              <button 
                onClick={() => document.getElementById('educational-activities')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Programs
              </button>
            </motion.div>
          </div>

          {/* Visual Element Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="relative"
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Hero Image */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <Users className="text-blue-300" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <Activity className="text-teal-300" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
} 