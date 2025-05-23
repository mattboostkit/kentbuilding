import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const staticSlide = {
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    title: 'Building Excellence across Kent since 2008',
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
            <Link to="/portfolio" className="btn btn-secondary text-white text-base px-7 py-3 hover:bg-primary-500/10">
              View Our Projects
            </Link>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-8"
        >
          <div className="flex items-center">
            <div className="p-4 rounded-full bg-primary-600/20 mr-5">
              <Ruler className="text-primary-400" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">250+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-4 rounded-full bg-primary-600/20 mr-5">
              <Award className="text-primary-400" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>

          <div className="flex items-center">
            <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="FMB Logo" className="h-12 w-auto mr-5" />
            <div>
              <p className="text-white font-bold text-xl">FMB Member</p>
              <p className="text-gray-300">For Over 15 Years</p>
            </div>
          </div>
        </motion.div>

        {/* Slider indicators removed */}
      </div>
    </section>
  );
};

export default Hero;