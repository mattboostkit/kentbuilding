import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const categories = ['All', 'Interior Renovation', 'Landscaping', 'Restoration', 'Leisure & Recreation'];

const projects = [
  {
    id: 1,
    title: 'Contemporary Bathroom Suite',
    category: 'Interior Renovation',
    location: 'Maidstone, Kent',
    completionDate: 'April 2025',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Bathroom%204.webp?updatedAt=1750336257595',
    additionalImages: [
      'https://ik.imagekit.io/boostkit/Kent%20Building/Bathroom%205.webp?updatedAt=1750336257699',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Bathroom%203.webp?updatedAt=1750336257700',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Bathroom%206.webp?updatedAt=1750336257609'
    ],
    description: 'Complete bathroom transformation featuring large format gray porcelain tiles and built-in bathtub with matching tile surround. The project included new plumbing, electrical installation, and window replacement while maximizing natural light and creating a clean, modern aesthetic with neutral tones.',
  },
  {
    id: 2,
    title: 'Multi-Level Sandstone Terrace',
    category: 'Landscaping',
    location: 'Canterbury, Kent',
    completionDate: 'June 2024',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Patio%206.webp?updatedAt=1750336260884',
    additionalImages: [
      'https://ik.imagekit.io/boostkit/Kent%20Building/Patio%202.webp?updatedAt=1750336259973',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Patio%208.webp?updatedAt=1750336262077',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Patio%205.webp?updatedAt=1750336260805'
    ],
    description: 'Construction of an expansive natural sandstone patio featuring multiple levels and integrated planters. The project incorporated careful grading for optimal drainage, precision stone cutting for seamless joints, and strategic placement to capture panoramic countryside views while creating distinct entertaining zones.',
  },
  {
    id: 3,
    title: 'Period Property Roof Renovation',
    category: 'Restoration',
    location: 'Ashford, Kent',
    completionDate: 'November 2024',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Renovation%2011.webp?updatedAt=1750336255244',
    additionalImages: [
      'https://ik.imagekit.io/boostkit/Kent%20Building/Renovation%2013.webp?updatedAt=1750336254762',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Renovation%2017.webp?updatedAt=1750336257584',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Renovation%201.webp?updatedAt=1750336261959'
    ],
    description: 'Comprehensive roof renovation of a historic timber-framed property, including structural assessment of original oak beams, installation of modern insulation systems, and preservation of traditional construction methods. The project required careful integration of contemporary building standards with heritage conservation requirements.',
  },
  {
    id: 4,
    title: 'Illuminated Swimming Pool',
    category: 'Leisure & Recreation',
    location: 'Provence, Northern France',
    completionDate: 'August 2024',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Swimming%20Pool%201.webp?updatedAt=1750336257578',
    additionalImages: [
      'https://ik.imagekit.io/boostkit/Kent%20Building/Swimming%20Pool%202.webp?updatedAt=1750336257692',
      'https://ik.imagekit.io/boostkit/Kent%20Building/Swimming%20Pool%203.webp?updatedAt=1750336257692'
    ],
    description: 'Installation of a rectangular swimming pool with integrated LED lighting system and natural stone coping. The project included excavation, waterproofing, filtration systems, and evening lighting design to create a stunning focal point that complements the rural French landscape setting.',
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-10 md:mb-0">
            <h2 className="section-title">Recent <span className="text-primary-600">Projects</span></h2>
            <p className="section-subtitle">
              Explore our portfolio of completed projects showcasing our quality and expertise.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <Link key={`link-${project.id}`} to="/portfolio">
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-96">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-60"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="text-sm font-medium px-4 py-1.5 bg-primary-600 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3 text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mt-1">{project.location}</p>
                  <p className="text-gray-300 mt-1 text-sm">{project.completionDate}</p>
                </div>
                

              </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/portfolio" className="btn btn-primary px-7 py-3">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;