'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Calendar, TrendingUp, Award, Beaker, Database, ArrowRight, ChevronRight, Download, BookOpen, Users, Globe } from 'lucide-react'

interface ResourceItemProps {
  title: string
  authors: string
  journal: string
  year: string
  url: string
  index: number
  type: 'research' | 'congress'
}

function ResourceItem({ title, authors, journal, year, url, index, type }: ResourceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg bg-white border-slate-200 hover:border-blue-300 h-[280px] flex flex-col">
        
        {/* Header Row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              {type === 'research' ? <FileText size={16} className="text-blue-600" /> : <Calendar size={16} className="text-blue-600" />}
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600">{type === 'research' ? 'Research' : 'Congress'}</div>
              <div className="text-xs text-slate-500">{year}</div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs text-slate-400">
            <ExternalLink size={12} />
            <span className="uppercase tracking-wide font-medium">View</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors text-sm line-clamp-3">
          {title}
        </h3>

        {/* Authors/Details */}
        <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-100 flex-1">
          <div className="flex items-start space-x-2">
            <Users size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-slate-700 leading-relaxed font-medium mb-1 line-clamp-2">
                {authors}
              </p>
              <p className="text-xs text-slate-600 line-clamp-1">
                {journal}
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <div className="text-xs text-slate-500">
            {type === 'research' ? 'Peer-reviewed' : 'Upcoming event'}
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Read More</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showResources, setShowResources] = useState(false)

  const researchPapers = [
    {
      title: "Stem Cell-Derived, Fully Differentiated Islets for Type 1 Diabetes",
      authors: "Reichman TW, Markmann JF, Odorico J, et al; VX-880-101 FORWARD Study Group",
      journal: "N Engl J Med. 2025;393(9):858-868",
      year: "2025",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2506549",
      type: "research" as const
    },
    {
      title: "Semaglutide in Adults with Type 1 Diabetes and Obesity",
      authors: "Shah VN, Akturk HK, Kruger D, et al",
      journal: "NEJM Evid. 2025;4(8):EVIDoa2500173",
      year: "2025",
      url: "https://evidence.nejm.org/doi/10.1056/EVIDoa2500173",
      type: "research" as const
    },
    {
      title: "Scientific Statement on research directions to improve treatment options for people with type 1 diabetes",
      authors: "Endocrine Society Scientific Statement Task Force",
      journal: "Endocrine Society. 2025",
      year: "2025",
      url: "https://www.endocrine.org/news-and-advocacy/news-room/2025/endocrine-society-proposes-research-efforts-to-improve-treatment-options-for-people-with-diabetes",
      type: "research" as const
    },
    {
      title: "Automated Insulin Delivery in Older Adults with Type 1 Diabetes",
      authors: "Kudva YC, Henderson RJ, Kanapka LG, et al",
      journal: "NEJM Evid. 2025;4(1):EVIDoa2400200",
      year: "2025",
      url: "https://evidence.nejm.org/doi/10.1056/EVIDoa2400200",
      type: "research" as const
    },
    {
      title: "Oral Insulin Delay of Stage 3 Type 1 Diabetes Revisited in HLA DR4-DQ8 Participants",
      authors: "Zhao LP, Papadopoulos GK, Skyler JS, et al",
      journal: "Diabetes Care. 2024;47(9):1608-1616",
      year: "2024",
      url: "https://diabetesjournals.org/care/article/47/9/1608/156940/Oral-Insulin-Delay-of-Stage-3-Type-1-Diabetes",
      type: "research" as const
    },
    {
      title: "Teplizumab's immunomodulatory effects on pancreatic β-cell function in type 1 diabetes mellitus",
      authors: "Kokori E, Olatunji G, Ogieuhi IJ, et al",
      journal: "Clin Diabetes Endocrinol. 2024;10(1):23",
      year: "2024",
      url: "https://clindiabetesendo.biomedcentral.com/articles/10.1186/s40842-024-00181-w",
      type: "research" as const
    },
    {
      title: "Prevention of Cardiovascular Disease in Type 1 Diabetes",
      authors: "Wenstedt EFE, Vogt L",
      journal: "N Engl J Med. 2024;390(23):2226",
      year: "2024",
      url: "https://www.nejm.org/doi/10.1056/NEJMc2405604",
      type: "research" as const
    },
    {
      title: "Clinical pancreatic islet transplantation",
      authors: "Shapiro AM, Pokrywczynska M, Ricordi C",
      journal: "Nat Rev Endocrinol. 2017 May;13(5):268-277",
      year: "2017",
      url: "https://www.nature.com/articles/nrendo.2016.178",
      type: "research" as const
    }
  ]

  const congresses = [
    {
      title: "ATTD 2026 - Advanced Technologies and Treatment for Diabetes",
      authors: "Barcelona, Spain",
      journal: "11-14 March 2026",
      year: "2026",
      url: "https://attd.kenes.com/",
      type: "congress" as const
    },
    {
      title: "ADA 2026 Scientific Sessions - American Diabetes Association",
      authors: "New Orleans, Louisiana",
      journal: "5-8 June 2026",
      year: "2026",
      url: "https://professional.diabetes.org/scientific-sessions",
      type: "congress" as const
    },
    {
      title: "EASD 2026 - European Association for the Study of Diabetes",
      authors: "Milan, Italy",
      journal: "28 September-2 October 2026",
      year: "2026",
      url: "https://www.easd.org/annual-meeting/easd-2026/",
      type: "congress" as const
    },
    {
      title: "ISPAD 2026 - International Society for Pediatric and Adolescent Diabetes",
      authors: "Rio de Janeiro, Brazil",
      journal: "Annual Conference",
      year: "2026",
      url: "https://www.ispad.org/events/annual-conference/future-conferences/rio-de-janeiro-brazil-2026.html",
      type: "congress" as const
    }
  ]

  return (
    <section ref={ref} id="resource-center" className="pt-16 pb-4 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4s"></div>
        
        {/* Scientific Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0066CC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00A6B8 2px, transparent 2px)`,
            backgroundSize: '50px 50px, 80px 80px'
          }} />
        </div>
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
            <Database size={16} />
            <span>Knowledge Repository</span>
          </div>

          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Resource{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Your comprehensive hub for T1D research, clinical guidelines, and educational resources to support evidence-based patient care.
          </p>
          
          {/* View Resources Button */}
          <motion.button
            onClick={() => setShowResources(!showResources)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
          </motion.button>
        </motion.div>

        {/* Resources - Collapsible Content */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >

            {/* Research Papers Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen size={20} className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Latest Research Papers</h3>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {researchPapers.map((paper, index) => (
                  <ResourceItem key={index} {...paper} index={index} />
                ))}
              </div>
            </div>

            {/* Congresses Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Globe size={20} className="text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Upcoming Congresses</h3>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {congresses.map((congress, index) => (
                  <ResourceItem key={index} {...congress} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}