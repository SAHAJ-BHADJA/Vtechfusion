import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

interface TechCardProps {
  name: string;
  logo: string;
  category: string;
  delay: number;
}

const TechCard: React.FC<TechCardProps> = ({ name, logo, category, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
    >
      <img src={logo} alt={name} className="h-16 mb-4 object-contain" />
      <h3 className="text-lg font-semibold text-primary-600 mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
    </motion.div>
  );
};

const TechnologyStack: React.FC = () => {
  const technologies = [
    // Frontend
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend", delay: 0 },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend", delay: 1 },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend", delay: 2 },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend", delay: 3 },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend", delay: 4 },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend", delay: 5 },
    { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg", category: "Frontend", delay: 6 },
    
    // Backend
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend", delay: 7 },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend", delay: 8 },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Backend", delay: 9 },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "Backend", delay: 10 },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend", delay: 11 },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "Backend", delay: 12 },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend", delay: 13 },
    { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", category: "Backend", delay: 14 },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", category: "Backend", delay: 15 },
    { name: "Magento", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg", category: "Backend", delay: 16 },
    
    // Database
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database", delay: 17 },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database", delay: 18 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database", delay: 19 },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database", delay: 20 },
    
    // DevOps
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps", delay: 21 },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps", delay: 22 },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "DevOps", delay: 23 },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "DevOps", delay: 24 },
    
    // Mobile
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Mobile", delay: 25 },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Mobile", delay: 26 },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", category: "Mobile", delay: 27 },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: "Mobile", delay: 28 },
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps", "Mobile"];

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
              Technology Stack
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
              We leverage the latest technologies to deliver high-quality, innovative solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <SectionTitle title={category} />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <TechCard
                      key={index}
                      name={tech.name}
                      logo={tech.logo}
                      category={tech.category}
                      delay={tech.delay}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Our Technology Approach" 
            subtitle="We select the right technologies for each project based on specific requirements and goals."
            center={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Technology Selection</h3>
                <p className="text-gray-600">
                  We carefully evaluate and select technologies based on your specific business 
                  requirements, project complexity, scalability needs, and long-term maintenance 
                  considerations. Our technology-agnostic approach ensures you get the best solution 
                  for your unique challenges.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Future-Proof Solutions</h3>
                <p className="text-gray-600">
                  We build solutions with the future in mind, using stable, well-maintained technologies 
                  with strong community support. This approach ensures your applications remain secure, 
                  performant, and adaptable to changing business needs without requiring complete rewrites.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  Our team continuously explores emerging technologies, frameworks, and methodologies 
                  to stay at the forefront of the industry. This commitment to learning ensures we 
                  can offer innovative solutions that leverage the latest advancements in technology.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Best Practices</h3>
                <p className="text-gray-600">
                  We adhere to industry best practices in software architecture, development, testing, 
                  and deployment. Our code is clean, well-documented, and follows established patterns 
                  to ensure maintainability, reliability, and security across all our solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;