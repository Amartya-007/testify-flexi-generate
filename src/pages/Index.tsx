import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Award, User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0118] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-sm uppercase tracking-wider text-purple-400 mb-4">
              DYNAMIC AI-POWERED EXAMINATION PLATFORM
            </p>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Transforming Education into
              <span className="block text-purple-400"> Seamless Experiences</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Generate dynamic, AI-driven questions tailored to your needs
            </p>
            <Link to="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-8 py-6 rounded-full text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
      </section>

      {/* Features Section */}
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Why Choose Examify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#1A0F2E]/50 p-6 rounded-lg hover:bg-[#1A0F2E] transition-all duration-300 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#110726]/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#1A0F2E] p-8 rounded-lg border border-purple-500/20">
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0118] border-t border-purple-500/10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">Dashboard</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
                <li><Link to="/settings" className="text-gray-400 hover:text-purple-400 transition-colors">Settings</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-500/10">
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