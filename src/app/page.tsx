import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import CourseOverview from '@/components/CourseOverview'
import InstructorProfile from '@/components/InstructorProfile'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <HeroSection />
        <CourseOverview />
        <InstructorProfile />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}