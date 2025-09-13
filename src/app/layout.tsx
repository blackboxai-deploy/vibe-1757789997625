import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'AI Agents Building Course - Master the Future of AI Development',
  description: 'Learn to build powerful AI agents from scratch. Comprehensive course covering fundamentals, development, integration, and advanced multi-agent systems. Transform your career with practical AI skills.',
  keywords: 'AI agents, artificial intelligence course, AI development, machine learning, chatbot development, AI programming, automation',
  authors: [{ name: 'AI Agents Course' }],
  openGraph: {
    title: 'AI Agents Building Course - Master the Future of AI Development',
    description: 'Learn to build powerful AI agents from scratch. Comprehensive course covering fundamentals, development, integration, and advanced multi-agent systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents Building Course - Master the Future of AI Development',
    description: 'Learn to build powerful AI agents from scratch. Transform your career with practical AI skills.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased bg-white text-gray-900 overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}