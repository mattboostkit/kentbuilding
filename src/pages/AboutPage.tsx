import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  ThumbsUp, 
  Target, 
  Heart,
  BadgeCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white py-28 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7108116/pexels-photo-7108116.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          About <span className="text-primary-300">Kent Construction</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Building Excellence in Kent and beyond since 2008. Learn about our team, values, and commitment to quality.
        </p>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: 'James Kent',
    role: 'Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over 25 years in construction, James founded Kent Construction with a vision to deliver exceptional quality and service across Kent.',
  },
  {
    name: 'Sarah Williams',
    role: 'Operations Director',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sarah oversees all project operations, ensuring every build is delivered to the highest standards, on time and within budget.',
  },
  {
    name: 'Robert Thompson',
    role: 'Technical Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With expertise in structural engineering, Robert ensures all technical aspects of our projects are implemented correctly and safely.',
  },
  {
    name: 'Emma Clark',
    role: 'Design Consultant',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Emma works with clients to translate their vision into practical designs, combining aesthetics with functionality.',
  },
];

const values = [
  {
    title: 'Quality',
    description: 'We never compromise on quality, using the best materials and practices for lasting results.',
    icon: ThumbsUp,
  },
  {
    title: 'Integrity',
    description: 'We work with complete transparency and honesty in every aspect of our business.',
    icon: Target,
  },
  {
    title: 'Customer Focus',
    description: 'Our clients are at the center of everything we do, with their satisfaction our top priority.',
    icon: Heart,
  },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'About Us | Kent Building & Construction';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutBanner />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">Our <span className="text-primary-600">Story</span></h2>
              <p className="section-subtitle">
                Building excellence in Kent for over 15 years
              </p>
              
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Kent Building & Construction was founded in 2008 by James Kent, a master builder with over 25 years of experience in the construction industry. What began as a small family business has grown into a respected construction company serving clients across Kent and the South East.
                </p>
                <p>
                  Our journey has been driven by a simple philosophy: deliver exceptional quality, maintain absolute integrity, and always put the customer first. This approach has earned us a reputation for excellence and helped us build lasting relationships with our clients, many of whom return to us for multiple projects.
                </p>
                <p>
                  Today, we employ a team of skilled professionals across various construction disciplines, allowing us to offer a comprehensive range of services from new builds and renovations to specialized restoration work and commercial developments.
                </p>
                <p>
                  Despite our growth, we've maintained the personal touch and attention to detail that set us apart. Every project, regardless of size, receives the same level of care and commitment to quality that has been our hallmark since day one.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+ Years</p>
                    <p className="text-gray-600">In Business</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Users className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">25+ Team</p>
                    <p className="text-gray-600">Skilled Professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Award className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+ Awards</p>
                    <p className="text-gray-600">For Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4]">
                  <img 
                    src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Team at work" 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="aspect-[3/4] mt-8">
                  <img 
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Construction work" 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center">
                  <BadgeCheck size={48} className="text-primary-600 mr-4" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">Federation of Master Builders</p>
                    <p className="text-gray-600">Member #71497</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our <span className="text-primary-600">Values</span></h2>
            <p className="section-subtitle">
              The core principles that guide our work and relationships with our clients, partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-8 rounded-lg shadow-custom"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Meet Our <span className="text-primary-600">Team</span></h2>
            <p className="section-subtitle">
              Our experienced professionals are dedicated to delivering exceptional quality and service on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-lg shadow-custom overflow-hidden"
              >
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title text-white">Ready to Start Your <span className="text-primary-200">Project?</span></h2>
            <p className="section-subtitle text-primary-100">
              Contact us today to discuss your construction needs and discover how we can help bring your vision to life.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;