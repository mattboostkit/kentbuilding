import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BadgeCheck, Verified } from 'lucide-react';

const AccreditationsBanner: React.FC = () => {
  const accreditations = [
    {
      imageSrc: 'https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556',
      title: 'Federation of Master Builders',
      description: 'Registered Member #71497',
      isImage: true,
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Public & Employer Liability',
    },
    {
      icon: BadgeCheck,
      title: 'Trading Standards',
      description: 'Approved Contractor',
    },
    {
      icon: Verified,
      title: 'Master Builders Award',
      description: 'Runner up for Heavenly Builder of the Year',
    },
    {
      icon: Verified,
      title: 'ISO 9001',
      description: 'Quality Management',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Our Accreditations & Certifications</h3>
          <p className="text-gray-600 mt-2">
            We're proud to be recognised by these industry-leading organisations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                {item.isImage && item.imageSrc ? (
                <img src={item.imageSrc} alt={item.title} className="h-8 w-auto" />
              ) : item.icon ? (
                <item.icon size={24} className="text-primary-600" />
              ) : null}
              </div>
              <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsBanner;