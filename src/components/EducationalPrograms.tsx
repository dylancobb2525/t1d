'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Headphones, Clock, BookOpen } from 'lucide-react'
import Image from 'next/image'

interface ProgramCardProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  index: number
  icon: React.ReactNode
  color: string
  imageSrc: string
}

function ProgramCard({ title, subtitle, description, features, index, icon, color, imageSrc }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className={`${color} rounded-2xl p-6 shadow-xl border border-white/20 h-96 flex flex-col`}>
        {/* Header with Icon and Image */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">
              {title}
            </h3>
            <p className="text-white/80 text-sm font-medium">
              {subtitle}
            </p>
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-white/90 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Key Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span className="text-white/80 text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const programs = [
    {
      title: "T1D Video Briefs",
      subtitle: "Short-form Educational Videos",
      description: "2-5 minute videos featuring healthcare professionals, patient voices, and T1D partners. Focus on disease state information, trial data, and guidelines to build awareness and aid recruitment.",
      features: [
        "Expert commentary on trial results",
        "Patient care perspectives",
        "Treatment decision-making insights",
        "Filmed at major conferences"
      ],
      icon: <Play size={24} className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      imageSrc: "/mod.png"
    },
    {
      title: "T1D Podcasts",
      subtitle: "Podcast|PLUS Format",
      description: "Mobile-first podcasts with animated visuals, graphs, and slides for enhanced learning. Combines audio with visual elements for better engagement and retention.",
      features: [
        "Animated text and graphs",
        "Mobile-first design",
        "Enhanced visual learning",
        "Available on all platforms"
      ],
      icon: <Headphones size={24} className="text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      imageSrc: "/pod.png"
    },
    {
      title: "T1D MinuteCE",
      subtitle: "Microlearning Education",
      description: "Advanced microlearning platform featuring bite-sized episodes under 5 minutes each, designed for maximum retention and behavioral change. Features innovative time banking system and nonlinear learning journeys with comprehensive competency assessments.",
      features: [
        "Episodes under 5 minutes",
        "Time banking system",
        "Nonlinear learning journey",
        "Industry-leading outcomes"
      ],
      icon: <Clock size={24} className="text-white" />,
      color: "bg-gradient-to-br from-slate-500 to-slate-600",
      imageSrc: "/mince.png"
    }
  ]

  return (
    <section ref={ref} id="educational-activities" className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-6s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6">
            <BookOpen size={16} />
            <span>Educational Excellence</span>
          </div>
          
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive T1D education programs designed to advance healthcare professional knowledge and improve patient outcomes through evidence-based learning.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}