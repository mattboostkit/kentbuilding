import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Landmark, Store, Trees as Tree, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Restoring Period and Listed Buildings',
    description: 'Specialist restoration of listed and period properties, preserving historical features whilst incorporating modern comforts.',
    icon: Landmark,
    color: 'bg-primary-500 text-white',
  },
  {
    title: 'Home Renovation & Refurbishment',
    description: 'Transform your existing property with our comprehensive renovation and refurbishment services.',
    icon: Home,
    color: 'bg-secondary-500 text-white',
  },
  {
    title: 'Extensions',
    description: 'Expand your living space with beautifully designed and expertly constructed extensions that complement your property.',
    icon: Building,
    color: 'bg-accent-500 text-white',
  },
  {
    title: 'Office and Shop Refurbishment',
    description: 'Complete refurbishment services for commercial spaces, creating functional and impressive environments for your business.',
    icon: Store,
    color: 'bg-gray-700 text-white',
  },
  {
    title: 'Landscaping and Ground Works',
    description: 'Design and construction of beautiful, functional outdoor spaces with comprehensive groundwork solutions.',
    icon: Tree,
    color: 'bg-success-500 text-white',
  },
  {
    title: 'Oast House Restoration and Refurbishments',
    description: 'Specialised restoration and refurbishment of traditional Kentish oast houses, preserving their unique character.',
    icon: Landmark,
    color: 'bg-primary-700 text-white',
  },
  {
    title: 'Oak Framed Buildings and Structures',
    description: 'Bespoke oak framed buildings and structures, combining traditional craftsmanship with modern building techniques.',
    icon: Wrench,
    color: 'bg-primary-600 text-white',
  },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  index: number;
}> = ({ title, description, icon: Icon, color, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="card group hover:shadow-custom-lg cursor-pointer"
    >
      <div className="p-10">
        <div className={`w-16 h-16 rounded-lg ${color} flex items-center justify-center mb-6`}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-5 leading-relaxed">
          {description}
        </p>
        <Link
          to="/services"
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn More <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title">Our <span className="text-primary-600">Services</span></h2>
          <p className="section-subtitle">
            We provide a comprehensive range of specialist building services across Kent, delivered by skilled professionals to the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services" className="btn btn-primary px-7 py-3">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;