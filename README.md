# AI CV Generator with VAPI Voice Recording

A modern, AI-powered CV generation application that uses voice recording to create professional resumes. Built with Next.js, TypeScript, Tailwind CSS, and VAPI for voice processing.

## 🚀 Features

- **Voice Recording**: Record your experience using your microphone
- **AI-Powered CV Generation**: Automatically generate professional CVs from voice input
- **Real-time Preview**: See your CV being generated in real-time
- **Professional Design**: Beautiful, modern UI with responsive design
- **VAPI Integration**: Advanced voice processing and transcription
- **Download Support**: Export your CV as PDF (coming soon)
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Voice Processing**: VAPI AI
- **UI Components**: Lucide React Icons
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cv-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Recording Your Experience

1. **Click the microphone button** to start recording
2. **Speak clearly** about your:
   - Name and contact information
   - Work experience and job titles
   - Key achievements and responsibilities
   - Education background
   - Skills and technologies
3. **Click the stop button** when finished
4. **Wait for processing** - the AI will analyze your audio
5. **Review your generated CV** in the preview panel

### Tips for Better Results

- Speak clearly and at a moderate pace
- Include specific job titles and company names
- Mention quantifiable achievements (e.g., "increased sales by 25%")
- Describe your responsibilities and impact
- Include relevant skills and technologies

## 🔧 Configuration

### VAPI Setup

To use real VAPI functionality instead of the demo:

1. Sign up for a VAPI account at [vapi.ai](https://vapi.ai)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. Update the `VoiceRecorder` component to use real VAPI calls

### Customizing the CV Template

The CV template can be customized by modifying the `CVPreview` component in `app/components/CVPreview.tsx`.

## 📁 Project Structure

```
cv-generator/
├── app/
│   ├── components/
│   │   ├── VoiceRecorder.tsx    # Voice recording interface
│   │   └── CVPreview.tsx        # CV display component
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page component
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_VAPI_API_KEY` | Your VAPI API key | Yes (for production) |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your browser, OS, and error messages

## 🔮 Roadmap

- [ ] PDF export functionality
- [ ] Multiple CV templates
- [ ] CV editing capabilities
- [ ] Integration with job boards
- [ ] ATS optimization
- [ ] Cover letter generation
- [ ] Interview preparation tips

## 🙏 Acknowledgments

- [VAPI](https://vapi.ai) for voice processing technology
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [Framer Motion](https://framer.com/motion) for animations
- [Lucide](https://lucide.dev) for beautiful icons
