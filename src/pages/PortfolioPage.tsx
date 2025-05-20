import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Restoration', 'Landscaping'];

const projects = [
  {
    id: 1,
    title: 'Luxury Home Extension',
    category: 'Residential',
    location: 'Canterbury, Kent',
    completionDate: 'March 2025',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'A stunning two-story extension to a period property, adding a modern kitchen, family room, and master bedroom suite while respecting the original architectural details.',
  },
  {
    id: 2,
    title: 'Retail Space Conversion',
    category: 'Commercial',
    location: 'Maidstone, Kent',
    completionDate: 'December 2024',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Conversion of a former warehouse into a contemporary retail space with custom display units, energy-efficient lighting, and a welcoming customer experience area.',
  },
  {
    id: 3,
    title: 'Historic Cottage Renovation',
    category: 'Restoration',
    location: 'Tunbridge Wells, Kent',
    completionDate: 'October 2023',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Sympathetic restoration of a Grade II listed cottage, preserving original features while integrating modern amenities and resolving structural issues.',
  },
  {
    id: 4,
    title: 'Modern Garden Design',
    category: 'Landscaping',
    location: 'Sevenoaks, Kent',
    completionDate: 'May 2023',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Complete garden transformation featuring a contemporary outdoor kitchen, custom decking, water feature, and low-maintenance planting scheme.',
  },
  {
    id: 5,
    title: 'Office Building Refurbishment',
    category: 'Commercial',
    location: 'Ashford, Kent',
    completionDate: 'February 2023',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Comprehensive refurbishment of a three-story office building, including new HVAC systems, energy-efficient lighting, and modern workspace layouts.',
  },
  {
    id: 6,
    title: 'Contemporary New Build Home',
    category: 'Residential',
    location: 'Whitstable, Kent',
    completionDate: 'April 2023',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Design and construction of a modern 4-bedroom family home featuring open-plan living spaces, high-efficiency insulation, and sustainable technologies.',
  },
  {
    id: 7,
    title: 'Victorian Terrace Renovation',
    category: 'Renovation',
    location: 'Rochester, Kent',
    completionDate: 'December 2022',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Complete renovation of a Victorian terrace house, including side return extension, basement conversion, and restoration of original features.',
  },
  {
    id: 8,
    title: 'Restaurant Kitchen Refit',
    category: 'Commercial',
    location: 'Folkestone, Kent',
    completionDate: 'June 2023',
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    beforeImage: 'https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066',
    description: 'Design and installation of a commercial kitchen for a busy restaurant, including custom stainless steel units, ventilation systems, and regulatory compliance.',
  },
];

const PortfolioBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white pt-48 pb-28 relative">
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Oast_Template.webp?updatedAt=1747752556066')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
          Our <span className="text-primary-300">Portfolio</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Explore our showcase of completed projects demonstrating our quality craftsmanship and attention to detail.
        </p>
      </div>
    </section>
  );
};

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    // Update document title
    document.title = 'Portfolio | Kent Building & Construction';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our portfolio of completed building projects across Kent. See before and after transformations of period restorations, home renovations, extensions, and commercial refurbishments.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PortfolioBanner />

      <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="text-gray-500 hover:text-primary-600" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-700 font-medium" itemProp="name">Portfolio</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative aspect-[4/3]">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-90"></div>

                  {hoveredProject === project.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                        Before
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <div className="flex items-center mr-4">
                      <MapPin size={14} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                    View Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">
                We don't have any {activeCategory} projects to show at the moment. Please check back later or select another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 md:p-8">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {projects.filter(p => p.id === selectedProject).map(project => (
              <div key={project.id} className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="relative h-64 md:h-80">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-primary-600 rounded-full text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
                    <div className="flex items-center mr-6 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Before & After</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">Before</p>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={project.beforeImage}
                          alt={`Before renovation - ${project.title} by Kent Building & Construction in ${project.location}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">After</p>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={`After completion - ${project.title} by Kent Building & Construction in ${project.location}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Link
                      to="/contact"
                      className="btn btn-primary"
                      onClick={() => setSelectedProject(null)}
                    >
                      Enquire About a Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;