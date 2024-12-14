import { useState } from "react";
import { ExamCreationForm, ExamConfig } from "@/components/ExamCreationForm";
import { ExamInterface } from "@/components/ExamInterface";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Temporary mock data - replace with API call later
const generateMockQuestions = (config: ExamConfig) => {
  return Array(config.questionCount).fill(null).map((_, index) => ({
    id: index,
    text: `Sample ${config.topic} question ${index + 1} (${config.difficulty} difficulty)`,
    options: [
      "Sample answer 1",
      "Sample answer 2",
      "Sample answer 3",
      "Sample answer 4"
    ],
    correctAnswer: Math.floor(Math.random() * 4)
  }));
};

const Index = () => {
  const [examConfig, setExamConfig] = useState<ExamConfig | null>(null);
  const [questions, setQuestions] = useState<any[] | null>(null);
  const [examCompleted, setExamCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const { toast } = useToast();

  const handleExamCreate = (config: ExamConfig) => {
    setExamConfig(config);
    const generatedQuestions = generateMockQuestions(config);
    setQuestions(generatedQuestions);
    toast({
      title: "Exam Created",
      description: `Created a ${config.difficulty} exam with ${config.questionCount} questions about ${config.topic}.`,
    });
  };

  const handleExamComplete = (finalScore: number) => {
    setScore(finalScore);
    setExamCompleted(true);
    toast({
      title: "Exam Completed!",
      description: `You scored ${finalScore} out of ${questions?.length} questions.`,
      variant: "success",
    });
  };

  const handleReset = () => {
    setExamConfig(null);
    setQuestions(null);
    setExamCompleted(false);
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Examify
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create personalized exams with custom topics, difficulty levels, and question counts.
            Get instant feedback and track your progress.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!examConfig && (
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <ExamCreationForm onSubmit={handleExamCreate} />
            </div>
          )}

          {examConfig && questions && !examCompleted && (
            <div className="animate-fade-in">
              <ExamInterface
                questions={questions}
                onComplete={handleExamComplete}
              />
            </div>
          )}

          {examCompleted && score !== null && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
                <p className="text-4xl font-bold text-success mb-4">
                  {score} / {questions?.length}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {score === questions?.length
                    ? "Perfect score! Excellent work! 🎉"
                    : score! >= questions!.length * 0.7
                    ? "Great job! Keep it up! 👏"
                    : "Good effort! Keep practicing! 💪"}
                </p>
                <Button onClick={handleReset} className="bg-primary hover:bg-primary/90">
                  Create New Exam
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;