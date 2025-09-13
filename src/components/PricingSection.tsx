'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'full'>('full')

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners exploring AI agent development",
      monthlyPrice: 197,
      fullPrice: 1497,
      savings: 861,
      popular: false,
      features: [
        "12-week comprehensive curriculum",
        "6 hands-on projects",
        "Community forum access",
        "Basic code review sessions",
        "Course completion certificate",
        "Lifetime access to materials",
        "Email support",
        "Mobile app access"
      ],
      limitations: [
        "No 1-on-1 mentoring",
        "Limited office hours access",
        "No career coaching"
      ]
    },
    {
      name: "Professional",
      description: "For serious developers wanting expert guidance",
      monthlyPrice: 297,
      fullPrice: 2297,
      savings: 1267,
      popular: true,
      features: [
        "Everything in Starter",
        "8+ advanced projects",
        "Weekly 1-on-1 office hours",
        "Priority code reviews",
        "Career coaching sessions",
        "Industry networking events",
        "Job placement assistance",
        "Advanced deployment workshops",
        "Multi-agent system masterclass",
        "Production optimization guide"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      monthlyPrice: 497,
      fullPrice: 3997,
      savings: 1967,
      popular: false,
      features: [
        "Everything in Professional",
        "Custom team training",
        "Dedicated success manager",
        "Custom project development",
        "Advanced security training",
        "Team collaboration tools",
        "Bulk licensing discounts",
        "Custom integration support",
        "Priority support (24/7)",
        "White-label course materials"
      ],
      limitations: []
    }
  ]

  const faqs = [
    {
      question: "What's included in the lifetime access?",
      answer: "Lifetime access includes all course materials, future updates, community access, and any new modules we add to the curriculum."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll refund your payment."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade your plan at any time and only pay the difference."
    },
    {
      question: "Are there any prerequisites?",
      answer: "Basic programming knowledge is helpful but not required. We start from fundamentals and build up progressively."
    }
  ]

  const getPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.fullPrice
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invest in your future with our comprehensive AI agents course. 
            Choose the plan that best fits your learning goals and career aspirations.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly Payment
            </button>
            <button
              onClick={() => setBillingPeriod('full')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 relative ${
                billingPeriod === 'full'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Full Payment
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1">
                Save 35%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:transform hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">
                    ${getPrice(plan).toLocaleString()}
                  </div>
                  {billingPeriod === 'monthly' && (
                    <div className="text-sm text-gray-500">/month for 12 months</div>
                  )}
                  {billingPeriod === 'full' && plan.savings > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${plan.savings} vs monthly
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations (if any) */}
                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Not Included:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start text-sm text-gray-500">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 bg-white'
                  }`}
                  onClick={() => {
                    // Simulate enrollment process
                    alert(`Enrolling in ${plan.name} plan for $${getPrice(plan)}. This would redirect to payment processing.`)
                  }}
                >
                  {plan.popular ? 'Get Started Now' : 'Choose This Plan'}
                </Button>

                <div className="text-center text-xs text-gray-500">
                  30-day money-back guarantee
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk-Free Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're so confident in our course quality that we offer a 30-day money-back guarantee. 
              If you're not completely satisfied, we'll refund your entire payment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">30</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">30-Day Guarantee</h4>
              <p className="text-gray-600 text-sm">Full refund within 30 days, no questions asked</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lifetime Access</h4>
              <p className="text-gray-600 text-sm">Keep access to all materials and updates forever</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
              <p className="text-gray-600 text-sm">Ongoing career guidance and industry networking</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have already started their AI agent development journey.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => {
              // Scroll to pricing cards
              const element = document.querySelector('.grid.md\\:grid-cols-3')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Choose Your Plan Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection