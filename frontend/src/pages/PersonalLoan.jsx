import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, User, FileText, Users } from 'lucide-react';
import LoanForm from '../components/LoanForm';

const PersonalLoan = () => {
  const loanTypes = [
    "Debt Consolidation Loans",
    "Medical Emergency Loans", 
    "Education Loans",
    "Wedding Loans",
    "Travel Loans",
    "Home Improvement Loans"
  ];

  const salariedDocuments = [
    "KYC Documents (Aadhaar, PAN, Passport)",
    "Last 3 months' salary slips",
    "Latest Form 16 or ITR",
    "Bank statements for last 6 months",
    "Employment certificate",
    "Photograph"
  ];

  const selfEmployedDocuments = [
    "KYC Documents (Aadhaar, PAN, Passport)",
    "Business registration documents",
    "ITR for last 2-3 years",
    "Bank statements for last 6-12 months",
    "Financial statements",
    "Business address proof",
    "Photograph"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Personal Loans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your personal financial needs with our quick and hassle-free personal loans
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 flex items-center">
                <FileText className="mr-3 h-6 w-6 text-emerald-600" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal loans are versatile financial solutions that can help you meet various personal 
                expenses without the need for collateral. Whether it's a medical emergency, wedding expenses, 
                education costs, or debt consolidation, personal loans provide quick access to funds.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At ApplyMyLoans.com, we understand that personal financial needs are urgent and require 
                immediate attention. Our streamlined process ensures quick approval and disbursal of 
                personal loans from our network of trusted lenders.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With minimal documentation and competitive interest rates, we make personal loans 
                accessible and affordable for all eligible applicants.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Types of Personal Loans */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Types of Personal Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {loanTypes.map((type, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documents Required */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Common Documents Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      For Salaried:
                    </h4>
                    <ul className="space-y-2">
                      {salariedDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      For Self-employed:
                    </h4>
                    <ul className="space-y-2">
                      {selfEmployedDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Apply for Personal Loan Section */}
          <section className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-xl p-8 mb-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">APPLY FOR PERSONAL LOAN</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                Need funds for personal expenses, medical emergencies, or debt consolidation? Our personal 
                loan solutions offer quick approval and competitive rates. No collateral required - just 
                submit your application and let us find the best personal loan option for you.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-xl font-bold">Quick. Simple. Reliable.</p>
                <p className="text-2xl font-bold text-yellow-300">APPLY NOW !!</p>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section id="application-form">
            <LoanForm loanType="personal-loan" title="Personal Loan Application" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoan;