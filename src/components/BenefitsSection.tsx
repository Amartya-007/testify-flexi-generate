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
  return (
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
  );
};

export default BenefitsSection;