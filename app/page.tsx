'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff, Download, RefreshCw, User, Briefcase, GraduationCap, Phone, Mail, MapPin } from 'lucide-react'
import toast from 'react-hot-toast'
import VoiceRecorder from './components/VoiceRecorder'
import CVPreview from './components/CVPreview'

interface CVData {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    summary: string
  }
  experience: Array<{
    title: string
    company: string
    duration: string
    description: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    year: string
  }>
  skills: string[]
}

export default function Home() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [cvData, setCvData] = useState<CVData | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentStep, setCurrentStep] = useState<'recording' | 'generating' | 'preview'>('recording')

  const generateCVFromTranscript = async (transcriptText: string) => {
    setIsGenerating(true)
    setCurrentStep('generating')
    
    try {
      // Simulate AI processing - in a real app, this would call your AI service
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Parse transcript and generate structured CV data
      const generatedCV: CVData = {
        personalInfo: {
          name: "John Doe",
          email: "john.doe@email.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          summary: "Experienced software engineer with 5+ years in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and leading development teams."
        },
        experience: [
          {
            title: "Senior Software Engineer",
            company: "TechCorp Inc.",
            duration: "2021 - Present",
            description: [
              "Led development of microservices architecture serving 1M+ users",
              "Mentored junior developers and conducted code reviews",
              "Implemented CI/CD pipelines reducing deployment time by 60%"
            ]
          },
          {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            duration: "2019 - 2021",
            description: [
              "Built responsive web applications using React and Node.js",
              "Collaborated with design team to implement user-friendly interfaces",
              "Optimized database queries improving performance by 40%"
            ]
          }
        ],
        education: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            year: "2019"
          }
        ],
        skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "Git", "MongoDB", "PostgreSQL"]
      }
      
      setCvData(generatedCV)
      setCurrentStep('preview')
      toast.success('CV generated successfully!')
    } catch (error) {
      toast.error('Failed to generate CV. Please try again.')
      setCurrentStep('recording')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRecordingComplete = (transcriptText: string) => {
    setTranscript(transcriptText)
    generateCVFromTranscript(transcriptText)
  }

  const resetApp = () => {
    setTranscript('')
    setCvData(null)
    setCurrentStep('recording')
    setIsRecording(false)
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AI CV Generator</h1>
            </div>
            {cvData && (
              <button
                onClick={resetApp}
                className="btn-secondary flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Start Over</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Recording Interface */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Record Your Experience
                </h2>
                <p className="text-gray-600">
                  Tell us about your work experience, skills, and achievements. 
                  We'll generate a professional CV for you.
                </p>
              </div>

              {currentStep === 'recording' && (
                <VoiceRecorder
                  isRecording={isRecording}
                  setIsRecording={setIsRecording}
                  onRecordingComplete={handleRecordingComplete}
                />
              )}

              {currentStep === 'generating' && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Generating Your CV
                  </h3>
                  <p className="text-gray-600">
                    Analyzing your experience and creating a professional resume...
                  </p>
                </div>
              )}

              {transcript && currentStep !== 'generating' && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Your Recording
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
                    <p className="text-gray-700 text-sm">{transcript}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                What to Include
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-medium">1</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your name, contact information, and professional summary
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-medium">2</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Work experience with job titles, companies, and key achievements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-medium">3</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Education background and relevant skills
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - CV Preview */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  CV Preview
                </h2>
                {cvData && (
                  <button className="btn-primary flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                )}
              </div>

              {currentStep === 'recording' && (
                <div className="text-center py-12 text-gray-500">
                  <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Your CV will appear here after recording</p>
                </div>
              )}

              {currentStep === 'generating' && (
                <div className="text-center py-12">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>
              )}

              {cvData && currentStep === 'preview' && (
                <CVPreview cvData={cvData} />
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
