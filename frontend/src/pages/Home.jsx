import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Home as HomeIcon, Building2, User, Shield, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  const { isDark } = useTheme();

  const loanTypes = [
    {
      icon: <HomeIcon className="h-8 w-8 text-white" />,
      title: "Home Loans",
      description: "Get the best home loan deals for your dream house with competitive rates",
      link: "/home-loan",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      features: ["Low Interest Rates", "Quick Approval", "Flexible Tenure"]
    },
    {
      icon: <Building2 className="h-8 w-8 text-white" />,
      title: "Business Loans", 
      description: "Fuel your business growth with our comprehensive business loan solutions",
      link: "/business-loan",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      features: ["Working Capital", "Equipment Finance", "Expansion Loans"]
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Personal Loans",
      description: "Meet your personal financial needs instantly with minimal documentation",
      link: "/personal-loan", 
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      features: ["Instant Approval", "No Collateral", "Competitive Rates"]
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Insurance",
      description: "Protect your future with comprehensive insurance plans and coverage",
      link: "/insurance",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      features: ["Life Insurance", "Health Insurance", "Property Insurance"]
    }
  ];

  const features = [
    "40+ Banks & NBFCs Network",
    "Lowest Interest Rates", 
    "Quick Processing",
    "Expert Consultation",
    "End-to-End Support",
    "Zero Hidden Charges"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Modern Hero Section - Split Screen Layout */}
      <section className={`min-h-screen flex items-center relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 right-60 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-80 w-20 h-20 bg-purple-500 rounded-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className={`text-5xl lg:text-7xl font-black leading-tight transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  ApplyMyLoans.com
                  <span className="block text-emerald-600 text-4xl lg:text-6xl mt-2">
                    Loan Solutions
                  </span>
                </h1>
                <p className={`text-xl lg:text-2xl leading-relaxed max-w-lg transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Get the best loan deals from 40+ banks and NBFCs. We simplify the loan process 
                  and find you the most suitable products with the lowest interest rates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/home-loan" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold transition-colors ${
                      isDark ? 'text-gray-200' : 'text-gray-900'
                    }`}>Call us (123) 456-789</p>
                    <p className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>For any question or concern</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image with Geometric Elements */}
            <div className="relative">
              {/* Large Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full transform rotate-12 scale-110 opacity-90"></div>
              
              {/* Decorative Shapes */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 rounded-lg rotate-45 opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute top-20 -left-10 w-12 h-12 bg-orange-400 rounded-full opacity-70"></div>
              
              {/* Hero Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTQ2OTg4NTF8MA&ixlib=rb-4.1.0&q=85"
                  alt="Professional Loan Consultant"
                  className="w-full h-96 lg:h-[500px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Section with Circular Icons */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {loanTypes.slice(0, 3).map((loan, index) => (
              <div key={index} className="text-center group">
                {/* Large Circular Icon */}
                <div className={`w-24 h-24 mx-auto mb-6 ${loan.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  {loan.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {loan.title}
                </h3>
                <p className={`text-lg leading-relaxed transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {loan.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-black mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose 
              <span className="text-emerald-600"> ApplyMyLoans.com?</span>
            </h2>
            <p className={`text-xl transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>One stop solution for all your loan needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className={`font-semibold text-sm transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products - Modern Card Design */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-black mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Loan Solutions
            </h2>
            <p className={`text-xl transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Choose from our comprehensive range of loan products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isDark ? 'bg-gray-700' : 'bg-white'
              }`}>
                {/* Card Header with Icon */}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 ${loan.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    {loan.icon}
                  </div>
                  <CardTitle className={`text-xl font-bold transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {loan.title}
                  </CardTitle>
                  <CardDescription className={`text-sm leading-relaxed transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center text-sm transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full font-semibold">
                    <Link to={loan.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with Geometric Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-lg rotate-45 opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Get Your Loan Approved?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who got their loans approved through us
          </p>
          
          <div className="flex items-center justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
            <span className="text-blue-100 ml-3 text-lg font-semibold">4.9/5 Customer Rating</span>
          </div>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/home-loan" className="flex items-center">
              Start Your Application
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 border-t transition-colors duration-300 ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`text-4xl font-black mb-2 transition-colors ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>40+</div>
              <p className={`text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Banks & NBFCs</p>
            </div>
            <div>
              <div className={`text-4xl font-black mb-2 transition-colors ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>10K+</div>
              <p className={`text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Happy Customers</p>
            </div>
            <div>
              <div className={`text-4xl font-black mb-2 transition-colors ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>₹500Cr+</div>
              <p className={`text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Loans Disbursed</p>
            </div>
            <div>
              <div className={`text-4xl font-black mb-2 transition-colors ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>24/7</div>
              <p className={`text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;