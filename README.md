# AceInterview AI Platform

## Project Overview

**AceInterview AI** is a comprehensive interview preparation platform powered by artificial intelligence. The platform helps job seekers practice interviews, analyze their performance, and improve their chances of landing their dream job.

## Features

- **AI Interview Practice**: Practice with different AI personalities and get real-time feedback
- **Resume Analyzer**: AI-powered resume optimization with OCR technology
- **CV Builder**: Create professional, ATS-friendly CVs with multiple templates
- **Job Search**: Find and apply to relevant positions
- **Career Roadmap**: Personalized learning paths for career development
- **Analytics Dashboard**: Track your progress and performance over time
- **Company-Specific Practice**: Prepare for interviews at top tech companies

## Technology Stack

This project is built with:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Backend**: Supabase (Database, Authentication, Edge Functions)
- **AI Services**: OpenAI GPT-4 for interview analysis and feedback
- **Speech Recognition**: Web Speech API with Whisper integration
- **OCR**: Tesseract.js for resume text extraction

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for backend services)
- OpenAI API key (for AI features)

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Set up environment variables:
   - Configure your Supabase project settings
   - Add your OpenAI API key to Supabase Edge Functions

4. Start the development server:
```sh
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
├── services/           # API and external service integrations
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── data/               # Static data and configurations

supabase/
├── functions/          # Edge Functions for AI processing
└── migrations/         # Database schema migrations
```

## Key Features

### AI Interview Practice
- Multiple AI interviewer personalities
- Real-time speech recognition and analysis
- Detailed performance feedback with scoring
- Company-specific interview simulations

### Resume Analysis
- OCR text extraction from PDF/image files
- AI-powered content analysis and optimization
- ATS compatibility scoring
- Industry-specific keyword analysis

### Career Development
- Personalized learning roadmaps
- Skill gap analysis
- Progress tracking and analytics
- Gamification with XP and achievements

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.