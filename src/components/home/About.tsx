import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  const benefits = [
    "Expert team with 10+ years of industry experience",
    "Tailored solutions to meet your specific business needs",
    "Agile methodology for faster delivery and adaptation",
    "Ongoing support and maintenance"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="VTechFusion Team" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
              Transforming Ideas Into <span className="text-secondary-500">Digital Reality</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              VTechFusion is a premier technology company offering cutting-edge software solutions 
              for businesses of all sizes. With our expertise in IT solutions, web and mobile app 
              development, we help organizations streamline operations, enhance customer experiences, 
              and achieve sustainable growth.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;