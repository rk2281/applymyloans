import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Home, FileText, Users } from 'lucide-react';
import LoanForm from '../components/LoanForm';

const HomeLoan = () => {
  const loanTypes = [
    "Home Purchase Loans",
    "Loan For construction", 
    "Plot/Land Loan",
    "Home renovation loan",
    "Transfer your existing Home Loan",
    "NRI home loans"
  ];

  const salariedDocuments = [
    "KYC",
    "Last 3 months' salary slips (6 months if variable is part of salary)",
    "Latest Form 16",
    "Copy of bank statement for last 6 months",
    "Application form to be signed by all applicants",
    "Processing fee cheque"
  ];

  const selfEmployedDocuments = [
    "KYC Copy of Savings & Current a/c bank statement for last 6 months",
    "Last 3 years complete financials which includes ITR, COI, P&L, B/S and audit report",
    "Application form to be signed by all applicants",
    "Processing fee cheque",
    "Business profile"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Home className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Home Loans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your dream of owning a home into reality with our competitive home loan options
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
                Applying for home loan can be very difficult process for any individual who require the same. 
                It is because the process is very confusing and dealing with multiple agents is not easy. 
                Also, there are lots of documentation needed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At ApplyMyLoans.com, We first understand the requirement completely. Once we understood 
                the requirements completely, we coordinate with different Banks and NBFC's to get the 
                best deal on your behalf.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You do not need to deal with Multiple agents. We assure you of our best service all times.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Types of Home Loans */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Types of Home Loans</CardTitle>
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

          {/* Apply for Home Loan Section */}
          <section className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-xl p-8 mb-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">APPLY FOR HOME LOAN</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                Need Home Loan for New Home, Home Loan Transfer, Construction Loan, Loan against Home/property. 
                We will coordinate on your behalf and search for most suitable product for you. Just fill the 
                form and rest leave everything on us. We will call you and understand the requirements. 
                You don't need to rush, we will coordinate on your behalf and analyze different financial 
                product for you. Assured you of our best services and best suitable product with lowest 
                rate of interest.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-xl font-bold">One Stop Solution for all your Loan Needs!!</p>
                <p className="text-2xl font-bold text-yellow-300">APPLY NOW !!</p>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section id="application-form">
            <LoanForm loanType="home-loan" title="Home Loan Application" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default HomeLoan;