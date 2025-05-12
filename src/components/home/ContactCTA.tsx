import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Contact us today to schedule a free consultation and discover how our tailored technology solutions can help your business grow.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Button to="/contact" variant="primary" size="lg" className="group">
              <span>Get in Touch</span>
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;