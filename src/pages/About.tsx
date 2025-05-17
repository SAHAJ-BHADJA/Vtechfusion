import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Eye, 
  Award, 
  Users 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AboutPageImage from './photos/Appdevelopment-rafiki.svg';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-secondary-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-600 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.",
      delay: 0
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do, ensuring that our solutions exceed expectations and stand the test of time.",
      delay: 1
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "We believe in working closely with our clients as true partners, leveraging our combined expertise to achieve shared goals and success.",
      delay: 2
    },
    {
      icon: <Eye size={32} />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical principles, building trust with our clients through every interaction and decision.",
      delay: 3
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
              About VTechFusion
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
              We're a team of passionate technology experts dedicated to helping businesses succeed in the digital era.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
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
              <SectionTitle 
                title="Our Story" 
                subtitle="From a small startup to a leading technology company."
              />
              <p className="text-gray-600 mb-6">
                Founded in 2020, VTechFusion began with a simple mission: to help businesses leverage 
                technology to achieve their goals. What started as a small team of passionate developers 
                has grown into a comprehensive technology partner serving clients across multiple industries.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've expanded our expertise to encompass a wide range of services, 
                from IT solutions and cybersecurity to web and mobile app development. Throughout our 
                growth, we've maintained our commitment to innovation, quality, and client satisfaction.
              </p>
              <p className="text-gray-600">
                Today, VTechFusion is recognized as a leading provider of technology solutions, 
                helping businesses of all sizes navigate the complexities of digital transformation 
                and achieve sustainable growth in an increasingly competitive landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={AboutPageImage}
                alt="VTechFusion Team Working" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Mission & Vision" 
            subtitle="Guiding principles that drive everything we do."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive 
                growth, enhance efficiency, and create competitive advantages in the 
                digital marketplace. We strive to be a trusted partner in our clients' 
                success by delivering exceptional value through our expertise, reliability, 
                and commitment to excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier technology partner for businesses seeking digital 
                transformation, recognized for our innovation, technical excellence, 
                and client-centric approach. We envision a future where every organization 
                can harness the full potential of technology to achieve their mission and 
                create meaningful impact in their industries and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide our decisions and define our culture."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={value.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;