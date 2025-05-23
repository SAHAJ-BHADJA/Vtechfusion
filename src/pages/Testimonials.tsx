import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  quote, 
  name, 
  title, 
  company, 
  image,
  delay
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="absolute -top-4 right-8 text-secondary-400">
        <Quote size={40} />
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="font-semibold text-primary-600">{name}</h3>
          <p className="text-sm text-gray-500">{title}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "VTechFusion transformed our outdated systems into a streamlined digital platform that increased our productivity by 40%. Their expertise and dedication to our project was exceptional.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "GrowthMark Industries",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 0
    },
    {
      quote: "The mobile app developed by VTechFusion exceeded our expectations. The team's attention to detail and user experience design has helped us achieve a 5-star rating on both app stores.",
      name: "Michael Chen",
      title: "Product Manager",
      company: "NexStep Mobile",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 1
    },
    {
      quote: "We've worked with several IT firms before, but VTechFusion's approach to cybersecurity has given us peace of mind we never had. Their proactive solutions have prevented numerous potential breaches.",
      name: "David Williams",
      title: "IT Director",
      company: "SecureFinance Corp",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 2
    },
    {
      quote: "The web development team at VTechFusion delivered our e-commerce site ahead of schedule and under budget. Since launching, we've seen a 75% increase in online sales and significantly improved customer feedback.",
      name: "Emma Rodriguez",
      title: "Marketing Director",
      company: "Retail Solutions Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 3
    },
    {
      quote: "VTechFusion's cloud migration strategy helped us modernize our infrastructure while maintaining business continuity. Their team's technical knowledge and clear communication made the process smooth and stress-free.",
      name: "James Wilson",
      title: "Operations Manager",
      company: "CloudFirst Technologies",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 4
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Client Testimonials
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-secondary-500 mb-8"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Don't just take our word for it - hear what our clients have to say about working with us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                image={testimonial.image}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today to discuss how we can help your business achieve its technology goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;