import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Home, FileText, Users, ArrowRight } from 'lucide-react';
import LoanForm from '../components/LoanForm';

const HomeLoan = () => {
  const { isDark } = useTheme();

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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Modern Hero Section */}
      <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 float-animation"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-emerald-500 rounded-lg rotate-45 opacity-10"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-500 rounded-full opacity-10 pulse-modern"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className={`text-4xl md:text-6xl font-black mb-6 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Home <span className="text-emerald-600">Loans</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Turn your dream of owning a home into reality with our competitive home loan options
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Card */}
          <Card className={`mb-16 shadow-2xl border-0 overflow-hidden transition-all duration-500 ${
            isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
          }`}>
            <CardHeader className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-8">
              <CardTitle className="text-3xl font-black flex items-center justify-center">
                <FileText className="mr-4 h-8 w-8" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none space-y-6">
                <p className={`text-lg leading-relaxed transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Applying for home loan can be very difficult process for any individual who require the same. 
                  It is because the process is very confusing and dealing with multiple agents is not easy. 
                  Also, there are lots of documentation needed.
                </p>
                <p className={`text-lg leading-relaxed transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  At ApplyMyLoans.com, We first understand the requirement completely. Once we understood 
                  the requirements completely, we coordinate with different Banks and NBFC's to get the 
                  best deal on your behalf.
                </p>
                <p className={`text-lg leading-relaxed font-semibold transition-colors ${
                  isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  You do not need to deal with Multiple agents. We assure you of our best service all times.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Types of Home Loans - Modern Card */}
            <Card className={`shadow-2xl border-0 transition-all duration-500 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
            }`}>
              <CardHeader className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6">
                <CardTitle className="text-2xl font-black text-center">Types of Home Loans</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {loanTypes.map((type, index) => (
                    <li key={index} className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDark ? 'hover:bg-emerald-900/20' : 'hover:bg-emerald-50'
                    }`}>
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className={`font-semibold transition-colors ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>{type}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documents Required - Modern Card */}
            <Card className={`shadow-2xl border-0 transition-all duration-500 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
            }`}>
              <CardHeader className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6">
                <CardTitle className="text-2xl font-black text-center">Documents Required</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h4 className={`font-bold mb-4 flex items-center text-lg transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      For Salaried:
                    </h4>
                    <ul className="space-y-3">
                      {salariedDocuments.map((doc, index) => (
                        <li key={index} className={`flex items-start text-sm transition-colors ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-bold mb-4 flex items-center text-lg transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      For Self-employed:
                    </h4>
                    <ul className="space-y-3">
                      {selfEmployedDocuments.map((doc, index) => (
                        <li key={index} className={`flex items-start text-sm transition-colors ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modern CTA Section */}
          <section className="mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-emerald-900 rounded-3xl"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 pulse-modern"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-lg rotate-45 opacity-15"></div>
            
            <div className="relative z-10 p-12 text-white text-center">
              <h2 className="text-4xl font-black mb-4">APPLY FOR HOME LOAN</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                Need Home Loan for New Home, Home Loan Transfer, Construction Loan, Loan against Home/property. 
                We will coordinate on your behalf and search for most suitable product for you. Just fill the 
                form and rest leave everything on us. We will call you and understand the requirements. 
                You don't need to rush, we will coordinate on your behalf and analyze different financial 
                product for you. Assured you of our best services and best suitable product with lowest 
                rate of interest.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
                <p className="text-2xl font-black">One Stop Solution for all your Loan Needs!!</p>
                <p className="text-3xl font-black text-yellow-300">APPLY NOW !!</p>
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