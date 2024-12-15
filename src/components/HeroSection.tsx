import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;