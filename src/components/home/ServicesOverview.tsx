import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Cloud, 
  Wifi 
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-600 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="text-secondary-500 font-medium inline-flex items-center hover:text-secondary-600"
      >
        Learn More
        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Server size={24} />,
      title: "IT Solutions",
      description: "Comprehensive IT support, infrastructure management, and strategic technology consulting.",
      delay: 0
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cybersecurity",
      description: "Protect your business with advanced threat detection, prevention, and security training.",
      delay: 1
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Services",
      description: "Seamless migration, optimization, and management of cloud infrastructure.",
      delay: 2
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and technologies.",
      delay: 3
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and hybrid mobile applications for iOS and Android platforms.",
      delay: 4
    },
    {
      icon: <Wifi size={24} />,
      title: "Networking",
      description: "Reliable networking solutions including Wi-Fi setup, VPNs, and monitoring.",
      delay: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="We provide end-to-end technology solutions to help businesses thrive in the digital age."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;