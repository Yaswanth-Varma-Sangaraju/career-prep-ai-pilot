import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface InterviewCompleteProps {
  questionsLength: number;
  selectedPersonality: string;
  onViewHistory: () => void;
  onPracticeAgain: () => void;
  getPersonalityById: (id: string) => any;
}

const InterviewComplete: React.FC<InterviewCompleteProps> = ({
  questionsLength,
  selectedPersonality,
  onViewHistory,
  onPracticeAgain,
  getPersonalityById
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card border-border p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-foreground mb-4">Interview Complete!</h2>
        <p className="text-muted-foreground mb-6">
          You completed {questionsLength} questions with {getPersonalityById(selectedPersonality)?.name}
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button
            onClick={onViewHistory}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            View History
          </Button>
          <Button
            onClick={onPracticeAgain}
            variant="outline"
            className="border-border text-foreground hover:bg-accent/10"
          >
            Practice Again
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InterviewComplete;