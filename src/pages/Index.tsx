
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic background opacity based on scroll
  const backgroundOpacity = Math.min(0.7, 0.5 + (scrollPosition / 3000));
  
  return (
    <div 
      className="min-h-screen text-white"
      style={{
        background: `
          linear-gradient(
            135deg, 
            rgba(10, 1, 24, ${backgroundOpacity}) 0%, 
            rgba(26, 15, 46, ${backgroundOpacity}) 100%
          )
        `,
        transition: "background 0.3s ease"
      }}
    >
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A0118]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-800/10 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
