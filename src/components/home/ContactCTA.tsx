import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">Ready to start your <span className="text-primary-600">project?</span></h2>
            <p className="section-subtitle">
              Contact us today for a free, no-obligation consultation and quote for your construction project.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-5 flex-shrink-0">
                  <Phone className="text-primary-600" size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600 mb-2">For immediate assistance or to discuss your project</p>
                  <a 
                    href="tel:07766141811" 
                    className="text-primary-600 font-medium hover:text-primary-700 text-lg"
                  >
                    07766 141 811
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail className="text-primary-600" size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-600 mb-2">For detailed inquiries or to request a quote</p>
                  <a 
                    href="mailto:info@kentconstruction.co.uk" 
                    className="text-primary-600 font-medium hover:text-primary-700 text-lg"
                  >
                    info@kentconstruction.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mr-5 flex-shrink-0">
                  <Clock className="text-primary-600" size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600 mb-2">We're available to assist you during these hours</p>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary px-7 py-3">
                Get In Touch
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-lg shadow-custom-lg p-10 border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-8">Request a Free Quote</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                  Project Type*
                </label>
                <select
                  id="projectType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="new-build">New Build Construction</option>
                  <option value="renovation">Home Renovation</option>
                  <option value="restoration">Listed Building Restoration</option>
                  <option value="commercial">Commercial Fit-out</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="specialized">Specialized Trade Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Please provide details about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary py-3.5"
              >
                Submit Request
              </button>
              
              <p className="text-gray-500 text-sm mt-5">
                By submitting this form, you agree to our privacy policy. We'll respond to your inquiry within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;