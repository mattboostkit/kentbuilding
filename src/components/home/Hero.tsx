import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const staticSlide = {
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/HP.jpg?updatedAt=1751885849914',
    title: 'Building Excellence across the South East since 2008. Exceptional craftsmanship and superior service for every project',
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] w-full">
      {/* Static Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${staticSlide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/60" />

      {/* Content */}
      <div className="container-custom relative flex flex-col justify-start">
        <div className="h-40 sm:h-44 md:h-40"></div>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-bold leading-tight tracking-tight"
          >
            {staticSlide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-200 mt-8 max-w-2xl"
          >
            We deliver exceptional building solutions with a focus on quality, reliability, and customer satisfaction for both residential and commercial projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <Link to="/contact" className="btn btn-primary text-base px-7 py-3">
              Get a Quote
            </Link>
            <Link to="/services" className="btn btn-secondary text-white text-base px-7 py-3 hover:bg-primary-500/10">
              View Our Services
            </Link>
          </motion.div>
        </div>

        {/* Slider indicators removed */}
      </div>
    </section>
  );
};

export default Hero;