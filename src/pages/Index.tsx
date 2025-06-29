import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, BarChart2, Users, ArrowRight, Brain, Target, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-12 px-4">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">AceInterview AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          Master your interview skills with AI-powered practice, real-time feedback, and personalized coaching tailored for your success.
        </p>
        <Button asChild size="lg" className="mt-8 px-8 py-3 text-lg font-medium">
          <Link to="/dashboard">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <FeatureCard
          icon={<Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
          title="AI Interview Practice"
          text="Practice with advanced AI interviewers that adapt to your experience level and provide real-time feedback."
        />
        <FeatureCard
          icon={<Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
          title="Performance Analytics"
          text="Track your progress with detailed analytics, identify weak areas, and monitor improvement over time."
        />
        <FeatureCard
          icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
          title="Career Acceleration"
          text="Get personalized roadmaps, resume optimization, and company-specific interview preparation."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
    </div>
  );
}