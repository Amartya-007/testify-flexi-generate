
import { useState, useEffect } from "react";

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
  },
  {
    text: "I've seen a 40% improvement in my test scores since I started using Examify for practice exams.",
    name: "Michael Johnson",
    role: "High School Student"
  },
  {
    text: "The platform's intuitive design makes it so easy to create custom exams for my students.",
    name: "Prof. Emily Chen",
    role: "University Lecturer"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const displayCount = 3; // Number of testimonials to show at once
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - displayCount ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - displayCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - displayCount ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#110726]/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          What Our Users Say
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + displayCount).map((testimonial, index) => (
              <div 
                key={currentIndex + index} 
                className="bg-[#1A0F2E] p-8 rounded-lg border border-purple-500/20 transform transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-[#1A0F2E] border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-500/20 transition-colors"
            >
              {"<"}
            </button>
            
            <div className="flex space-x-2 items-center">
              {Array.from({ length: testimonials.length - displayCount + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-purple-500 scale-125' : 'bg-purple-500/30'
                  }`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#1A0F2E] border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-500/20 transition-colors"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
