import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Landmark, Store, Trees as Tree, Wrench, Shield, ThumbsUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'new-build',
    title: 'New Build Construction',
    tagline: 'Custom-built properties designed to perfection',
    description: 'Our new build construction service delivers exceptional residential and commercial properties tailored to your specific requirements. We handle everything from initial designs and planning permissions to foundations, structural work, and finishing touches.',
    features: [
      'Architectural design collaboration',
      'Planning permission assistance',
      'Full construction management',
      'Energy-efficient building techniques',
      'High-quality fixtures and finishes',
      'Building regulation compliance',
    ],
    icon: Building,
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'renovation',
    title: 'Home Renovation & Refurbishment',
    tagline: 'Transform your existing property',
    description: 'Our comprehensive renovation and refurbishment services breathe new life into your property. Whether you\'re looking to modernize an outdated space, reconfigure your layout for better functionality, or add value to your property, our skilled team delivers exceptional results.',
    features: [
      'Complete interior renovations',
      'Kitchen and bathroom remodeling',
      'Structural alterations',
      'Electrical and plumbing upgrades',
      'Energy efficiency improvements',
      'Interior design services',
    ],
    icon: Home,
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'restoration',
    title: 'Listed Building Restoration',
    tagline: 'Preserving history with modern techniques',
    description: 'We specialize in the sensitive restoration of listed and period properties, carefully preserving historical features while incorporating modern comforts. Our experienced craftsmen understand the unique requirements of heritage buildings and work with traditional materials and techniques.',
    features: [
      'Heritage conservation expertise',
      'Traditional craftsmanship',
      'Period-appropriate materials',
      'Listed building consent management',
      'Structural repair and stabilization',
      'Sympathetic modernization',
    ],
    icon: Landmark,
    image: 'https://images.pexels.com/photos/2775518/pexels-photo-2775518.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'commercial',
    title: 'Commercial Fit-outs',
    tagline: 'Functional spaces for business success',
    description: 'Our commercial fit-out service transforms empty shells into functional, branded spaces that enhance productivity and impress clients. From offices and retail units to restaurants and hospitality venues, we create tailored environments that reflect your brand and meet your operational needs.',
    features: [
      'Office and retail space design',
      'Bespoke joinery and fixtures',
      'HVAC and electrical installations',
      'Flooring and ceiling systems',
      'Partitioning and acoustic solutions',
      'Commercial kitchen installations',
    ],
    icon: Store,
    image: 'https://images.pexels.com/photos/3955054/pexels-photo-3955054.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Outdoor Spaces',
    tagline: 'Beautiful exteriors that complement your property',
    description: 'Our landscaping service designs and constructs beautiful, functional outdoor spaces that complement your property and extend your living area. From elegant patios and driveways to complete garden transformations, we create outdoor environments that enhance your lifestyle and property value.',
    features: [
      'Garden design and planning',
      'Patios and decking installation',
      'Driveway and path construction',
      'Fencing and boundary solutions',
      'Water features and irrigation',
      'Planting schemes and lawn laying',
    ],
    icon: Tree,
    image: 'https://images.pexels.com/photos/2042509/pexels-photo-2042509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'specialized',
    title: 'Specialized Trade Services',
    tagline: 'Expert tradespeople for every requirement',
    description: 'Our specialized trade services provide expert solutions for specific building requirements. From certified plumbing and electrical work to skilled carpentry and bricklaying, our qualified tradespeople deliver high-quality workmanship for both standalone projects and as part of larger construction works.',
    features: [
      'Certified electrical installations',
      'Gas-safe plumbing services',
      'Skilled carpentry and joinery',
      'Professional bricklaying',
      'Plastering and rendering',
      'Roofing and guttering',
    ],
    icon: Wrench,
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const benefits = [
  {
    title: 'Quality Guarantee',
    description: 'All our work is backed by our quality guarantee, ensuring lasting results.',
    icon: ThumbsUp,
  },
  {
    title: 'Fully Insured',
    description: 'We carry comprehensive insurance coverage for your complete peace of mind.',
    icon: Shield,
  },
  {
    title: 'Timely Delivery',
    description: 'We prioritize completing projects on schedule without compromising quality.',
    icon: Clock,
  },
];

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white py-28 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Our Construction <span className="text-primary-300">Services</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Comprehensive building solutions delivered with expertise, quality materials, and exceptional craftsmanship.
        </p>
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Our Services | Kent Building & Construction';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceBanner />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Comprehensive <span className="text-primary-600">Building Solutions</span></h2>
            <p className="section-subtitle">
              From new builds to renovations, our full range of services is designed to meet all your construction needs with the highest standards of quality and craftsmanship.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden shadow-custom-lg aspect-video">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md">
                        <service.icon size={32} className="text-primary-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                      {service.tagline}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="btn btn-primary">
                      Enquire About This Service
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Why Choose <span className="text-primary-600">Our Services</span></h2>
            <p className="section-subtitle">
              We're committed to delivering exceptional quality, transparent communication, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-custom text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={28} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;