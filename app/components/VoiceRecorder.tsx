'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff, Square, Play, Pause } from 'lucide-react'
import toast from 'react-hot-toast'

interface VoiceRecorderProps {
  isRecording: boolean
  setIsRecording: (recording: boolean) => void
  onRecordingComplete: (transcript: string) => void
}

export default function VoiceRecorder({ 
  isRecording, 
  setIsRecording, 
  onRecordingComplete 
}: VoiceRecorderProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize VAPI (this would be your actual VAPI setup)
  useEffect(() => {
    // In a real implementation, you would initialize VAPI here
    // For demo purposes, we'll simulate the functionality
    console.log('VAPI would be initialized here')
  }, [])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        setAudioBlob(audioBlob)
        
        // Simulate VAPI transcription
        setTimeout(() => {
          const mockTranscript = "Hi, my name is John Doe. I'm a senior software engineer with over 5 years of experience in full-stack development. I've worked at TechCorp Inc. for the past 2 years where I led the development of microservices architecture serving over 1 million users. I specialize in React, Node.js, and cloud technologies. I have a Bachelor's degree in Computer Science from University of Technology. My key skills include JavaScript, React, Node.js, Python, AWS, Docker, Git, MongoDB, and PostgreSQL. I'm passionate about building scalable solutions and mentoring junior developers."
          setTranscript(mockTranscript)
          onRecordingComplete(mockTranscript)
        }, 2000)
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setIsListening(true)
      toast.success('Recording started! Speak clearly about your experience.')
    } catch (error) {
      console.error('Error starting recording:', error)
      toast.error('Failed to start recording. Please check microphone permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
      setIsListening(false)
      toast.success('Recording stopped. Processing your audio...')
    }
  }

  const playRecording = () => {
    if (audioBlob && audioRef.current) {
      const url = URL.createObjectURL(audioBlob)
      audioRef.current.src = url
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const pauseRecording = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Recording Controls */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {!isRecording ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startRecording}
              className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200"
            >
              <Mic className="w-8 h-8" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopRecording}
              className="w-16 h-16 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200"
            >
              <Square className="w-8 h-8" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Recording Status */}
      {isRecording && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-medium">Recording...</span>
          </div>
          <p className="text-sm text-gray-600">
            Speak clearly about your work experience, skills, and achievements
          </p>
        </motion.div>
      )}

      {/* Audio Playback */}
      {audioBlob && !isRecording && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Your Recording</h4>
          <div className="flex items-center space-x-3">
            {!isPlaying ? (
              <button
                onClick={playRecording}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white"
              >
                <Play className="w-4 h-4 ml-0.5" />
              </button>
            ) : (
              <button
                onClick={pauseRecording}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white"
              >
                <Pause className="w-4 h-4" />
              </button>
            )}
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <span className="text-sm text-gray-500">0:00</span>
          </div>
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>
      )}

      {/* Processing Status */}
      {isRecording === false && audioBlob && !transcript && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Processing your audio...</p>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Tips for better results:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Speak clearly and at a moderate pace</li>
          <li>• Include your name, job titles, and company names</li>
          <li>• Mention specific achievements and skills</li>
          <li>• Describe your responsibilities and impact</li>
        </ul>
      </div>
    </div>
  )
}
