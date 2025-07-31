'use client'

import { Hero } from './Hero'
import { VideoIntroduction } from './VideoIntroduction'
import { Statistics } from './Statistics'
import { EducationalPrograms } from './EducationalPrograms'
import { ResourceCenter } from './ResourceCenter'
import { Faculty } from './Faculty'
import { Footer } from './Footer'
import { Header } from './Header'

export function PasswordProtectedApp() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* Add back padding for fixed header */}
        <Hero />
        <VideoIntroduction />
        <Statistics />
        <EducationalPrograms />
        <ResourceCenter />
        <Faculty />
        <Footer />
      </div>
    </main>
  )
} 