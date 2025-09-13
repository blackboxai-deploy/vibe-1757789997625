'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email Support',
      description: 'Get help with course questions',
      contact: 'support@aiagentscourse.com',
      responseTime: 'Within 2 hours'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      responseTime: 'Instant response'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak with an advisor',
      contact: '+1 (555) 123-4567',
      responseTime: 'Mon-Fri, 9AM-5PM PST'
    },
    {
      icon: '🗓️',
      title: 'Schedule a Call',
      description: 'Book a personalized consultation',
      contact: 'Free 15-min consultation',
      responseTime: 'Available this week'
    }
  ]

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Innovation Street, Suite 400',
      zipcode: 'SF, CA 94105',
      description: 'Main headquarters and training center'
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, Floor 15',
      zipcode: 'New York, NY 10001',
      description: 'East Coast operations and partnerships'
    },
    {
      city: 'London',
      address: '789 AI District, Building C',
      zipcode: 'London, UK EC2M 1NH',
      description: 'European operations and research'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about the course? Need help choosing the right plan? 
            Our expert team is here to help you succeed in your AI journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Course inquiry, technical support, etc."
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you with your AI learning journey..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                        <p className="text-blue-600 font-medium mb-1">{method.contact}</p>
                        <p className="text-gray-500 text-xs">{method.responseTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Support Promise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">&lt;2hrs</div>
                    <div className="text-blue-100 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-blue-100 text-sm">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-blue-100 text-sm">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">5★</div>
                    <div className="text-blue-100 text-sm">Average Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h4>
                  <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                  <p className="text-gray-600 text-sm mb-3">{office.zipcode}</p>
                  <p className="text-gray-500 text-xs italic">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you're experiencing technical difficulties or urgent course-related issues, 
            our emergency support team is available to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded-lg"
              onClick={() => alert('This would open emergency support chat')}
            >
              Emergency Support Chat
            </Button>
            <Button 
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 font-semibold rounded-lg"
              onClick={() => alert('This would initiate emergency callback')}
            >
              Request Emergency Callback
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Emergency support for enrolled students only. Response within 30 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection