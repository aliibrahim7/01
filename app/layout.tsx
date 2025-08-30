import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI CV Generator - Voice-Powered Resume Builder',
  description: 'Generate professional CVs using voice recording with VAPI AI technology',
  keywords: 'CV generator, resume builder, voice recording, AI, VAPI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        {children}
        
        {/* Vapi Widget */}
        <vapi-widget assistant-id="246acbba-b020-4088-8262-55b2189a965e" public-key="8118bbe9-dae4-40c5-b7af-30300a1539be"></vapi-widget>

        <script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          async
          type="text/javascript"
        ></script>
      </body>
    </html>
  )
}
