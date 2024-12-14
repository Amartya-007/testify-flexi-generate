import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface ExamInterfaceProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export function ExamInterface({ questions, onComplete }: ExamInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: parseInt(value) });
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      toast({
        title: "Select an Answer",
        description: "Please select an answer before proceeding.",
        variant: "destructive",
      });
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === undefined) {
      toast({
        title: "Select an Answer",
        description: "Please select an answer before submitting.",
        variant: "destructive",
      });
      return;
    }

    const score = questions.reduce((acc, question, index) => {
      return acc + (answers[index] === question.correctAnswer ? 1 : 0);
    }, 0);

    onComplete(score);
  };

  const question = questions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-muted-foreground">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-medium">{question.text}</p>
        <RadioGroup value={answers[currentQuestion]?.toString()} onValueChange={handleAnswer}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {currentQuestion < questions.length - 1 ? (
          <Button onClick={handleNext}>Next Question</Button>
        ) : (
          <Button onClick={handleSubmit} className="bg-success hover:bg-success/90">
            Submit Exam
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}