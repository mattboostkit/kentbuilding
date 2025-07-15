import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const KitchensBathroomsPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-1.jpg?updatedAt=1751969114597',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-2.jpg?updatedAt=1751969114651',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-3.jpg?updatedAt=1751969114611',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-4.jpg?updatedAt=1751969114619',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-5.jpg?updatedAt=1751969114562',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-6.jpg?updatedAt=1751969114693',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-7.jpg?updatedAt=1751969114619',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-8.jpg?updatedAt=1752571786038',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-9.jpg?updatedAt=1752571786117',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-10.jpg?updatedAt=1752571786108',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-11.jpg?updatedAt=1752571785745',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-12.jpg?updatedAt=1752571786103',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-14.jpg?updatedAt=1752571786068',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-15.jpg?updatedAt=1752571786084',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-16.jpg?updatedAt=1752571786023',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-17.jpg?updatedAt=1752571785971',
  ];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const navigateGallery = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    document.title = 'Kitchens and Bathrooms | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional kitchen and bathroom design and installation in the South East. Bespoke kitchens, luxury bathrooms, and complete room renovations. Transform your home. Call 07766 141811 or email spencer@kentbuildingandconstruction.co.uk');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Bespoke kitchen design and installation',
    'Luxury bathroom design',
    'Complete room renovations',
    'Custom cabinetry and joinery',
    'Plumbing and electrical work',
    'Tiling and flooring',
    'Smart home integration',
    'Project management and coordination'
  ];

  const processSteps = [
    {
      title: 'Design Consultation',
      description: 'Collaborate with our design team to create your perfect kitchen or bathroom layout and style.'
    },
    {
      title: 'Planning & Preparation',
      description: 'Detailed planning, material selection, and preparation for installation to begin.'
    },
    {
      title: 'Installation',
      description: 'Professional installation with attention to detail and quality craftsmanship throughout.'
    },
    {
      title: 'Completion',
      description: 'Final inspection, snagging, and handover of your beautiful new kitchen or bathroom.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-6.jpg?updatedAt=1751969114693')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Kitchens and <span className="text-primary-300">Bathrooms</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Transform your home with bespoke kitchen and bathroom design. From concept to completion, 
            we create beautiful, functional spaces that enhance your lifestyle and property value. Call 07766 141811 or email spencer@kentbuildingandconstruction.co.uk
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center text-sm">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <Link to="/services" className="text-gray-500 hover:text-primary-600">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 font-medium">Kitchens and Bathrooms</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bespoke Kitchen & Bathroom Design</h2>
              <p className="text-gray-600 mb-6">
                Our kitchen and bathroom design service combines creativity with functionality to create spaces 
                that perfectly suit your lifestyle and preferences. We work with you to design and install 
                beautiful, practical rooms that you'll love for years to come.
              </p>
              <p className="text-gray-600 mb-8">
                From contemporary kitchens to luxury bathrooms, our experienced team handles every aspect of 
                your project, from initial design concepts to final installation and finishing touches.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Kitchens%20and%20Bathrooms/Kitchens-6.jpg?updatedAt=1751969114693"
                alt="Kitchen and Bathroom Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Kitchen & Bathroom Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={image}
                      alt={`Kitchen Bathroom Project ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-primary-50 rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Kitchen or Bathroom?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today for a free design consultation and quote. Our design team is ready to help you 
              create the perfect kitchen or bathroom for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07766141811"
                className="btn btn-primary flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Call 07766 141811
              </a>
              <a
                href="mailto:spencer@kentbuildingandconstruction.co.uk"
                className="btn btn-secondary flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={closeGallery}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onNavigate={navigateGallery}
      />
    </>
  );
};

export default KitchensBathroomsPage; 