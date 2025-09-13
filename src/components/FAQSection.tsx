'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      category: "Course Content",
      questions: [
        {
          question: "What programming languages will I learn?",
          answer: "The course primarily focuses on Python, which is the industry standard for AI development. We'll also cover JavaScript for web integrations and deployment scenarios. You'll work with frameworks like LangChain, LlamaIndex, and various API integrations."
        },
        {
          question: "Do I need prior AI or machine learning experience?",
          answer: "No prior AI experience is required! We start from the fundamentals and build up progressively. However, basic programming knowledge (in any language) will help you progress faster. We provide additional resources for complete beginners."
        },
        {
          question: "How hands-on is the course?",
          answer: "Extremely hands-on! You'll build 8+ real-world projects throughout the course, including chatbots, data analysis agents, customer service automation, and multi-agent systems. Each module includes practical coding exercises and project work."
        },
        {
          question: "What AI models and APIs will we use?",
          answer: "You'll work with leading AI platforms including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (Gemini), and open-source models. We cover both proprietary and open-source solutions to give you flexibility in your projects."
        }
      ]
    },
    {
      category: "Learning Experience",
      questions: [
        {
          question: "How much time should I dedicate each week?",
          answer: "We recommend 8-10 hours per week for optimal learning. This includes video lectures (2-3 hours), hands-on coding (4-5 hours), and project work (2-3 hours). The course is designed to be flexible around your schedule."
        },
        {
          question: "Is there live instruction or is it self-paced?",
          answer: "The course combines the best of both worlds. Core content is self-paced with high-quality video lectures, but we have weekly live office hours, code review sessions, and Q&A sessions with instructors for real-time support."
        },
        {
          question: "What kind of support do I get if I'm stuck?",
          answer: "Multiple support channels: 24/7 community forum, weekly office hours with instructors, peer study groups, code review sessions, and priority email support (Professional plan and above). You're never alone in your learning journey."
        },
        {
          question: "Can I access the course materials after completion?",
          answer: "Yes! You get lifetime access to all course materials, including any future updates and new modules we add. This ensures your knowledge stays current as the AI field evolves rapidly."
        }
      ]
    },
    {
      category: "Career & Practical",
      questions: [
        {
          question: "Will this help me get a job in AI?",
          answer: "Absolutely! Our curriculum is designed with industry needs in mind. You'll build a portfolio of real projects, get career coaching, and have access to our alumni network. 78% of our graduates report career advancement within 6 months."
        },
        {
          question: "Do you provide job placement assistance?",
          answer: "Yes! Professional and Enterprise plans include job placement assistance, resume reviews, interview preparation, and access to our network of hiring partners. We also host regular networking events with industry professionals."
        },
        {
          question: "Can I use the projects in my portfolio?",
          answer: "Definitely! All projects you build are yours to keep and showcase. We even provide guidance on how to present them effectively to potential employers or clients. Many students have gotten job interviews specifically because of their course projects."
        },
        {
          question: "Is the certificate recognized by employers?",
          answer: "Our certificate demonstrates completion of a comprehensive, practical AI agents course. While it's not an academic degree, employers value the hands-on experience and real-world projects you'll have completed. We provide detailed course transcripts showing your achievements."
        }
      ]
    },
    {
      category: "Technical Requirements",
      questions: [
        {
          question: "What equipment do I need?",
          answer: "A computer with internet access is all you need to start. We'll guide you through setting up your development environment. Cloud-based solutions are available if your local machine has limitations. Most projects can run on modest hardware."
        },
        {
          question: "Do I need to pay for AI API usage?",
          answer: "For learning purposes, the API costs are minimal (typically $5-20 total for the entire course). We provide guidance on cost optimization and using free tiers. Some modules use open-source models that don't require API costs."
        },
        {
          question: "What if I'm not comfortable with command line/terminal?",
          answer: "No problem! We include a comprehensive primer on command line basics specifically for AI development. We also provide GUI alternatives where possible and step-by-step tutorials for all technical setup."
        },
        {
          question: "Can I take this course on mobile devices?",
          answer: "While you can watch lectures on mobile devices, you'll need a computer for coding exercises and projects. However, our mobile app allows you to review materials, participate in forums, and track progress on the go."
        }
      ]
    },
    {
      category: "Pricing & Enrollment",
      questions: [
        {
          question: "What's your refund policy?",
          answer: "We offer a 30-day money-back guarantee, no questions asked. If you're not satisfied with the course for any reason within the first 30 days, we'll provide a full refund. We're confident in our course quality and want you to feel secure in your investment."
        },
        {
          question: "Can I upgrade my plan later?",
          answer: "Yes! You can upgrade from Starter to Professional or Enterprise at any time. You'll only pay the difference between plans, and the upgrade takes effect immediately with access to all additional features and benefits."
        },
        {
          question: "Do you offer student or group discounts?",
          answer: "Yes! We offer 20% student discounts with valid student ID. For groups of 5+ people, we offer custom enterprise pricing. Contact our team for special pricing arrangements for educational institutions or corporate training."
        },
        {
          question: "Is the payment secure?",
          answer: "Absolutely. We use industry-standard encryption and work with trusted payment processors (Stripe, PayPal). Your payment information is never stored on our servers, ensuring maximum security for your financial data."
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  let globalIndex = 0

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI Agents Building Course. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200">
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const currentIndex = globalIndex++
                  return (
                    <Card 
                      key={questionIndex} 
                      className="transition-all duration-300 hover:shadow-lg border-l-4 border-l-blue-500"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            <div className={`transform transition-transform duration-200 flex-shrink-0 ${
                              openFAQ === currentIndex ? 'rotate-180' : ''
                            }`}>
                              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>

                        {openFAQ === currentIndex && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you make the right decision. 
            Get personalized answers to your specific questions about the course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@aiagentscourse.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Email Support
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;2hrs</div>
            <div className="text-gray-600 text-sm">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Questions Answered</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection