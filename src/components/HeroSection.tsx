'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
              🚀 New Course Launch
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Master the Art of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Agent Development
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Build intelligent, autonomous AI agents from scratch. Learn cutting-edge techniques, 
              frameworks, and deployment strategies used by industry professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('pricing')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Learning Today
              </Button>
              <Button 
                onClick={() => scrollToSection('course-overview')}
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              >
                View Curriculum
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">12 Weeks</div>
                <div className="text-sm text-gray-600">Comprehensive Training</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Community</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbdfe298-e7c1-408c-89a6-f3bc36daaaee.png" 
                alt="AI Agent Development Dashboard showing code interface, neural network visualization, and agent performance metrics"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Live Demo
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-6 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transform -rotate-12 animate-pulse">
              Python & LangChain
            </div>
            <div className="absolute bottom-10 -right-6 bg-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transform rotate-12 animate-pulse">
              OpenAI & Anthropic
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8">Trusted by developers at leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Google</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Microsoft</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">OpenAI</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Meta</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg font-semibold text-gray-700">Anthropic</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection