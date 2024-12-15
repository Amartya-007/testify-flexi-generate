import { Brain, Award, User, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Dynamic Question Generation",
    description: "Create AI-driven questions based on selected topics, difficulty levels, and preferences."
  },
  {
    icon: Award,
    title: "Real-Time Scoring",
    description: "Receive instant feedback and scores as soon as you complete your exam."
  },
  {
    icon: User,
    title: "Personalized Dashboard",
    description: "Track your progress, view past exams, and manage your learning journey easily."
  },
  {
    icon: Sparkles,
    title: "Future-Ready Features",
    description: "AI viva support and AI evaluation features are coming soon!"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#110726]/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1A0F2E] border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <feature.icon className="w-12 h-12 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;