import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Award, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Examify - Your AI-Powered Exam Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
            Generate dynamic, AI-driven questions tailored to your needs.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-3 rounded-lg text-lg animate-fade-in">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-none text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-[#D6BCFA]" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © 2024 Examify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for features section
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

// Data for benefits section
const benefits = [
  {
    title: "Efficient Exam Preparation",
    description: "Save time and effort with our streamlined exam preparation process."
  },
  {
    title: "AI-Driven Customization",
    description: "Get personalized content tailored to your specific learning needs."
  },
  {
    title: "Automated Assessment",
    description: "Benefit from instant, accurate scoring and detailed feedback."
  }
];

// Data for testimonials section
const testimonials = [
  {
    text: "Examify has transformed the way I prepare for exams. The AI-generated questions are incredibly accurate!",
    name: "John Doe",
    role: "Student"
  },
  {
    text: "The personalized learning experience and instant feedback have greatly improved my study efficiency.",
    name: "Jane Smith",
    role: "Graduate Student"
  },
  {
    text: "As an educator, I find Examify's AI capabilities revolutionary for creating assessments.",
    name: "Dr. Robert Wilson",
    role: "Professor"
  }
];

export default Index;