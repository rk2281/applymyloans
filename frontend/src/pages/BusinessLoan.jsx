import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Building2, FileText, Users } from 'lucide-react';
import LoanForm from '../components/LoanForm';

const BusinessLoan = () => {
  const loanTypes = [
    "Working Capital Loans",
    "Equipment Finance", 
    "Business Expansion Loans",
    "Machinery Loans",
    "Commercial Vehicle Loans",
    "SME Loans"
  ];

  const salariedDocuments = [
    "KYC Documents",
    "Business Registration Certificate",
    "GST Registration",
    "Bank statements for last 12 months",
    "Income Tax Returns for last 3 years",
    "Financial statements (P&L, Balance Sheet)"
  ];

  const selfEmployedDocuments = [
    "KYC Documents",
    "Business proof and registration",
    "GST registration and returns",
    "Bank statements for last 12 months",
    "ITR for last 3 years with computation",
    "Audited financials for last 3 years",
    "Business profile and project report"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Business Loans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fuel your business growth with our comprehensive business loan solutions
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
                Starting or expanding a business requires significant financial investment. Getting the right 
                business loan can be challenging due to complex documentation, varying eligibility criteria, 
                and multiple approval processes across different lenders.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At ApplyMyLoans.com, we simplify the business loan process by understanding your specific 
                business needs and financial requirements. Our expert team evaluates your business profile 
                and connects you with the most suitable lenders from our network of 40+ banks and NBFCs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need working capital, equipment financing, or expansion funding, we ensure you 
                get the best rates and terms tailored to your business requirements.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Types of Business Loans */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Types of Business Loans</CardTitle>
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
                      Basic Documents:
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
                      Additional Requirements:
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

          {/* Apply for Business Loan Section */}
          <section className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-xl p-8 mb-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">APPLY FOR BUSINESS LOAN</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                Need funding for business expansion, working capital, or equipment purchase? We'll help you 
                find the most suitable business loan from our network of trusted lenders. Our experts analyze 
                your business requirements and financial profile to secure the best rates and terms for your 
                business growth.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-xl font-bold">Grow Your Business with Confidence!</p>
                <p className="text-2xl font-bold text-yellow-300">APPLY NOW !!</p>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section id="application-form">
            <LoanForm loanType="business-loan" title="Business Loan Application" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoan;