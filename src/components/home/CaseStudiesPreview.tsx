import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

interface CaseStudyProps {
  image: string;
  title: string;
  category: string;
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ image, title, category, delay }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Link to="/case-studies" className="block relative rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <span className="text-sm text-secondary-300">{category}</span>
        </div>
      </Link>
    </motion.div>
  );
};

const CaseStudiesPreview: React.FC = () => {
  const caseStudies = [
    {
      image: "https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "E-commerce Platform Redesign",
      category: "Web Development",
      delay: 0
    },
    {
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Secure Cloud Migration",
      category: "IT Solutions",
      delay: 1
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fitness App Development",
      category: "Mobile Development",
      delay: 2
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle 
          title="Featured Case Studies" 
          subtitle="Explore how we've helped businesses overcome challenges and achieve digital transformation."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              title={study.title}
              category={study.category}
              delay={study.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;