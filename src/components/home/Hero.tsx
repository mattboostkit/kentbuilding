import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Building Excellence',
      subtitle: 'across Kent since 2008',
    },
    {
      image: 'https://images.pexels.com/photos/2883006/pexels-photo-2883006.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Quality Craftsmanship',
      subtitle: 'built to last generations',
    },
    {
      image: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Exceptional Service',
      subtitle: 'from consultation to completion',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] w-full">
      {/* Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/60" />
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-bold leading-tight tracking-tight"
          >
            {slides[currentSlide].title} <br />
            <span className="text-primary-400 mt-2 block">{slides[currentSlide].subtitle}</span>
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
            <Link to="/portfolio" className="btn btn-secondary text-base px-7 py-3">
              View Our Projects
            </Link>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-8"
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
              <Clock className="text-primary-400" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">15+ Years</p>
              <p className="text-gray-300">Industry Experience</p>
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
        </motion.div>

        {/* Slider indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary-500 w-10' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;