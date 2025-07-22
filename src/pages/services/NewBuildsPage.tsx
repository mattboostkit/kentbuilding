import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import GalleryModal from '../../components/GalleryModal';

const NewBuildsPage: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-1.jpg?updatedAt=1751969384287',
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-2.jpg?updatedAt=1751969384246',
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-3.jpg?updatedAt=1751969384177',
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-5.jpg?updatedAt=1751969384078',
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-6.jpg?updatedAt=1751969384260',
    'https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-7.jpg?updatedAt=1751969642061',
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
    document.title = 'New Builds | Kent Building & Construction';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Custom new build homes in Kent and Sussex. Bespoke house construction, eco-friendly builds, and modern home design. From concept to completion, we build your dream home. FMB member with 20+ years experience. Call 07766 141811.');
    }

    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Custom house design and build',
    'Eco-friendly and sustainable homes',
    'Modern and traditional architecture',
    'Energy-efficient construction',
    'Smart home integration',
    'High-quality materials and finishes',
    'Project management from start to finish',
    'Warranty and aftercare support'
  ];

  const processSteps = [
    {
      title: 'Design & Planning',
      description: 'Collaborate with our design team to create your perfect home, from initial concepts to detailed plans.'
    },
    {
      title: 'Site Preparation',
      description: 'Comprehensive site survey, groundworks, and preparation for construction to begin.'
    },
    {
      title: 'Construction',
      description: 'Expert construction using the highest quality materials and latest building techniques.'
    },
    {
      title: 'Handover',
      description: 'Final inspection, snagging, and handover of your completed new home with full documentation.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-48 pb-28 relative">
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-7.jpg?updatedAt=1751969642061')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/60"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            New <span className="text-primary-300">Builds</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Create your dream home from the ground up. Our bespoke new build service combines innovative design, 
            quality craftsmanship, and sustainable construction to deliver exceptional homes.
          </p>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mt-4">
            Call 07766 141811 or email <Link to="/contact" className="text-primary-300 hover:text-white underline">spencer@kentbuildingandconstruction.co.uk</Link>
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
              <span className="text-gray-700 font-medium">New Builds</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bespoke New Build Homes</h2>
              <p className="text-gray-600 mb-6">
                Our new build service offers the opportunity to create a home that's perfectly tailored to your lifestyle, 
                needs, and preferences. From contemporary designs to traditional architecture, we work closely with you 
                to bring your vision to life.
              </p>
              <p className="text-gray-600 mb-8">
                We combine innovative design with sustainable construction practices, ensuring your new home is not only 
                beautiful but also energy-efficient and built to last. Our comprehensive service covers everything from 
                initial design concepts to final handover.
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
                src="https://ik.imagekit.io/boostkit/Kent%20Building/New%20Builds/New-Build-7.jpg?updatedAt=1751969642061"
                alt="New Build Home"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our New Build Projects</h3>
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
                      alt={`New Build Project ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Build Process</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Dream Home?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your new build project. Our team is ready to help you create the perfect 
              home that reflects your vision and lifestyle.
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

export default NewBuildsPage; 