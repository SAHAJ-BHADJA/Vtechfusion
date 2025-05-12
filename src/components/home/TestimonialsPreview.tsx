import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialsPreview: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "VTechFusion transformed our outdated systems into a streamlined digital platform that increased our productivity by 40%. Their expertise and dedication to our project was exceptional.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "GrowthMark Industries"
    },
    {
      quote: "The mobile app developed by VTechFusion exceeded our expectations. The team's attention to detail and user experience design has helped us achieve a 5-star rating on both app stores.",
      name: "Michael Chen",
      title: "Product Manager",
      company: "NexStep Mobile"
    },
    {
      quote: "We've worked with several IT firms before, but VTechFusion's approach to cybersecurity has given us peace of mind we never had. Their proactive solutions have prevented numerous potential breaches.",
      name: "David Williams",
      title: "IT Director",
      company: "SecureFinance Corp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it - hear from some of our satisfied clients."
          center={true}
          className="text-white"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-12 left-0 text-secondary-400 opacity-30">
              <Quote size={80} />
            </div>
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <p className="text-xl md:text-2xl italic mb-8">{testimonials[currentIndex].quote}</p>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-200">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrevious}
                className="p-2 rounded-full bg-primary-700 hover:bg-primary-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-primary-700 hover:bg-primary-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-secondary-500' : 'bg-primary-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;