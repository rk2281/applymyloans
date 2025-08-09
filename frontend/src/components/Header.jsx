import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IndianRupee, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
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
    <header className={`shadow-lg border-b-2 border-emerald-500 sticky top-0 z-50 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-blue-900 to-emerald-600 p-2 rounded-lg">
              <IndianRupee className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-blue-900'
            }`}>ApplyMyLoans.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive('/') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Loans Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname.includes('loan') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Loans
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className={`w-48 ${isDark ? 'bg-gray-800 border-gray-700' : ''}`}>
                <DropdownMenuItem asChild>
                  <Link to="/home-loan" className="cursor-pointer">
                    Home Loan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/business-loan" className="cursor-pointer">
                    Business Loan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/personal-loan" className="cursor-pointer">
                    Personal Loan
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/insurance"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive('/insurance') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Insurance
            </Link>

            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive('/about') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-emerald-600 ${
                isActive('/contact') ? 'text-emerald-600' : isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Contact Us
            </Link>

            {/* Theme Toggle */}
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
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link to="/home-loan">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
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
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium hover:text-emerald-600 transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/home-loan"
                className={`font-medium hover:text-emerald-600 transition-colors ml-4 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home Loan
              </Link>
              <Link
                to="/business-loan"
                className={`font-medium hover:text-emerald-600 transition-colors ml-4 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Loan
              </Link>
              <Link
                to="/personal-loan"
                className={`font-medium hover:text-emerald-600 transition-colors ml-4 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Personal Loan
              </Link>
              <Link
                to="/insurance"
                className={`font-medium hover:text-emerald-600 transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Insurance
              </Link>
              <Link
                to="/about"
                className={`font-medium hover:text-emerald-600 transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`font-medium hover:text-emerald-600 transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
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