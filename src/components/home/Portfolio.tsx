import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Landscaping'];

const projects = [
  {
    id: 1,
    title: 'Luxury Home Extension',
    category: 'Residential',
    location: 'Canterbury, Kent',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
  },
  {
    id: 2,
    title: 'Retail Space Conversion',
    category: 'Commercial',
    location: 'Maidstone, Kent',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
  },
  {
    id: 3,
    title: 'Historic Cottage Renovation',
    category: 'Renovation',
    location: 'Tunbridge Wells, Kent',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-96">
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                    hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${project.beforeImage})` }}
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
                </div>
                

              </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/portfolio" className="btn btn-primary px-7 py-3">
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;