import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IndianRupee, ChevronDown, Menu, X, Sun, Moon, Home as HomeIcon, Building2, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`shadow-lg backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900/95 border-b border-gray-700' 
        : 'bg-white/95 border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Modern Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-emerald-500/25 transform group-hover:scale-105 transition-all duration-300">
              <IndianRupee className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className={`text-xl font-black transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>ApplyMyLoans</span>
              <span className="text-emerald-600 text-xl font-black">.com</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-colors hover:text-emerald-600 relative group ${
                isActive('/') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
              )}
            </Link>

            {/* Modern Loans Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`font-semibold transition-colors hover:text-emerald-600 relative group ${
                    location.pathname.includes('loan') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Loans
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  {location.pathname.includes('loan') && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className={`w-56 border-0 shadow-xl rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg m-1">
                  <Link to="/home-loan" className="cursor-pointer py-3">
                    <HomeIcon className="mr-3 h-4 w-4 text-emerald-600" />
                    Home Loan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg m-1">
                  <Link to="/business-loan" className="cursor-pointer py-3">
                    <Building2 className="mr-3 h-4 w-4 text-emerald-600" />
                    Business Loan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg m-1">
                  <Link to="/personal-loan" className="cursor-pointer py-3">
                    <User className="mr-3 h-4 w-4 text-emerald-600" />
                    Personal Loan
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/insurance"
              className={`font-semibold transition-colors hover:text-emerald-600 relative ${
                isActive('/insurance') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Insurance
              {isActive('/insurance') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/about"
              className={`font-semibold transition-colors hover:text-emerald-600 relative ${
                isActive('/about') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              About Us
              {isActive('/about') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/contact"
              className={`font-semibold transition-colors hover:text-emerald-600 relative ${
                isActive('/contact') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Contact Us
              {isActive('/contact') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
              )}
            </Link>

            {/* Modern Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-200 shadow-lg hover:shadow-xl' 
                  : 'hover:bg-gray-100 text-gray-700 shadow-md hover:shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </Button>

            <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/home-loan">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </Button>

            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Modern Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-t transition-colors ${
            isDark ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className={`block font-semibold hover:text-emerald-600 transition-colors py-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2 ml-4">
                <Link
                  to="/home-loan"
                  className={`block font-medium hover:text-emerald-600 transition-colors py-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home Loan
                </Link>
                <Link
                  to="/business-loan"
                  className={`block font-medium hover:text-emerald-600 transition-colors py-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Business Loan
                </Link>
                <Link
                  to="/personal-loan"
                  className={`block font-medium hover:text-emerald-600 transition-colors py-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Personal Loan
                </Link>
              </div>
              <Link
                to="/insurance"
                className={`block font-semibold hover:text-emerald-600 transition-colors py-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Insurance
              </Link>
              <Link
                to="/about"
                className={`block font-semibold hover:text-emerald-600 transition-colors py-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`block font-semibold hover:text-emerald-600 transition-colors py-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white w-full rounded-full font-bold mt-4">
                <Link to="/home-loan" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;