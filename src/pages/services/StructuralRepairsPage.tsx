import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const StructuralRepairsPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-10.jpg?updatedAt=1753207783413',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-1.jpg?updatedAt=1751888401876',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-2.jpg?updatedAt=1751888401889',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-3.jpg?updatedAt=1751888401617',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-4.jpg?updatedAt=1751888401720',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-5.jpg?updatedAt=1751888401883',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-6.jpg?updatedAt=1751888401780',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-7.jpg?updatedAt=1751888401902',
    'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-8.jpg?updatedAt=1751888401770',
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
    document.title = 'Structural Repairs | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional structural repairs in Kent and Sussex. Foundation repairs, wall stabilisation, roof repairs, and structural reinforcement. Expert structural engineering solutions. FMB member with 20+ years experience. Call 07766 141811.');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Foundation repairs and stabilisation',
    'Wall and ceiling repairs',
    'Roof structure repairs',
    'Structural reinforcement',
    'Subsidence damage repair',
    'Crack repair and prevention',
    'Timber frame repairs',
    'Emergency structural support'
  ];

  const processSteps = [
    {
      title: 'Structural Assessment',
      description: 'Comprehensive structural survey to identify issues and determine the best repair solutions.'
    },
    {
      title: 'Engineering Design',
      description: 'Develop detailed repair plans with structural calculations and engineering specifications.'
    },
    {
      title: 'Repair & Reinforcement',
      description: 'Expert structural repairs using appropriate techniques and materials for lasting solutions.'
    },
    {
      title: 'Verification',
      description: 'Final structural inspection and testing to ensure repairs meet safety standards.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-10.jpg?updatedAt=1753207783413')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/60"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Structural <span className="text-primary-300">Repairs</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert structural repairs and reinforcement to ensure your property's safety and stability. 
            From foundation issues to structural failures, we provide comprehensive structural solutions.
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
              <span className="text-gray-700 font-medium">Structural Repairs</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Structural Repairs</h2>
              <p className="text-gray-600 mb-6">
                Our structural repair services address the most critical aspects of building safety and stability. 
                We work with structural engineers to diagnose issues and implement effective, long-lasting solutions 
                that protect your property and its occupants.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're dealing with subsidence, foundation problems, or structural damage, our experienced 
                team has the expertise to assess, repair, and reinforce your building's structural integrity.
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
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-10.jpg?updatedAt=1753207783413"
                alt="Structural Repair Project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Structural Projects</h3>
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
                      alt={`Structural Project ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Structural Process</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Concerned About Structural Issues?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't wait until it's too late. Contact our structural specialists today for a thorough assessment 
              and expert repair solutions to protect your property.
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

export default StructuralRepairsPage; 