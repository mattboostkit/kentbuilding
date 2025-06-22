import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Award,
  ThumbsUp,
  Target,
  Heart,
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white pt-48 pb-28 relative">
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Hero%20Image.webp?updatedAt=1750336571403')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
          About <span className="text-primary-300">Kent Building & Construction</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Building Excellence in Kent and beyond with over 20 years of experience. Learn about our team, values, and commitment to quality.
        </p>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: 'Spencer Ellis',
    role: 'Founder',
    image: 'https://cdn-icons-png.freepik.com/512/13326/13326333.png',
    bio: 'With over 20 years of experience, Spencer founded Kent Building & Construction with a vision to deliver exceptional quality and service across Kent.',
  },
  {
    name: 'John Smith',
    role: 'Operations Director',
    image: 'https://cdn-icons-png.freepik.com/512/13326/13326333.png',
    bio: 'John oversees all project operations, ensuring every build is delivered to the highest standards, on time and within budget.',
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

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Spencer Ellis and the Kent Building & Construction team. With over 20 years of experience delivering high-quality building projects across Kent and the South East.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutBanner />

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
              <span className="text-gray-700 font-medium" itemProp="name">About Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-16" id="about-story" aria-labelledby="about-story-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="about-story-heading" className="section-title">Our <span className="text-primary-600">Story</span></h2>
              <p className="section-subtitle">
                Building excellence in Kent for over 20 years
              </p>

              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  My name is Spencer Ellis and I am the Managing Director of Kent Building and Construction Ltd.
                </p>
                <p>
                  My passion for precision began when I left my childhood home of New Zealand and moved to Western Australia to work in the mining industry. The apprenticeship I undertook there still plays a part in the way I map out a build today and enables me to see the whole process through – always looking out for any potential pitfalls along the way.
                </p>
                <p>
                  After spending 5 years travelling to various African, Malaysian and Indonesian locations to build gold and mineral processing plants, I ended up here in the UK. It was then I decided to start up my own business and Kent Building and Construction was born. My limited company grew and grew as our reputation went from strength to strength, and we have now been trading for over 20 years.
                </p>
                <p>
                  We are based in the southeastern corner of England and tend to cover most of Kent and East Sussex. However, as we also have regular clients with portfolios of properties, we are no strangers to building in France, Belgium and beyond.
                </p>
                <p>
                  I am a member of the Federation of Master Builders and have been for 12 years. I also sit on the southern regional board of the FMB. This position enables me and my fellow board members to try and implement and improve the standards of the construction industry as a whole. We are working with the current government, and worked with their predecessors, on a scheme which means builders will need to be regulated in the same way electricians and plumbers are.
                </p>
                <p>
                  You can't buy your way into the FMB – only quality construction companies with verified, above-standard builds are invited.
                </p>
                <p>
                  High standards, accountability and professionalism are at the forefront of my business. It doesn't cost any more to do the job properly.
                </p>
                <p>
                  Finally, if you are a regular listener to BBC radio in the Kent or East Sussex area, you may have heard me talking to various radio hosts on anything building or construction related.
                </p>
                <p>
                  So with that, please have a look through our website and if you have a project, or need some help with your property or business premises, please feel free to contact me and I'll be happy to help.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">20+ Years</p>
                    <p className="text-gray-600">In Business</p>
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
                    src="https://cdn-icons-png.freepik.com/512/13326/13326333.png"
                    alt="Team at work"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="aspect-[3/4] mt-8">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/13326/13326333.png"
                    alt="Construction work"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center">
                  <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="Federation of Master Builders Logo" className="w-12 h-12 mr-4" />
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

      <section className="py-16 bg-gray-50" id="our-values" aria-labelledby="values-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="values-heading" className="section-title">Our <span className="text-primary-600">Values</span></h2>
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

      <section className="py-16" id="our-team" aria-labelledby="team-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="team-heading" className="section-title">Meet Our <span className="text-primary-600">Team</span></h2>
            <p className="section-subtitle">
              Our experienced professionals are dedicated to delivering exceptional quality and service on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Hero%20Image.webp?updatedAt=1750336571403')] bg-cover bg-center opacity-10"></div>
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