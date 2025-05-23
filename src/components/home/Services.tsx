import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Landmark, Trees as Tree, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Listed & Heritage Buildings',
    description: 'Preserving character and history with expert care.',
    icon: Landmark,
    color: 'bg-primary-500 text-white',
    slug: 'listed-heritage-buildings',
  },
  {
    title: 'Restoration & Refurbishments',
    description: 'Breathe new life into your property with our expert renovation services.',
    icon: Home,
    color: 'bg-secondary-500 text-white',
    slug: 'restoration-refurbishments',
  },
  {
    title: 'Extensions',
    description: 'Seamlessly expand your living or working space with our bespoke extension solutions.',
    icon: Building,
    color: 'bg-accent-500 text-white',
    slug: 'extensions',
  },
  {
    title: 'Structural Repairs',
    description: 'Safeguarding the integrity of your building with expert structural solutions.',
    icon: Wrench,
    color: 'bg-gray-700 text-white',
    slug: 'structural-repairs',
  },
  {
    title: 'New Builds',
    description: 'Bringing your vision to life from the ground up with modern, energy-efficient construction.',
    icon: Building,
    color: 'bg-success-500 text-white',
    slug: 'new-builds',
  },
  {
    title: 'Hard Landscaping',
    description: 'Enhancing your outdoor space with durable and beautiful hard landscaping features.',
    icon: Tree,
    color: 'bg-primary-700 text-white',
    slug: 'hard-landscaping',
  },
  {
    title: 'Kitchens & Bathrooms',
    description: 'Beautiful, functional spaces tailored to your specific needs and style.',
    icon: Home,
    color: 'bg-primary-600 text-white',
    slug: 'kitchens-bathrooms',
  }
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  index: number;
  slug: string;
}> = ({ title, description, icon: Icon, color, index, slug }) => {

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
        <Link to={`/services#${slug}`} className="text-inherit no-underline">
          <h3 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-5 leading-relaxed">
          {description}
        </p>
        <Link
          to={`/services#${slug}`}
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