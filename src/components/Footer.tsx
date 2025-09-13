import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AI Agents Building Course
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Master the art of building intelligent AI agents. Transform your career with comprehensive, hands-on training from fundamentals to advanced multi-agent systems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:support@aiagentscourse.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                support@aiagentscourse.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#course-overview" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Course Overview
                </a>
              </li>
              <li>
                <a href="#instructor" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Meet the Instructor
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pricing & Enrollment
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Course Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Course Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Duration: 12 weeks</li>
              <li>Format: Online</li>
              <li>Level: Beginner to Advanced</li>
              <li>Projects: 8+ hands-on labs</li>
              <li>Support: 24/7 community</li>
              <li>Certificate: Yes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AI Agents Building Course. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#refund" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer