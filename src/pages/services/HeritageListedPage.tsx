import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const HeritageListedPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-6.jpg?updatedAt=1751887981031',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-1.jpg?updatedAt=1751887980951',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-2.jpg?updatedAt=1751887980902',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-3.jpg?updatedAt=1751887981016',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-4.jpg?updatedAt=1751887980803',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-5.jpg?updatedAt=1751887980991',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-7.jpg?updatedAt=1751887980986',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-8.jpg?updatedAt=1752571684471',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-9.jpg?updatedAt=1752571684481',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-10.jpg?updatedAt=1752571684520',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-11.jpg?updatedAt=1752571684379',
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
    document.title = 'Heritage and Listed Buildings | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialist heritage building and listed building restoration in Kent and Sussex. Grade I, II, and II* listed building expertise. Conservation work and heritage building maintenance. FMB member with 20+ years experience. Call 07766 141811.');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Grade I, II, and II* listed buildings',
    'Heritage building conservation',
    'Period property restoration',
    'Traditional building techniques',
    'Conservation area compliance',
    'Heritage planning applications',
    'Historical material sourcing',
    'Expert heritage consultation'
  ];

  const processSteps = [
    {
      title: 'Heritage Assessment',
      description: 'Comprehensive evaluation of your listed building, including historical significance and conservation requirements.'
    },
    {
      title: 'Conservation Planning',
      description: 'Develop conservation strategy in consultation with heritage authorities and planning departments.'
    },
    {
      title: 'Specialist Restoration',
      description: 'Expert restoration using traditional techniques and materials appropriate for heritage buildings.'
    },
    {
      title: 'Heritage Compliance',
      description: 'Ensure all work meets heritage standards and receives necessary approvals and certifications.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-6.jpg?updatedAt=1751887981031')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Heritage and <span className="text-primary-300">Listed Buildings</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Specialist restoration and conservation of heritage buildings and listed properties. 
            Preserving our architectural heritage with expert craftsmanship and traditional techniques.
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
              <span className="text-gray-700 font-medium">Heritage and Listed Buildings</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Heritage Building Specialists</h2>
              <p className="text-gray-600 mb-6">
                Our expertise in heritage buildings and listed properties spans decades of experience working with 
                Grade I, II, and II* listed buildings. We understand the unique challenges and requirements of 
                preserving our architectural heritage while ensuring these buildings remain functional for modern use.
              </p>
              <p className="text-gray-600 mb-8">
                We work closely with conservation officers, heritage authorities, and planning departments to ensure 
                all restoration work meets the highest standards of heritage conservation while complying with all 
                relevant regulations and guidelines.
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
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-6.jpg?updatedAt=1751887981031"
                alt="Heritage Building Restoration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Heritage Projects</h3>
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
                      alt={`Heritage Project ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Heritage Process</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Heritage Building Expertise?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our heritage specialists today for expert advice on your listed building project. 
              We're here to help preserve our architectural heritage for future generations.
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

export default HeritageListedPage; 