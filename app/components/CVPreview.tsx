'use client'

import { motion } from 'framer-motion'
import { User, Briefcase, GraduationCap, Phone, Mail, MapPin, Star } from 'lucide-react'

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

interface CVPreviewProps {
  cvData: CVData
}

export default function CVPreview({ cvData }: CVPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h1 className="text-3xl font-bold mb-2">{cvData.personalInfo.name}</h1>
        <p className="text-blue-100 text-lg mb-4">{cvData.personalInfo.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{cvData.personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{cvData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{cvData.personalInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Experience */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Professional Experience</h2>
          </div>
          
          <div className="space-y-4">
            {cvData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-l-4 border-blue-200 pl-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-1">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-700 text-sm flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-3">
            {cvData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex justify-between items-start"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {cvData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Generated with AI CV Generator • Professional Resume Builder
        </p>
      </div>
    </motion.div>
  )
}
