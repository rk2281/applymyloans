import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Award, Target, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const achievements = [
    "40+ Banks & NBFCs Partnership",
    "15+ Years Industry Experience", 
    "10,000+ Happy Customers",
    "₹500+ Crores Loans Disbursed",
    "99% Customer Satisfaction",
    "24/7 Customer Support"
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About ApplyMyLoans.com
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in navigating the complex world of financial services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">About Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                ApplyMyLoans.com is a market place for personalized financial services, we currently have 
                over 40+ Banks/NBFC's Listed with us for Home Loans, Personal Loans & Business loans. 
                ApplyMyLoans.com created by a team of passionate financial services and technology professionals 
                to offer exceptional services to the customers.
              </p>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Team Leader Profile */}
            <Card className="shadow-xl border-t-4 border-emerald-500">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 text-center">Our Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_3639d79f-54a7-4c0b-a43e-c6d7470cf257/artifacts/gmrjjpdo_masadhji%20pic.jpeg"
                    alt="Rajender Mehta - Founder & CEO"
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-emerald-500 shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Rajender Mehta</h3>
                <p className="text-emerald-600 font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-700 leading-relaxed">
                  Over 15 years in sales, Distribution & Strategy at Deutsche Postbank, Indiabulls & 
                  Indusind bank. Expert in personal financial products with deep knowledge of banking 
                  processes, TAT, services and commercials.
                </p>
              </CardContent>
            </Card>

            {/* Company Mission */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center">
                    <Target className="mr-3 h-6 w-6 text-emerald-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    We have in-depth knowledge of Personal Financial products offered by Banks and NBFC's, 
                    their process, TAT, services and commercials (Rate & Fee etc.) We analyze various available 
                    products and then offer the best suitable product to our customers with lowest possible 
                    interest rate or cost.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center">
                    <Award className="mr-3 h-6 w-6 text-emerald-600" />
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    ApplyMyLoans provide customized services to the loan seekers with online-offline approach 
                    and came up with ONE STOP SOLUTION for applying loans. We bridge the gap between borrowers 
                    and lenders, making the loan process transparent and efficient.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <p className="font-medium text-gray-800 text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 text-center">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-900 to-emerald-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="text-xl mb-6">
              Let our experienced team help you find the perfect loan solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link to="/home-loan">Apply for Loan</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;