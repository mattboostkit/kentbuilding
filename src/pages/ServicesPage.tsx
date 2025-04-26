import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Landmark, Store, Trees as Tree, Wrench, Shield, ThumbsUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'period-listed',
    title: 'Restoring Period and Listed Buildings',
    tagline: 'Preserving heritage with expert care',
    description: 'We specialise in the sensitive restoration of listed and period properties, carefully preserving historical features whilst incorporating modern comforts. Our experienced craftsmen understand the unique requirements of heritage buildings and work with traditional materials and techniques.',
    features: [
      'Heritage conservation expertise',
      'Traditional craftsmanship',
      'Period-appropriate materials',
      'Listed building consent management',
      'Structural repair and stabilisation',
      'Sympathetic modernisation',
    ],
    icon: Landmark,
    image: 'https://images.pexels.com/photos/2775518/pexels-photo-2775518.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'renovation',
    title: 'Home Renovation & Refurbishment',
    tagline: 'Transform your existing property',
    description: 'Our comprehensive renovation and refurbishment services breathe new life into your property. Whether you\'re looking to modernise an outdated space, reconfigure your layout for better functionality, or add value to your property, our skilled team delivers exceptional results.',
    features: [
      'Complete interior renovations',
      'Kitchen and bathroom remodelling',
      'Structural alterations',
      'Electrical and plumbing upgrades',
      'Energy efficiency improvements',
      'Interior design services',
    ],
    icon: Home,
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'extensions',
    title: 'Extensions',
    tagline: 'Expand your living space beautifully',
    description: 'Our extension services provide additional living space that seamlessly integrates with your existing property. From single-storey kitchen extensions to multi-storey additions, we handle the entire process from planning permission to the finishing touches, ensuring a stress-free experience.',
    features: [
      'Bespoke extension design',
      'Planning permission assistance',
      'Structural engineering solutions',
      'Seamless integration with existing building',
      'Energy-efficient construction methods',
      'Full project management',
    ],
    icon: Building,
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'commercial',
    title: 'Office and Shop Refurbishment',
    tagline: 'Functional spaces for business success',
    description: 'Our commercial refurbishment service transforms tired workspaces into functional, branded environments that enhance productivity and impress clients. From offices and retail units to restaurants and hospitality venues, we create tailored spaces that reflect your brand and meet your operational needs.',
    features: [
      'Office and retail space design',
      'Bespoke joinery and fixtures',
      'HVAC and electrical installations',
      'Flooring and ceiling systems',
      'Partitioning and acoustic solutions',
      'Minimal business disruption',
    ],
    icon: Store,
    image: 'https://images.pexels.com/photos/3955054/pexels-photo-3955054.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'landscaping',
    title: 'Landscaping and Ground Works',
    tagline: 'Beautiful exteriors with solid foundations',
    description: 'Our landscaping and groundwork services provide comprehensive solutions for outdoor spaces. From essential groundwork and drainage to beautiful patios and garden features, we create outdoor environments that are both practical and visually stunning, enhancing your property\'s appeal and value.',
    features: [
      'Drainage solutions and land grading',
      'Patios and decking installation',
      'Driveway and path construction',
      'Retaining walls and structures',
      'Water features and irrigation',
      'Planting schemes and lawn laying',
    ],
    icon: Tree,
    image: 'https://images.pexels.com/photos/2042509/pexels-photo-2042509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'oast-house',
    title: 'Oast House Restoration and Refurbishments',
    tagline: 'Preserving Kent\'s iconic buildings',
    description: 'We offer specialised restoration and refurbishment services for traditional Kentish oast houses. Our team understands the unique architectural features and historical significance of these iconic structures, ensuring they are preserved whilst being adapted for modern living.',
    features: [
      'Cowl and kiln restoration',
      'Traditional materials and techniques',
      'Structural repairs and stabilisation',
      'Authentic period detailing',
      'Sympathetic modern adaptations',
      'Conservation-led approach',
    ],
    icon: Landmark,
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'oak-framed',
    title: 'Oak Framed Buildings and Structures',
    tagline: 'Timeless craftsmanship for modern living',
    description: 'Our oak framed buildings combine traditional craftsmanship with modern building techniques. From garden rooms and garages to complete homes, our skilled carpenters create beautiful, durable structures that showcase the natural beauty and strength of oak whilst meeting contemporary building standards.',
    features: [
      'Bespoke design and planning',
      'Traditional joinery techniques',
      'Sustainable sourced timber',
      'Modern insulation solutions',
      'Complementary glazing options',
      'Full construction service',
    ],
    icon: Wrench,
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const benefits = [
  {
    title: 'Quality Guarantee',
    description: 'All our work is backed by our quality guarantee, ensuring lasting results.',
    icon: ThumbsUp,
  },
  {
    title: 'Fully Insured',
    description: 'We carry comprehensive insurance coverage for your complete peace of mind.',
    icon: Shield,
  },
  {
    title: 'Timely Delivery',
    description: 'We prioritize completing projects on schedule without compromising quality.',
    icon: Clock,
  },
];

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white pt-48 pb-28 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Our Building <span className="text-primary-300">Services</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Comprehensive building solutions delivered with expertise, quality materials, and exceptional craftsmanship throughout Kent.
        </p>
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Our Services | Kent Building & Construction';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialist building services by Kent Building & Construction including period property restoration, home renovations, extensions, commercial refurbishment, and oak framed buildings.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // FAQ structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve in Kent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide our building services throughout Kent and surrounding areas, including Canterbury, Maidstone, Tunbridge Wells, Sevenoaks, Ashford, Folkestone, Rochester, Whitstable, Faversham, Dover, Deal, and Tonbridge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free no-obligation consultations for all our building services. We'll discuss your project requirements and provide expert advice before you make any decisions."
        }
      },
      {
        "@type": "Question",
        "name": "Are you experienced in period property restoration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have over 20 years of experience in restoring period and listed buildings. Our team specializes in preserving historical features while incorporating modern comforts, using traditional materials and techniques."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical home extension take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for extensions varies depending on size and complexity. A typical single-storey extension might take 8-12 weeks, while larger or more complex projects can take 3-6 months. We provide detailed timelines during the consultation process."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Kent Building & Construction is fully insured with comprehensive public and employer liability insurance for your complete peace of mind."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <ServiceBanner />

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
              <span className="text-gray-700 font-medium" itemProp="name">Services</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-16" id="building-services" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-heading" className="section-title">Specialist <span className="text-primary-600">Building Services</span></h2>
            <p className="section-subtitle">
              From period restorations to oak framed structures, our full range of services is designed to meet all your building needs with the highest standards of quality and craftsmanship.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className="scroll-mt-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden shadow-custom-lg aspect-video">
                        <img
                          src={service.image}
                          alt={`${service.title} - Professional building services by Kent Building & Construction`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md">
                        <service.icon size={32} className="text-primary-600" />
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                      {service.tagline}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn btn-primary">
                      Enquire About This Service
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="why-choose-us" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="why-choose-heading" className="section-title">Why Choose <span className="text-primary-600">Our Services</span></h2>
            <p className="section-subtitle">
              We're committed to delivering exceptional quality, transparent communication, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-custom text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={28} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch Today
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16" id="faqs" aria-labelledby="faq-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="faq-heading" className="section-title">Frequently Asked <span className="text-primary-600">Questions</span></h2>
            <p className="section-subtitle">
              Find answers to common questions about our building services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Have more questions? We're happy to help.</p>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;