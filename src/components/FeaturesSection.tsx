
import { Brain, Award, User, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "Dynamic Question Generation",
    description: "Create AI-driven questions based on selected topics, difficulty levels, and preferences.",
    stat: "1000+"
  },
  {
    icon: Award,
    title: "Real-Time Scoring",
    description: "Receive instant feedback and scores as soon as you complete your exam.",
    stat: "99%"
  },
  {
    icon: User,
    title: "Personalized Dashboard",
    description: "Track your progress, view past exams, and manage your learning journey easily.",
    stat: "5x"
  },
  {
    icon: Sparkles,
    title: "Future-Ready Features",
    description: "AI viva support and AI evaluation features are coming soon!",
    stat: "2024"
  }
];

const FeaturesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#110726]/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-[#1A0F2E] border-purple-500/20 transition-all duration-300 transform ${
                activeCard === index 
                  ? 'border-purple-500 scale-105 shadow-lg shadow-purple-500/20' 
                  : 'hover:border-purple-500/40 hover:scale-102'
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <feature.icon className={`w-12 h-12 text-purple-400 transition-all duration-300 ${
                    activeCard === index ? 'text-purple-300 scale-110' : ''
                  }`} />
                  <span className="text-2xl font-bold text-purple-300">{feature.stat}</span>
                </div>
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
