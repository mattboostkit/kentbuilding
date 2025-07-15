import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const RestorationRefurbishmentPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-6.jpg?updatedAt=1751887634085',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-1.jpg?updatedAt=1751887634004',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-2.jpg?updatedAt=1751887633973',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-3.jpg?updatedAt=1751887634038',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-5.jpg?updatedAt=1751887634026',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-7.jpg?updatedAt=1751887634031',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-8.jpg?updatedAt=1752572136249',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-9.jpg?updatedAt=1752572136229',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-10.jpg?updatedAt=1752572136180',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-11.jpg?updatedAt=1752572136307',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-12.jpg?updatedAt=1752572136357',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-13.jpg?updatedAt=1752572136190',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-14.jpg?updatedAt=1752572136349',
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
    document.title = 'Restoration and Refurbishment | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional restoration and refurbishment services in the South East. Period property restoration, home renovations, and building refurbishment. Expert craftsmanship guaranteed. Call 07766 141811 or email spencer@kentbuildingandconstruction.co.uk');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Period property restoration',
    'Victorian and Edwardian renovations',
    'Interior and exterior refurbishment',
    'Structural repairs and reinforcement',
    'Plasterwork and decorative finishes',
    'Window and door restoration',
    'Roof repairs and restoration',
    'Heritage building expertise'
  ];

  const processSteps = [
    {
      title: 'Assessment',
      description: 'Thorough inspection of your property to identify restoration needs and create a detailed plan.'
    },
    {
      title: 'Planning',
      description: 'Develop restoration strategy, obtain necessary permissions, and create detailed specifications.'
    },
    {
      title: 'Restoration',
      description: 'Expert craftsmanship using traditional techniques and modern methods to restore your property.'
    },
    {
      title: 'Completion',
      description: 'Final inspection and handover with all restoration work completed to the highest standards.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-6.jpg?updatedAt=1751887634085')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Restoration and <span className="text-primary-300">Refurbishment</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Restore and refurbish your property with expert craftsmanship. From period homes to modern renovations, 
            we bring new life to buildings while preserving their character and integrity. Call 07766 141811 or email spencer@kentbuildingandconstruction.co.uk
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
              <span className="text-gray-700 font-medium">Restoration and Refurbishment</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Restoration Services</h2>
              <p className="text-gray-600 mb-6">
                Our restoration and refurbishment services combine traditional craftsmanship with modern techniques 
                to breathe new life into your property. We specialise in period homes, heritage buildings, and 
                contemporary renovations that respect the original character while meeting modern living standards.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're restoring a Victorian terrace, refurbishing an Edwardian home, or modernising a 
                period property, our team has the expertise to handle every aspect of your project with care and precision.
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
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-1.jpg?updatedAt=1751887634004"
                alt="Restoration Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Restoration Projects</h3>
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
                      alt={`Restoration Project ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Restoration Process</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Restore Your Property?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our restoration experts are ready to help you 
              bring your property back to its former glory.
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

export default RestorationRefurbishmentPage; 