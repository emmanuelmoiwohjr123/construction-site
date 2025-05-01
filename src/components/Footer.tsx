import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center mb-6">
              <HardHat className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">
                BuildMaster
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              BuildMaster Construction delivers exceptional building services with a focus on quality, 
              safety, and client satisfaction. From concept to completion, we build excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded-full transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded-full transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded-full transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded-full transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-yellow-500 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Residential Construction',
                'Commercial Buildings',
                'Industrial Facilities',
                'Infrastructure Projects',
                'Project Management',
                'Architecture & Design',
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-yellow-500 transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Subscribe
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-500 -mb-2"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news, updates, and construction insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-4 py-2 rounded-r-md transition duration-300"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BuildMaster Construction. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-500 transition duration-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-500 transition duration-300">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-500 transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-3 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;