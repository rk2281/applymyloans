import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { IndianRupee, Instagram, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-200' : 'bg-blue-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ApplyMyLoans.com</span>
            </div>
            <p className={`mb-4 max-w-md transition-colors ${
              isDark ? 'text-gray-300' : 'text-blue-100'
            }`}>
              Your trusted partner for all loan needs. We connect you with the best banks and NBFCs 
              to get you the most suitable loan products at the lowest interest rates.
            </p>
            <p className={`text-sm transition-colors ${
              isDark ? 'text-gray-400' : 'text-blue-200'
            }`}>
              © 2019 Rajvin Management Consultants Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Home
              </Link>
              <Link to="/home-loan" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Home Loan
              </Link>
              <Link to="/business-loan" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Business Loan
              </Link>
              <Link to="/personal-loan" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Personal Loan
              </Link>
              <Link to="/insurance" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Insurance
              </Link>
              <Link to="/about" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                About Us
              </Link>
              <Link to="/contact" className={`block transition-colors hover:text-emerald-400 ${
                isDark ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-emerald-400 ${
                  isDark ? 'text-gray-300' : 'text-blue-100'
                }`}
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@applymyloans.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-emerald-400 ${
                  isDark ? 'text-gray-300' : 'text-blue-100'
                }`}
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-emerald-400 ${
                  isDark ? 'text-gray-300' : 'text-blue-100'
                }`}
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-emerald-400 ${
                  isDark ? 'text-gray-300' : 'text-blue-100'
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-8 text-center transition-colors ${
          isDark ? 'border-gray-700' : 'border-blue-800'
        }`}>
          <p className={`text-sm transition-colors ${
            isDark ? 'text-gray-400' : 'text-blue-200'
          }`}>
            Designed to help you find the best loan solutions across 40+ Banks and NBFCs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;