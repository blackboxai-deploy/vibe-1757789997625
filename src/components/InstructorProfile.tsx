import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const InstructorProfile = () => {
  const achievements = [
    { number: "10+", label: "Years in AI" },
    { number: "50+", label: "AI Projects" },
    { number: "1000+", label: "Students Trained" },
    { number: "15+", label: "Publications" }
  ]

  const expertise = [
    "Machine Learning",
    "Natural Language Processing",
    "LangChain & LlamaIndex",
    "OpenAI & Anthropic APIs",
    "Vector Databases",
    "Multi-Agent Systems",
    "Production Deployment",
    "AI Ethics & Safety"
  ]

  const experience = [
    {
      title: "Senior AI Engineer",
      company: "OpenAI",
      duration: "2021 - Present",
      description: "Leading development of advanced AI agents and multi-modal systems"
    },
    {
      title: "AI Research Scientist",
      company: "Google DeepMind",
      duration: "2019 - 2021",
      description: "Research on autonomous agents and reinforcement learning systems"
    },
    {
      title: "Machine Learning Engineer",
      company: "Microsoft",
      duration: "2017 - 2019",
      description: "Built scalable ML pipelines and intelligent automation systems"
    }
  ]

  return (
    <section id="instructor" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Meet Your Instructor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from an industry expert with over a decade of experience building 
            production AI systems at leading tech companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Image & Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38b783c2-f21f-4e6c-88f2-84fc2262c59c.png" 
                  alt="Professional AI expert instructor with confident expression, wearing business casual attire in modern office setting"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  AI Expert
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Sarah Chen</h3>
            <p className="text-xl text-blue-600 mb-4">Senior AI Engineer @ OpenAI</p>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
              PhD in Computer Science from Stanford, specializing in autonomous agent systems 
              and multi-agent architectures. Former researcher at Google DeepMind and Microsoft.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {expertise.map((skill, index) => (
                <Badge key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-3 py-1 text-xs border border-blue-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience & Credentials */}
          <div className="space-y-6">
            {/* Professional Experience */}
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Professional Experience</h4>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="pb-4">
                        <h5 className="font-semibold text-gray-900">{exp.title}</h5>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                        <p className="text-gray-600 text-sm">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Certifications */}
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Education & Certifications</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900">PhD in Computer Science</h5>
                    <p className="text-purple-600">Stanford University</p>
                    <p className="text-sm text-gray-500">Specialization: Autonomous Agent Systems</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">MS in Artificial Intelligence</h5>
                    <p className="text-purple-600">Carnegie Mellon University</p>
                    <p className="text-sm text-gray-500">Focus: Multi-Agent Reinforcement Learning</p>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">AWS Certified ML Specialty</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Google Cloud AI/ML</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">OpenAI API Certified</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Philosophy */}
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Teaching Philosophy</h4>
                <blockquote className="text-gray-600 italic mb-4">
                  "Learning AI agent development is like learning to think in systems. I believe in 
                  hands-on, project-based learning where students build real applications from day one. 
                  Theory is important, but nothing beats the experience of seeing your agent solve 
                  real-world problems."
                </blockquote>
                <p className="text-sm text-gray-500">- Dr. Sarah Chen</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn Directly from Industry Experts</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get mentored by professionals who have built and deployed AI agents at scale. 
            Benefit from real-world experience and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-blue-50 px-6 py-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-600">1-on-1 Office Hours</div>
              <div className="text-sm text-blue-800">Weekly sessions available</div>
            </div>
            <div className="bg-purple-50 px-6 py-4 rounded-lg">
              <div className="text-lg font-semibold text-purple-600">Code Reviews</div>
              <div className="text-sm text-purple-800">Personal feedback on projects</div>
            </div>
            <div className="bg-green-50 px-6 py-4 rounded-lg">
              <div className="text-lg font-semibold text-green-600">Career Guidance</div>
              <div className="text-sm text-green-800">Industry insights & networking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorProfile