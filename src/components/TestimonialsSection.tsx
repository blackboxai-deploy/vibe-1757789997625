'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const TestimonialsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      role: "Senior Software Engineer",
      company: "Netflix",
      category: "career",
      rating: 5,
      text: "This course completely transformed my career. I went from knowing nothing about AI agents to building production-ready systems. The hands-on approach and real-world projects made all the difference.",
      outcome: "Promoted to AI Team Lead",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c88f1931-c482-4300-ae39-8a8e7ca2b7da.png"
    },
    {
      name: "Sarah Kim",
      role: "Product Manager",
      company: "Shopify",
      category: "transition",
      rating: 5,
      text: "As a non-technical PM, I was worried about keeping up. Dr. Chen's teaching style made complex concepts accessible. Now I can effectively communicate with our AI engineering teams.",
      outcome: "Led $2M AI Initiative",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/60505fd6-aa15-4d19-a088-5b5de157b6bd.png"
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "AgentFlow AI",
      category: "entrepreneur",
      rating: 5,
      text: "Built my entire startup's core product using techniques from this course. The multi-agent architecture section was particularly valuable. We're now serving 10k+ users daily.",
      outcome: "Raised $1.5M Seed Round",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d89d9e0-eabb-40c3-beb8-1c97854d8c63.png"
    },
    {
      name: "Jennifer Liu",
      role: "Data Scientist",
      company: "Tesla",
      category: "skill-upgrade",
      rating: 5,
      text: "The course filled a major gap in my skillset. Moving from traditional ML to agent-based systems opened up so many new possibilities. The deployment section was especially practical.",
      outcome: "Built Autonomous Testing Agents",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6273b67e-bf77-4b71-9256-506d001b6735.png"
    },
    {
      name: "Ahmed Hassan",
      role: "AI Research Engineer",
      company: "Microsoft",
      category: "skill-upgrade",
      rating: 5,
      text: "Even as someone with ML experience, I learned tons about agent orchestration and production deployment. The course content is cutting-edge and immediately applicable.",
      outcome: "Published 3 Research Papers",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b777e4a6-8ec2-48bc-bc6e-f483a4f260db.png"
    },
    {
      name: "Lisa Zhang",
      role: "Full Stack Developer",
      company: "Airbnb",
      category: "transition",
      rating: 5,
      text: "Made the transition from web development to AI engineering seamlessly. The course structure builds knowledge progressively, and the community support was incredible.",
      outcome: "Joined AI Platform Team",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e375422e-7807-4086-8ced-a86762fd2943.png"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: 'career', label: 'Career Growth', count: testimonials.filter(t => t.category === 'career').length },
    { id: 'transition', label: 'Career Transition', count: testimonials.filter(t => t.category === 'transition').length },
    { id: 'entrepreneur', label: 'Entrepreneurs', count: testimonials.filter(t => t.category === 'entrepreneur').length },
    { id: 'skill-upgrade', label: 'Skill Upgrade', count: testimonials.filter(t => t.category === 'skill-upgrade').length }
  ]

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of professionals who have transformed their careers through our comprehensive AI agents course.
          </p>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-blue-800 font-medium">Average Rating</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-green-800 font-medium">Completion Rate</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
              <div className="text-purple-800 font-medium">Career Advancement</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">$25k</div>
              <div className="text-orange-800 font-medium">Avg. Salary Increase</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              } px-4 py-2 rounded-full transition-all duration-200`}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600 truncate">{testimonial.role}</p>
                    <p className="text-sm text-gray-500 truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm text-gray-500">({testimonial.rating}/5)</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Outcome */}
                <div className="pt-4 border-t border-gray-100">
                  <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                    Outcome: {testimonial.outcome}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Graduates Work At</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {['Google', 'Microsoft', 'Netflix', 'Tesla', 'Shopify', 'Airbnb'].map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="font-semibold text-gray-700">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards transforming your career with AI agent development skills.
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection