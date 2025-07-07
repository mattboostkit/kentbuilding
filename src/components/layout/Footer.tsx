import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const logoWhiteUrl = "https://ik.imagekit.io/boostkit/Kent%20Building/Kent%20Building%20&%20Construction_White-cropped.svg?updatedAt=1747751797490";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Company Info */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img 
                src={logoWhiteUrl} 
                alt="Kent Building & Construction Logo" 
                className="h-12" 
              />
            </Link>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Building Excellence across Kent since 2008. Quality craftsmanship and exceptional service for every project.
            </p>
            <div className="flex space-x-5 mt-8">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Get a Quote', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Extensions',
                'Restoration and Refurbishments',
                'New Builds',
                'Listed Buildings',
                'Landscaping and Patios',
                'Structural Repairs',
                'Kitchens and Bathrooms',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services#${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-3" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex">
                <MapPin className="mr-4 text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  3rd Floor, 21 Perrymount Road, Haywards Heath, West Sussex RH16 3TP
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-4 text-primary-400 flex-shrink-0" size={20} />
                <a
                  href="tel:07766141811"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  07766 141 811
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-4 text-primary-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@kentbuildingconstruction.co.uk"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@kentbuildingconstruction.co.uk
                </a>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-6 btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-14 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="text-center flex flex-col items-center">
              <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="Federation of Master Builders Logo" className="h-10 mb-2" />
              <p className="text-sm text-gray-500 mb-1">Federation of Master Builders</p>
              <p className="text-sm text-gray-400">Registration No: 71497</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">VAT Registered</p>
              <p className="text-sm text-gray-400">Registration No: 994088076</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Registered in England</p>
              <p className="text-sm text-gray-400">Number: 13198720</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-10">
          <p>&copy; {currentYear} Kent Building & Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;