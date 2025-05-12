import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Custom Software Solutions"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise Security"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Rapid Development"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-32">
          {/* Content */}
          <div className="lg:w-1/2 text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Digital{' '}
                <span className="text-secondary-400">Growth</span>{' '}
                Partner
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                We bridge the gap between business and next-gen tech with scalable, secure, and stunning software solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/contact" variant="secondary" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/services" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Explore Services
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="p-2 bg-secondary-500/20 rounded-lg text-secondary-400">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image/Visual Section */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent rounded-3xl" />
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Transformation"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ height: '600px' }}
              />
              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-primary-600 font-semibold">Success Rate</h3>
                  <span className="text-secondary-500 text-2xl font-bold">98%</span>
                </div>
                <p className="text-sm text-gray-600">
                  Delivering exceptional results across all projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;