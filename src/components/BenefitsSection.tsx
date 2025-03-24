
import { useState, useEffect } from "react";

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

const BenefitsSection = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.benefit-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Why Choose Examify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card bg-[#1A0F2E]/50 p-6 rounded-lg border border-purple-500/20 hover:bg-[#1A0F2E] transition-all duration-500 transform ${
                animatedItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-2 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
              <div className="mt-6 flex justify-end">
                <div className="h-1 w-10 bg-purple-500/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
