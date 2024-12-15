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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;