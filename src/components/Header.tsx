'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Agents
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('course-overview')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Course
            </button>
            <button 
              onClick={() => scrollToSection('instructor')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Instructor
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('course-overview')}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                Course
              </button>
              <button 
                onClick={() => scrollToSection('instructor')}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                Instructor
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header