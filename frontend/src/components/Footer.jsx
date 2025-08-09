import React from 'react';
import { Link } from 'react-router-dom';
import { IndianRupee, Instagram, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
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
            <p className="text-blue-100 mb-4 max-w-md">
              Your trusted partner for all loan needs. We connect you with the best banks and NBFCs 
              to get you the most suitable loan products at the lowest interest rates.
            </p>
            <p className="text-blue-200 text-sm">
              © 2019 Rajvin Management Consultants Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link to="/home-loan" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                Home Loan
              </Link>
              <Link to="/business-loan" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                Business Loan
              </Link>
              <Link to="/personal-loan" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                Personal Loan
              </Link>
              <Link to="/insurance" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                Insurance
              </Link>
              <Link to="/about" className="block text-blue-100 hover:text-emerald-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-emerald-400 transition-colors">
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
                className="text-blue-100 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@applymyloans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            Designed to help you find the best loan solutions across 40+ Banks and NBFCs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;