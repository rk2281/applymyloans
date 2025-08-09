import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Home as HomeIcon, Building2, User, Shield, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const { isDark } = useTheme();

  const loanTypes = [
    {
      icon: <HomeIcon className="h-8 w-8 text-emerald-600" />,
      title: "Home Loans",
      description: "Get the best home loan deals for your dream house",
      link: "/home-loan",
      features: ["Low Interest Rates", "Quick Approval", "Flexible Tenure"]
    },
    {
      icon: <Building2 className="h-8 w-8 text-emerald-600" />,
      title: "Business Loans",
      description: "Fuel your business growth with our business loan solutions",
      link: "/business-loan",
      features: ["Working Capital", "Equipment Finance", "Expansion Loans"]
    },
    {
      icon: <User className="h-8 w-8 text-emerald-600" />,
      title: "Personal Loans",
      description: "Meet your personal financial needs instantly",
      link: "/personal-loan",
      features: ["Instant Approval", "No Collateral", "Competitive Rates"]
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Insurance",
      description: "Protect your future with comprehensive insurance plans",
      link: "/insurance",
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
      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-emerald-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-blue-900'
            }`}>
              Your Trusted
              <span className="text-emerald-600"> Loan Partner</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get the best loan deals from 40+ banks and NBFCs. We simplify the loan process 
              and find you the most suitable products with the lowest interest rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                <Link to="/home-loan">Apply for Loan</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className={`px-8 py-3 text-lg transition-colors ${
                isDark 
                  ? 'border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
              }`}>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-blue-900'
            }`}>Why Choose ApplyMyLoans.com?</h2>
            <p className={`text-lg transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>One stop solution for all your loan needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className={`font-medium transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-blue-900'
            }`}>Our Loan Solutions</h2>
            <p className={`text-lg transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Choose from our comprehensive range of loan products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'
              }`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{loan.icon}</div>
                  <CardTitle className={isDark ? 'text-white' : 'text-blue-900'}>{loan.title}</CardTitle>
                  <CardDescription className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center text-sm transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full text-white transition-colors ${
                    isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-900 hover:bg-blue-800'
                  }`}>
                    <Link to={loan.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your Loan Approved?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who got their loans approved through us
          </p>
          <div className="flex items-center justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-blue-100 ml-2">4.9/5 Customer Rating</span>
          </div>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
            <Link to="/home-loan">Start Your Application</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;