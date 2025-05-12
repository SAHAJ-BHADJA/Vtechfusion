import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

interface CaseStudyProps {
  image: string;
  title: string;
  client: string;
  industry: string;
  technologies: string[];
  problem: string;
  solution: string;
  results: string[];
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ 
  image, 
  title, 
  client, 
  industry, 
  technologies, 
  problem, 
  solution, 
  results,
  delay
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-semibold mb-1">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-sm bg-secondary-500/30 px-2 py-1 rounded">{client}</span>
            <span className="text-sm bg-primary-600/30 px-2 py-1 rounded">{industry}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-white/20 px-2 py-0.5 rounded">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-primary-600 mb-2">The Challenge</h4>
          <p className="text-gray-600">{problem}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-primary-600 mb-2">Our Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-primary-600 mb-2">Results</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      image: "https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "E-commerce Platform Redesign",
      client: "RetailMax",
      industry: "Retail",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      problem: "RetailMax was struggling with an outdated e-commerce platform that resulted in poor user experience, slow loading times, and limited functionality, leading to high bounce rates and abandoned carts.",
      solution: "We redesigned their e-commerce platform from the ground up using React for the frontend and Node.js for the backend. We implemented responsive design principles, optimized loading times, and integrated a secure payment system with Stripe.",
      results: [
        "53% increase in conversion rate",
        "45% reduction in page load time",
        "63% decrease in cart abandonment",
        "127% increase in mobile sales"
      ],
      delay: 0
    },
    {
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Secure Cloud Migration",
      client: "FinSecure",
      industry: "Financial Services",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      problem: "FinSecure was operating with legacy on-premises infrastructure, leading to high maintenance costs, limited scalability, and concerns about business continuity and disaster recovery.",
      solution: "We developed a comprehensive cloud migration strategy, moving their operations to AWS with a focus on security, compliance, and high availability. We containerized applications using Docker and orchestrated with Kubernetes for improved scalability.",
      results: [
        "42% reduction in IT infrastructure costs",
        "99.99% uptime achieved",
        "15-minute disaster recovery time (down from 48 hours)",
        "Enhanced regulatory compliance with financial industry standards"
      ],
      delay: 1
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fitness App Development",
      client: "FitLife",
      industry: "Health & Wellness",
      technologies: ["React Native", "Firebase", "Node.js", "ExpressJS", "MongoDB"],
      problem: "FitLife wanted to expand their brick-and-mortar fitness business with a mobile app that would allow them to offer personalized workout plans, nutrition tracking, and virtual coaching to reach a broader audience.",
      solution: "We developed a cross-platform mobile app using React Native with real-time progress tracking, personalized workout recommendations using machine learning, and integrated nutrition logging. The app also featured video-based training and virtual coaching sessions.",
      results: [
        "100,000+ downloads in the first three months",
        "38% increase in gym membership conversions",
        "4.8/5 star rating on app stores",
        "68% user retention after six months"
      ],
      delay: 2
    },
    {
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Healthcare Management System",
      client: "MediCare Clinic",
      industry: "Healthcare",
      technologies: ["Angular", "Java Spring", "PostgreSQL", "Docker", "Azure"],
      problem: "MediCare Clinic was struggling with paper-based processes and disparate digital systems, causing inefficiencies in patient management, appointment scheduling, and medical record keeping.",
      solution: "We developed an integrated healthcare management system with electronic medical records, automated appointment scheduling, billing integration, and secure patient portals, all while ensuring HIPAA compliance and data security.",
      results: [
        "73% reduction in administrative workload",
        "68% decrease in appointment no-shows",
        "97% patient satisfaction with new digital services",
        "56% faster access to critical patient information"
      ],
      delay: 3
    },
    {
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Supply Chain Optimization",
      client: "LogisticsPro",
      industry: "Logistics",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Google Cloud"],
      problem: "LogisticsPro was facing challenges with supply chain visibility, inefficient route planning, and difficulty predicting demand fluctuations, resulting in excess inventory costs and delivery delays.",
      solution: "We developed an AI-powered supply chain management platform that provides real-time visibility, predictive analytics for demand forecasting, and optimized route planning algorithms, integrated with their existing ERP system.",
      results: [
        "32% reduction in delivery times",
        "41% decrease in inventory holding costs",
        "27% improvement in order fulfillment accuracy",
        "89% increase in supply chain visibility"
      ],
      delay: 4
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Educational Platform Development",
      client: "LearnX Academy",
      industry: "Education",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "WebRTC"],
      problem: "LearnX Academy needed to transition from in-person training to a comprehensive online learning platform due to the pandemic, but lacked the technical infrastructure and expertise to deliver their courses effectively online.",
      solution: "We developed a custom learning management system with live virtual classrooms, interactive content, progress tracking, assessment tools, and community features to maintain engagement and replicate the classroom experience online.",
      results: [
        "200% increase in student enrollment",
        "92% course completion rate",
        "Global expansion to 15 new countries",
        "85% cost reduction in content delivery"
      ],
      delay: 5
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
              Case Studies
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
              Explore how we've helped businesses overcome challenges and achieve digital transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={study.title}
                client={study.client}
                industry={study.industry}
                technologies={study.technologies}
                problem={study.problem}
                solution={study.solution}
                results={study.results}
                delay={study.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionTitle 
            title="Ready to Create Your Success Story?" 
            subtitle="Let's discuss how we can help your business overcome challenges and achieve digital transformation."
            center={true}
          />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/services"
              className="px-6 py-3 bg-white text-primary-600 border border-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;