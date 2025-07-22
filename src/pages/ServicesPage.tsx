import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Landmark, Trees as Tree, Wrench, Shield, ThumbsUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'extensions',
    title: 'Extensions',
    tagline: 'Seamlessly expand your living or working space',
    description: 'Expand your living or working space seamlessly with our bespoke Extensions. We manage the entire process, from design and planning to construction, ensuring a beautiful and functional addition to your property.',
    features: [
      'Bespoke extension design',
      'Planning permission and project management',
      'Single and multi-storey extensions',
      'Structural engineering solutions',
      'Seamless integration with existing property',
      'Energy-efficient construction methods',
    ],
    icon: Building,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Extensions/Extensions-3.jpg?updatedAt=1751885526967',
  },
  {
    id: 'restoration-refurbishment',
    title: 'Restoration and Refurbishments',
    tagline: 'Breathe new life into your property',
    description: 'Our Restoration & Refurbishments services are designed to breathe new life into your property. We handle complete transformations, combining quality craftsmanship with innovative solutions to modernise and enhance your space.',
    features: [
      'Complete interior and exterior renovations',
      'Modernisation and layout reconfiguration',
      'High-quality finishes throughout',
      'Kitchen and bathroom remodelling',
      'Energy efficiency improvements',
      'Interior design services',
    ],
    icon: Home,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-6.jpg?updatedAt=1751887634085',
  },
  {
    id: 'new-builds',
    title: 'New Builds',
    tagline: 'Bringing your vision to life from the ground up',
    description: 'We bring your vision for a New Build to life, from the initial concept to final completion. Our team creates custom, energy-efficient homes and developments, focusing on innovative design and quality craftsmanship.',
    features: [
      'Custom homes and developments',
      'Design and planning services',
      'Modern, energy-efficient construction',
      'Full project management',
      'High-quality materials and finishes',
      'Sustainable building practices',
    ],
    icon: Home,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/HP.jpg?updatedAt=1751885849914',
  },
  {
    id: 'heritage-listed',
    title: 'Heritage and Listed Buildings',
    tagline: 'Preserving character and history with expert care',
    description: 'Our services for Heritage and Listed Buildings focus on preserving their unique character and history. We provide expert care in every restoration and refurbishment project, adhering to the highest standards for these special properties.',
    features: [
      'Sensitive restoration of listed and period properties',
      'Heritage conservation expertise',
      'Traditional craftsmanship and materials',
      'Listed building consent management',
      'Structural repairs and stabilisation',
      'Sympathetic modernisation',
    ],
    icon: Landmark,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Heritage%20and%20Listed/Heritage-6.jpg?updatedAt=1751887981031',
  },
  {
    id: 'landscaping-and-patios',
    title: 'Landscaping and Patios',
    tagline: 'Transform your outdoor space with professional design',
    description: 'Transform your outdoor areas with our Landscaping and Patios services. We create beautiful, functional, and durable features, from patios and driveways to garden structures, transforming your exterior spaces.',
    features: [
      'Patios, driveways, and paths',
      'Retaining walls and garden structures',
      'Drainage and groundworks',
      'Planting schemes and garden design',
    ],
    icon: Tree,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Landscaping%20and%20Patios/Landscaping-5.jpg?updatedAt=1751886599370',
  },
  {
    id: 'structural-repairs',
    title: 'Structural Repairs',
    tagline: 'Safeguarding the integrity of your building',
    description: 'Our Structural Repairs service focuses on safeguarding the integrity of your building. We diagnose and resolve structural issues, providing expert solutions to ensure the long-term stability and safety of your property.',
    features: [
      'Diagnosis and repair of structural issues',
      'Foundation and subsidence solutions',
      'Structural stabilisation for heritage and modern buildings',
      'Load-bearing wall alterations',
      'Crack stitching and wall tie replacement',
      'Timber repairs and damp proofing',
    ],
    icon: Wrench,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Structural%20Repairs/Structural-9.jpg?updatedAt=1751888401747',
  },
  {
    id: 'kitchens-bathrooms',
    title: 'Kitchens and Bathrooms',
    tagline: 'Beautiful, functional spaces tailored to you',
    description: 'Create your dream kitchen or bathroom with our bespoke services. We combine style, functionality, and quality craftsmanship to design and install beautiful spaces tailored to your specific needs.',
    features: [
      'Kitchen design and installation',
      'Bathroom remodelling and upgrades',
      'Bespoke joinery and fittings',
      'High-quality finishes',
      'Plumbing and electrical work',
      'Heating and lighting solutions',
    ],
    icon: Home,
    image: 'https://ik.imagekit.io/boostkit/Kent%20Building/Bathroom%204.webp?updatedAt=1750336257595',
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
    description: 'We prioritise completing projects on schedule without compromising quality.',
    icon: Clock,
  },
];

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white pt-48 pb-28 relative">
              <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Extensions/Extensions-3.jpg?updatedAt=1751885526967')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/60"></div>
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
          Our Building <span className="text-primary-300">Services</span>
        </h1>
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          Our expertise covers a wide range of building services, with a particular focus on restoration, refurbishment, and structural works. Whether you own a listed property, need a modern extension, or want to transform your home, we deliver exceptional results with care, skill, and attention to detail. Call 07766 141811 or email spencer@kentbuildingandconstruction.co.uk
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
      metaDescription.setAttribute('content', 'Specialist building services by Kent Building & Construction including period property restoration, home renovations, extensions, new builds, landscaping, and structural repairs. Serving Kent and Sussex. FMB member since 2012. Call 07766 141811.');
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
        "name": "What areas do you serve in the South East?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide our building services throughout the South East, centered around Wadhurst with a 30-mile service radius. This includes Wadhurst, Tunbridge Wells, Tonbridge, Sevenoaks, Goudhurst, Crowborough, Paddock Wood, Uckfield, Tenterden, Cranbrook, Hawkhurst, Heathfield, East Grinstead, Haywards Heath, Westerham and their surrounding areas."
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
          "text": "Yes, we have over 20 years of experience in restoring period and listed buildings. Our team specialises in preserving historical features while incorporating modern comforts, using traditional materials and techniques."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical home extension take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for extensions varies depending on size and complexity. A typical single storey extension may only take 6 weeks whilst larger more complex projects can take 3+ months. We provide detailed timelines during the consultation process so you may be confident in the time your project will take before committing to the build."
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
                    <Link to={`/services/${service.id}`} className="block group">
                    <div className="relative">
                        <div className="rounded-lg overflow-hidden shadow-custom-lg aspect-video group-hover:shadow-custom-xl transition-shadow duration-300">
                        <img
                          src={service.image}
                          alt={`${service.title} - Professional building services by Kent Building & Construction`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                        <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <service.icon size={32} className="text-primary-600" />
                      </div>
                    </div>
                    </Link>
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

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/services/${service.id}`} className="btn btn-primary">
                        Learn More
                      </Link>
                      <Link to="/contact" className="btn btn-secondary">
                      Enquire About This Service
                    </Link>
                    </div>
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

          <div className="mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-8">
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