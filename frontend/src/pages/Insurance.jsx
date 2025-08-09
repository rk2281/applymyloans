import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Heart, Home, Car, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const insuranceTypes = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Life Insurance",
      description: "Secure your family's financial future",
      features: ["Term Life Insurance", "Whole Life Insurance", "ULIP Plans", "Pension Plans"]
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      features: ["Individual Health Plans", "Family Floater Plans", "Critical Illness Cover", "Senior Citizen Plans"]
    },
    {
      icon: <Home className="h-8 w-8 text-emerald-600" />,
      title: "Property Insurance",
      description: "Protect your home and belongings",
      features: ["Home Insurance", "Fire Insurance", "Burglary Insurance", "Natural Disaster Cover"]
    },
    {
      icon: <Car className="h-8 w-8 text-emerald-600" />,
      title: "Vehicle Insurance",
      description: "Complete protection for your vehicles",
      features: ["Car Insurance", "Two Wheeler Insurance", "Commercial Vehicle Insurance", "Third Party Insurance"]
    }
  ];

  const benefits = [
    "Wide Range of Insurance Products",
    "Compare Plans from Multiple Insurers",
    "Expert Guidance on Policy Selection",
    "Quick Policy Issuance",
    "Claim Support Assistance",
    "Competitive Premium Rates"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Insurance Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with our comprehensive insurance solutions
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Insurance Services?</h2>
            <p className="text-lg text-gray-600">Comprehensive protection with expert guidance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Insurance Products</h2>
            <p className="text-lg text-gray-600">Choose from our wide range of insurance solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className="shadow-xl border-t-4 border-emerald-500 hover:shadow-2xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{insurance.icon}</div>
                  <CardTitle className="text-blue-900">{insurance.title}</CardTitle>
                  <p className="text-gray-600">{insurance.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {insurance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Insurance Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our insurance experts are here to help you choose the right protection for your needs
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
            <Link to="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;