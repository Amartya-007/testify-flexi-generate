
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Seamless Experiences";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wider text-purple-400 mb-4 animate-fade-in">
            DYNAMIC AI-POWERED EXAMINATION PLATFORM
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Transforming Education into
            <span className="block text-purple-400"> {typedText}<span className="animate-pulse">|</span></span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            Generate dynamic, AI-driven questions tailored to your needs
          </p>
          <Link to="/dashboard">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-8 py-6 rounded-full text-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: "600ms"}}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Dynamic Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-bounce" style={{animationDuration: "3s"}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
    </section>
  );
};

export default HeroSection;
