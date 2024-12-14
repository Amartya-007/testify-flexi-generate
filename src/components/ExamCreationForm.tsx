import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export interface ExamConfig {
  topic: string;
  difficulty: string;
  questionCount: number;
}

interface ExamCreationFormProps {
  onSubmit: (config: ExamConfig) => void;
}

export function ExamCreationForm({ onSubmit }: ExamCreationFormProps) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState("10");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic || !difficulty || !questionCount) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields before creating the exam.",
        variant: "destructive",
      });
      return;
    }

    onSubmit({
      topic,
      difficulty,
      questionCount: parseInt(questionCount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="topic">Topic</Label>
        <Input
          id="topic"
          placeholder="Enter exam topic (e.g., JavaScript Basics)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="difficulty">Difficulty Level</Label>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger id="difficulty">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="questionCount">Number of Questions</Label>
        <Select value={questionCount} onValueChange={setQuestionCount}>
          <SelectTrigger id="questionCount">
            <SelectValue placeholder="Select number of questions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 Questions</SelectItem>
            <SelectItem value="10">10 Questions</SelectItem>
            <SelectItem value="15">15 Questions</SelectItem>
            <SelectItem value="20">20 Questions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Create Exam
      </Button>
    </form>
  );
}