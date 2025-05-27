import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Cloud,
  Wifi,
  Globe,
  ShoppingCart,
  Code,
  Smartphone as SmartphoneIcon,
  Palette,
  LifeBuoy,
  Search,
  MousePointer,
  Share2,
  Mail,
  FileText,
  BarChart,
  Workflow,
  Star,
  ShoppingBag,
  Code2
} from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  delay,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="p-6">
        <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-5 text-primary-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-600 mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-secondary-500 mt-0.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <Button
          to="/contact"
          variant="secondary"
          className="w-full justify-center"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const itSolutions = [
    {
      icon: <Server size={28} />,
      title: "IT Support",
      description:
        "Comprehensive technical support to keep your business and system running smoothly.",
      features: [
        "24/7 Helpdesk Support",
        "On-site Technical Assistance",
        "System Monitoring",
        "Troubleshooting & Resolution",
      ],
      delay: 0,
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Cybersecurity",
      description:
        "Protect your business from evolving cyber threats with our security solutions.",
      features: [
        "Firewall Implementation",
        "Threat Detection & Response",
        "Security Audits",
        "Employee Security Training",
      ],
      delay: 1,
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Services",
      description:
        "Leverage the power of cloud computing for flexibility and scalability.",
      features: [
        "Cloud Migration",
        "Cloud Infrastructure Management",
        "Backup & Disaster Recovery",
        "Remote Work Solutions",
      ],
      delay: 2,
    },
    {
      icon: <Wifi size={28} />,
      title: "Networking",
      description: "Set up a reliable network for seamless connectivity.",
      features: [
        "Network Design & Implementation",
        "Wi-Fi Setup & Optimization",
        "VPN Configuration",
        "Network Monitoring & Maintenance",
      ],
      delay: 3,
    },
  ];

  const webDevelopment = [
    {
      icon: <Globe size={28} />,
      title: "Stunning Websites",
      description:
        "Custom-designed websites that showcase your brand and engage visitors.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management Systems",
        "Performance Optimization",
      ],
      delay: 0,
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "E-commerce Solutions",
      description:
        "Powerful online stores that drive sales and provide excellent user experience.",
      features: [
        "Shopify & WooCommerce Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile Shopping Experience",
      ],
      delay: 1,
    },
    {
      icon: <Code size={28} />,
      title: "Custom Web Applications",
      description:
        "Tailored web applications that solve specific business challenges.",
      features: [
        "SaaS Applications",
        "Business Dashboards",
        "API Development & Integration",
        "Legacy System Modernization",
      ],
      delay: 2,
    },
  ];

  const mobileDevelopment = [
    {
      icon: <SmartphoneIcon size={28} />,
      title: "Native & Hybrid Apps",
      description:
        "High-performance mobile applications for iOS and Android platforms.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Development",
        "App Store Submission",
      ],
      delay: 0,
    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX Focus",
      description:
        "Beautiful, intuitive interfaces that enhance user engagement.",
      features: [
        "User-Centered Design",
        "Interface Prototyping",
        "Usability Testing",
        "Interactive Elements",
      ],
      delay: 1,
    },
    {
      icon: <LifeBuoy size={28} />,
      title: "Maintenance & Support",
      description:
        "Ongoing support to ensure your mobile app stays current and functional.",
      features: [
        "Regular Updates",
        "Performance Monitoring",
        "Bug Fixes",
        "Feature Enhancements",
      ],
      delay: 2,
    },
  ];

  const digitalMarketing = [
    {
      icon: <Code2 size={28} />,
      title: "Website Development & Optimization",
      description:
        "Custom pages to enhance user experience and campaign performance.",
      features: [
        "Responsive website design (mobile-friendly)",
        "CMS integration (e.g., WordPress, Shopify)",
        "SEO optimization (on-page, technical)",
        "Landing page creation for campaigns",
      ],
      delay: 0,
    },
    {
      icon: <Search size={28} />,
      title: "Search Engine Optimization",
      description:
        "Boost your online visibility with comprehensive SEO strategies.",
      features: [
        "Keyword Research & Strategy",
        "On-page & Technical SEO",
        "Link Building",
        "SEO Audits & Reporting",
      ],
      delay: 1,
    },
    {
      icon: <MousePointer size={28} />,
      title: "PPC Advertising",
      description:
        "Drive targeted traffic with effective paid advertising campaigns.",
      features: [
        "Google & Bing Ads Management",
        "Budget Optimization",
        "A/B Testing",
        "ROI Analysis",
      ],
      delay: 2,
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Marketing",
      description: "Engage your audience across all major social platforms.",
      features: [
        "Platform Management",
        "Content Creation",
        "Paid Campaigns",
        "Engagement Tracking",
      ],
      delay: 3,
    },
    {
      icon: <Mail size={28} />,
      title: "Email Marketing",
      description:
        "Build and nurture customer relationships through targeted email campaigns.",
      features: [
        "Campaign Design",
        "Automation",
        "List Segmentation",
        "Performance Analytics",
      ],
      delay: 4,
    },
    {
      icon: <FileText size={28} />,
      title: "Content Marketing",
      description:
        "Create compelling content that drives engagement and conversions.",
      features: [
        "Blog & Article Writing",
        "Video Production",
        "Content Strategy",
        "SEO Optimization",
      ],
      delay: 5,
    },
    {
      icon: <BarChart size={28} />,
      title: "Analytics & Reporting",
      description:
        "Track and optimize your marketing performance with detailed insights.",
      features: [
        "Google Analytics",
        "Conversion Optimization",
        "Performance Reports",
        "Customer Journey Analysis",
      ],
      delay: 6,
    },
    {
      icon: <Workflow size={28} />,
      title: "Marketing Automation",
      description:
        "Streamline your marketing efforts with powerful automation tools.",
      features: [
        "Workflow Automation",
        "Lead Nurturing",
        "CRM Integration",
        "Behavioral Targeting",
      ],
      delay: 7,
    },
    {
      icon: <Star size={28} />,
      title: "Online Reputation Management",
      description:
        "Monitor and maintain your brand's online presence and reputation.",
      features: [
        "Review Monitoring",
        "Crisis Management",
        "Brand Analysis",
        "Social Listening",
      ],
      delay: 8,
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "E-commerce Marketing",
      description:
        "Maximize your online store's performance with targeted strategies.",
      features: [
        "Product Optimization",
        "Retargeting Campaigns",
        "Cart Recovery",
        "Multi-channel Marketing",
      ],
      delay: 9,
    },
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
              Our Services
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
              Comprehensive technology solutions tailored to meet your business
              needs and drive growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="IT Solutions"
            subtitle="Reliable IT infrastructure and support services to keep your business running smoothly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itSolutions.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Web Development"
            subtitle="Custom websites and web applications that engage users and drive business results."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDevelopment.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Mobile App Development"
            subtitle="Innovative mobile applications that connect you with your customers on any device."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileDevelopment.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Digital Marketing"
            subtitle="Comprehensive digital marketing solutions to help your business grow online and reach your target audience effectively."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketing.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our technology solutions can help you achieve your
            business goals.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
