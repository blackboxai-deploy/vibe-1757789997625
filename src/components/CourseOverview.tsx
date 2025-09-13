import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const CourseOverview = () => {
  const modules = [
    {
      week: 1,
      title: "AI Foundations & Architecture",
      description: "Understanding AI agents, architecture patterns, and fundamental concepts",
      topics: ["Agent Theory", "System Design", "Development Environment"],
      difficulty: "Beginner",
      progress: 100
    },
    {
      week: 2,
      title: "Core Development Tools",
      description: "Master Python, LangChain, and essential frameworks for agent development",
      topics: ["Python Advanced", "LangChain Framework", "API Integration"],
      difficulty: "Beginner",
      progress: 85
    },
    {
      week: 3,
      title: "Language Model Integration",
      description: "Connect with OpenAI, Anthropic, and other LLM providers",
      topics: ["OpenAI API", "Anthropic Claude", "Model Selection"],
      difficulty: "Intermediate",
      progress: 70
    },
    {
      week: 4,
      title: "Memory & Context Management",
      description: "Implement sophisticated memory systems for persistent agent behavior",
      topics: ["Vector Databases", "Context Windows", "Memory Patterns"],
      difficulty: "Intermediate",
      progress: 60
    },
    {
      week: 5,
      title: "Tool Integration & Function Calling",
      description: "Enable agents to interact with external APIs and services",
      topics: ["Function Calling", "API Integrations", "Tool Libraries"],
      difficulty: "Intermediate",
      progress: 45
    },
    {
      week: 6,
      title: "Agent Orchestration",
      description: "Build complex workflows with multiple specialized agents",
      topics: ["Agent Communication", "Workflow Design", "Task Routing"],
      difficulty: "Advanced",
      progress: 30
    },
    {
      week: 7,
      title: "Multi-Agent Systems",
      description: "Create collaborative agent networks for complex problem solving",
      topics: ["Agent Collaboration", "Distributed Systems", "Coordination"],
      difficulty: "Advanced",
      progress: 20
    },
    {
      week: 8,
      title: "Real-World Applications",
      description: "Build production-ready agents for customer service, analysis, and automation",
      topics: ["Customer Support Bot", "Data Analysis Agent", "Automation Systems"],
      difficulty: "Advanced",
      progress: 15
    },
    {
      week: 9,
      title: "Performance & Optimization",
      description: "Optimize agent performance, reduce costs, and improve response times",
      topics: ["Performance Tuning", "Cost Optimization", "Caching Strategies"],
      difficulty: "Advanced",
      progress: 10
    },
    {
      week: 10,
      title: "Security & Ethics",
      description: "Implement security best practices and ethical AI guidelines",
      topics: ["Security Patterns", "Ethical AI", "Privacy Protection"],
      difficulty: "Advanced",
      progress: 5
    },
    {
      week: 11,
      title: "Deployment & Scaling",
      description: "Deploy agents to production with Docker, cloud services, and monitoring",
      topics: ["Docker Deployment", "Cloud Services", "Monitoring & Logging"],
      difficulty: "Advanced",
      progress: 0
    },
    {
      week: 12,
      title: "Final Project & Portfolio",
      description: "Build your capstone project and create a professional portfolio",
      topics: ["Capstone Project", "Portfolio Development", "Career Guidance"],
      difficulty: "Advanced",
      progress: 0
    }
  ]

  const skills = [
    "Python Programming",
    "LangChain Framework",
    "OpenAI & Anthropic APIs",
    "Vector Databases",
    "Multi-Agent Architecture",
    "Production Deployment",
    "Performance Optimization",
    "Security Best Practices"
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <section id="course-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Complete Course Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive 12-week journey from AI fundamentals to advanced multi-agent systems. 
            Build real-world projects and gain practical experience with industry-standard tools.
          </p>
          
          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-blue-800 font-medium">Weeks</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">36</div>
              <div className="text-purple-800 font-medium">Modules</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-green-800 font-medium">Projects</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-orange-800 font-medium">Hours</div>
            </div>
          </div>
        </div>

        {/* Skills You'll Learn */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills You'll Master</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 text-sm border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div className="grid gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      {module.week}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{module.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{module.description}</p>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Topics</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Completion Progress</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Students Completed</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Learning Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Foundation Building</h4>
              <p className="text-gray-600 text-sm">Master AI concepts, Python, and core frameworks</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Development</h4>
              <p className="text-gray-600 text-sm">Build complex multi-agent systems and integrations</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Production Deployment</h4>
              <p className="text-gray-600 text-sm">Deploy, scale, and optimize for real-world use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview