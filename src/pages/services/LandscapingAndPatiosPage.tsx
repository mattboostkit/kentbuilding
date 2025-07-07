import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const LandscapingAndPatiosPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-5.jpg?updatedAt=1751886599370',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-1.jpg?updatedAt=1751886599295',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-2.jpg?updatedAt=1751886599091',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-3.jpg?updatedAt=1751886599422',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-4.jpg?updatedAt=1751886599283',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-6.jpg?updatedAt=1751886599378',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-7.jpg?updatedAt=1751886599281',
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
    document.title = 'Landscaping and Patios | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional landscaping and patio services in Kent and Sussex. Patios, driveways, pathways, retaining walls, and outdoor construction. Transform your outdoor space.');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Patios and terraces',
    'Driveways and parking areas',
    'Pathways and walkways',
    'Retaining walls',
    'Garden structures',
    'Outdoor kitchens',
    'Water features',
    'Decking and pergolas'
  ];

  const processSteps = [
    {
      title: 'Site Survey',
      description: 'Comprehensive assessment of your outdoor space, soil conditions, and drainage requirements.'
    },
    {
      title: 'Design & Planning',
      description: 'Create detailed landscaping plans that complement your property and meet your requirements.'
    },
    {
      title: 'Construction',
      description: 'Expert installation using quality materials and proper construction techniques for lasting results.'
    },
    {
      title: 'Completion',
      description: 'Final inspection and handover with maintenance advice and warranty information.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-5.jpg?updatedAt=1751886599370')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Landscaping & <span className="text-primary-300">Patios</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Transform your outdoor space with professional landscaping and patio design. From patios and driveways to 
            garden structures and water features, we create beautiful, functional outdoor environments.
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
              <span className="text-gray-700 font-medium">Landscaping and Patios</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Landscaping and Patios</h2>
              <p className="text-gray-600 mb-6">
                Our landscaping and patio services combine aesthetic design with practical functionality to create 
                outdoor spaces that enhance your property's value and enjoyment. We work with a wide range of 
                materials and techniques to deliver lasting results.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're looking to create a beautiful patio for outdoor entertaining, a practical driveway, 
                or a complete garden transformation, our experienced team has the skills and expertise to bring 
                your vision to life.
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
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-5.jpg?updatedAt=1751886599370"
                alt="Landscaping and Patio Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Landscaping Projects</h3>
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
                      alt={`Landscaping Project ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Landscaping Process</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Outdoor Space?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to help you create the perfect outdoor environment for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07766141811"
                className="btn btn-primary flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Call 07766 141 811
              </a>
              <a
                href="mailto:info@kentconstruction.co.uk"
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

export default LandscapingAndPatiosPage; 