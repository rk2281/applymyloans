import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const { isDark } = useTheme();

  const achievements = [
    { number: "40+", label: "Banks & NBFCs", color: "from-blue-500 to-blue-600" },
    { number: "15+", label: "Years Experience", color: "from-emerald-500 to-emerald-600" }, 
    { number: "10K+", label: "Happy Customers", color: "from-orange-500 to-orange-600" },
    { number: "₹500Cr+", label: "Loans Disbursed", color: "from-purple-500 to-purple-600" },
    { number: "99%", label: "Customer Satisfaction", color: "from-pink-500 to-pink-600" },
    { number: "24/7", label: "Customer Support", color: "from-indigo-500 to-indigo-600" }
  ];

  const services = [
    "Personalized loan consultation",
    "Document verification assistance", 
    "Rate comparison across lenders",
    "Application tracking support",
    "Post-disbursement services",
    "Insurance advisory"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Modern Hero Section */}
      <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500 rounded-full opacity-10 float-animation"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500 rounded-lg rotate-45 opacity-10"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-500 rounded-full opacity-10 pulse-modern"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className={`text-4xl md:text-6xl font-black mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              About 
              <span className="text-emerald-600"> ApplyMyLoans.com</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Your trusted partner in navigating the complex world of financial services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - Modern Design */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`mb-16 shadow-2xl border-0 overflow-hidden transition-all duration-500 ${
            isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
          }`}>
            <CardHeader className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-8">
              <CardTitle className="text-3xl font-black text-center">About Us</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className={`text-lg leading-relaxed text-center transition-colors ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                ApplyMyLoans.com is a market place for personalized financial services, we currently have 
                over 40+ Banks/NBFC's Listed with us for Home Loans, Personal Loans & Business loans. 
                ApplyMyLoans.com created by a team of passionate financial services and technology professionals 
                to offer exceptional services to the customers.
              </p>
            </CardContent>
          </Card>

          {/* Team Section - Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Team Leader Profile */}
            <Card className={`shadow-2xl border-0 overflow-hidden transition-all duration-500 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
            }`}>
              <CardHeader className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8">
                <CardTitle className="text-2xl font-black text-center">Our Team Leader</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-8">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_3639d79f-54a7-4c0b-a43e-c6d7470cf257/artifacts/gmrjjpdo_masadhji%20pic.jpeg"
                      alt="Rajender Mehta - Founder & CEO"
                      className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-emerald-500 shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className={`text-2xl font-black mb-2 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Rajender Mehta</h3>
                <p className="text-emerald-600 font-bold mb-6 text-lg">Founder & CEO</p>
                <p className={`leading-relaxed transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Over 15 years in sales, Distribution & Strategy at Deutsche Postbank, Indiabulls & 
                  Indusind bank. Expert in personal financial products with deep knowledge of banking 
                  processes, TAT, services and commercials.
                </p>
              </CardContent>
            </Card>

            {/* Mission & Approach */}
            <div className="space-y-8">
              <Card className={`shadow-xl border-0 transition-all duration-500 hover:scale-105 ${
                isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
              }`}>
                <CardHeader className="p-6">
                  <CardTitle className={`text-xl font-bold flex items-center transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className={`leading-relaxed transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    We have in-depth knowledge of Personal Financial products offered by Banks and NBFC's, 
                    their process, TAT, services and commercials (Rate & Fee etc.) We analyze various available 
                    products and then offer the best suitable product to our customers with lowest possible 
                    interest rate or cost.
                  </p>
                </CardContent>
              </Card>

              <Card className={`shadow-xl border-0 transition-all duration-500 hover:scale-105 ${
                isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
              }`}>
                <CardHeader className="p-6">
                  <CardTitle className={`text-xl font-bold flex items-center transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className={`leading-relaxed transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    ApplyMyLoans provide customized services to the loan seekers with online-offline approach 
                    and came up with ONE STOP SOLUTION for applying loans. We bridge the gap between borrowers 
                    and lenders, making the loan process transparent and efficient.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Modern Achievements Grid */}
          <div className="mb-16">
            <h2 className={`text-4xl font-black text-center mb-12 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-white font-black text-lg">
                      {achievement.number.includes('₹') ? '₹' : achievement.number.replace(/[₹+]/g, '')}
                    </span>
                  </div>
                  <p className={`font-bold text-sm transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <Card className={`shadow-2xl border-0 mb-16 transition-all duration-500 ${
            isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
          }`}>
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8">
              <CardTitle className="text-3xl font-black text-center">Our Services</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className={`flex items-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-emerald-900/20 hover:bg-emerald-900/30' : 'bg-emerald-50 hover:bg-emerald-100'
                  }`}>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className={`font-semibold transition-colors ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modern CTA Section */}
          <div className="text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 rounded-3xl"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 float-animation"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-lg rotate-45 opacity-15"></div>
            
            <div className="relative z-10 p-12 text-white">
              <h2 className="text-4xl font-black mb-4">Ready to Work with Us?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experienced team help you find the perfect loan solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300">
                  <Link to="/home-loan" className="flex items-center">
                    Apply for Loan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;