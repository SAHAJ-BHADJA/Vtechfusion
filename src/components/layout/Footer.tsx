import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import Logo from "../common/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="mb-4">
              <Logo isFooter={true} />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              We bridge the gap between business and next-gen tech with
              scalable, secure, and stunning software solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-secondary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/technology-stack"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  H/21 Business Lane,
                  <br />
                  Satellite, <br /> Ahmedabad – 380015
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>
                  <a
                    href="tel:+917405673351"
                    className="text-sm hover:text-secondary-400 transition-colors"
                  >
                    +91-7405673351
                  </a>
                </span>
                <span className="ml-4">
                  <a
                    href="tel:+919157838669"
                    className="text-sm hover:text-secondary-400 transition-colors"
                  >
                    +91-9157838669
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@vtechfusion.com"
                  className="text-sm hover:text-secondary-400 transition-colors"
                >
                  info@vtechfusion.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} VTechFusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
