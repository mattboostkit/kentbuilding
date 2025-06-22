import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const advantages = [
    'Free no-obligation consultations',
    'Transparent pricing with no hidden costs',
    'Professional project management',
    'Fully insured and certified tradespersons',
    'Quality materials and craftsmanship',
    'Detailed project schedules',
    'Regular progress updates',
    'Thorough clean-up after completion',
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-custom-lg">
              <img
                src="https://ik.imagekit.io/boostkit/Kent%20Building/Hero%20Image.webp?updatedAt=1750336571403"
                alt="Kent Building & Construction team at work"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 z-10 bg-white p-8 rounded-lg shadow-custom max-w-xs">
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center mr-5">
                  <span className="text-white font-bold text-xl">20+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Years Experience</h4>
                  <p className="text-gray-600 text-sm">In the construction industry</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-secondary-600 flex items-center justify-center mr-5">
                  <span className="text-white font-bold text-xl">250+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Projects Completed</h4>
                  <p className="text-gray-600 text-sm">Throughout Kent & beyond</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">About <span className="text-primary-600">Kent Building & Construction</span></h2>
            <p className="section-subtitle">Crafting exceptional spaces with over 20 years of experience</p>

            <div className="mt-8 text-gray-600 space-y-5 leading-relaxed">
              <p>
                My name is Spencer Ellis and I am the proud owner of Kent Building and Construction ltd. At Kent Building and Construction, we have over 20 years of experience and offer only the very highest possible quality at the most affordable pricing.
              </p>
              <p>
                As home owners with families ourselves we appreciate how daunting the thought of builders in your home or business can be and respect your property and care for your project as much as you do yourself. We offer only the highest possible quality of workmanship and would be delighted to show you any number of examples of this should you wish to join us to inspect any of our previous projects.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-center"
                >
                  <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={16} className="text-primary-600" />
                  </div>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-5 items-center">
              <Link to="/about" className="btn btn-primary px-5 py-2">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 hover:border-primary-700 px-5 py-2">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;