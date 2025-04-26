import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'James Thompson',
    location: 'Canterbury, Kent',
    testimonial: 'We are absolutely thrilled with our home extension. The team at Kent Construction was professional, courteous, and completed the work to an exceptional standard. They were always on hand to answer questions and kept us informed throughout the project.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    project: 'Home Extension',
  },
  {
    id: 2,
    name: 'Emma Richardson',
    location: 'Sevenoaks, Kent',
    testimonial: 'After years of dreaming about renovating our period property, Kent Construction turned our vision into reality. Their understanding of listed buildings and attention to detail preserved the character while bringing modern comforts. Exceptional work!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    project: 'Listed Building Renovation',
  },
  {
    id: 3,
    name: 'Robert Collins',
    location: 'Maidstone, Kent',
    testimonial: 'As a business owner, minimizing disruption during our office renovation was crucial. The team delivered on time, on budget, and with minimal impact on our operations. The result has transformed our workspace and impressed our clients.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    project: 'Commercial Office Refurbishment',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-white">Client <span className="text-primary-200">Testimonials</span></h2>
          <p className="section-subtitle text-primary-100">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 top-0 text-primary-400 opacity-30">
              <Quote size={120} />
            </div>
            
            <div className="bg-white rounded-lg shadow-custom-lg p-8 md:p-12 relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${index === activeIndex ? 'block' : 'hidden'}`}
                >
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18}
                            className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm border border-gray-200 rounded px-2 py-1">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.testimonial}"
                  </p>
                </motion.div>
              ))}
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex 
                          ? 'bg-primary-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;