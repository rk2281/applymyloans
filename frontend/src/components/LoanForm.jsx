import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Loader2, Send, ArrowRight } from 'lucide-react';
import { mockApi, validateForm } from '../services/mock';
import { useToast } from '../hooks/use-toast';

const LoanForm = ({ loanType = "home-loan", title = "Apply for Loan" }) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    monthlyIncome: '',
    loanAmount: '',
    location: '',
    loanType: loanType,
    employmentType: '',
    termsAccepted: false
  });

  const [loanTypes, setLoanTypes] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    const loadDropdownData = async () => {
      try {
        const [loanTypesRes, employmentTypesRes] = await Promise.all([
          mockApi.getLoanTypes(),
          mockApi.getEmploymentTypes()
        ]);
        
        if (loanTypesRes.success) setLoanTypes(loanTypesRes.data);
        if (employmentTypesRes.success) setEmploymentTypes(employmentTypesRes.data);
      } catch (error) {
        console.error('Error loading dropdown data:', error);
      }
    };

    loadDropdownData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await mockApi.submitLoanApplication(formData);
      
      if (response.success) {
        toast({
          title: "Application Submitted!",
          description: response.message,
          variant: "default",
        });
        
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          monthlyIncome: '',
          loanAmount: '',
          location: '',
          loanType: loanType,
          employmentType: '',
          termsAccepted: false
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Modern Form Card with Glass Effect */}
      <Card className={`shadow-2xl border-0 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gray-800/50 backdrop-blur-xl' : 'bg-white/50 backdrop-blur-xl'
      }`}>
        {/* Modern Header with Gradient */}
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8">
          <CardTitle className="text-3xl font-black text-center">{title}</CardTitle>
          <p className="text-center text-emerald-100 text-lg font-medium">
            Fill out the form below and our experts will contact you within 24 hours
          </p>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className={`text-xl font-bold border-b pb-2 transition-colors ${
                isDark ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'
              }`}>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.fullName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="mobileNumber" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.mobileNumber 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobileNumber && <p className="text-red-500 text-sm mt-2">{errors.mobileNumber}</p>}
                  <p className={`text-xs mt-1 transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>OTP will be sent to this number</p>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className={`text-sm font-semibold mb-2 block transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-200 focus:border-emerald-500'
                  } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="space-y-6">
              <h3 className={`text-xl font-bold border-b pb-2 transition-colors ${
                isDark ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'
              }`}>
                Financial Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="monthlyIncome" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Monthly Gross Income *
                  </Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={formData.monthlyIncome}
                    onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                    className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.monthlyIncome 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="Enter amount in ₹"
                  />
                  {errors.monthlyIncome && <p className="text-red-500 text-sm mt-2">{errors.monthlyIncome}</p>}
                </div>

                <div>
                  <Label htmlFor="loanAmount" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Required Loan Amount *
                  </Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.loanAmount 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="Enter amount in ₹"
                  />
                  {errors.loanAmount && <p className="text-red-500 text-sm mt-2">{errors.loanAmount}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="location" className={`text-sm font-semibold mb-2 block transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Location *
                </Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                    errors.location 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-200 focus:border-emerald-500'
                  } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
                  placeholder="City, State"
                />
                {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="loanType" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Type of Loan *
                  </Label>
                  <Select 
                    value={formData.loanType} 
                    onValueChange={(value) => handleInputChange('loanType', value)}
                  >
                    <SelectTrigger className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.loanType 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent className={isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
                      {loanTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.loanType && <p className="text-red-500 text-sm mt-2">{errors.loanType}</p>}
                </div>

                <div>
                  <Label htmlFor="employmentType" className={`text-sm font-semibold mb-2 block transition-colors ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Employment Type *
                  </Label>
                  <Select 
                    value={formData.employmentType} 
                    onValueChange={(value) => handleInputChange('employmentType', value)}
                  >
                    <SelectTrigger className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                      errors.employmentType 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-emerald-500'
                    } ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent className={isDark ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
                      {employmentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.employmentType && <p className="text-red-500 text-sm mt-2">{errors.employmentType}</p>}
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                  className={`mt-1 ${errors.termsAccepted ? 'border-red-500' : ''}`}
                />
                <Label htmlFor="terms" className={`text-sm leading-relaxed transition-colors ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  I agree to the <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">Terms & Conditions</a> 
                  and <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">Privacy Policy</a> *
                </Label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-6 w-6" />
                    Submit Application
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Security Note */}
          <div className={`mt-8 p-6 rounded-xl border-2 border-dashed transition-colors ${
            isDark ? 'bg-blue-900/20 border-blue-400/30' : 'bg-blue-50 border-blue-200'
          }`}>
            <p className={`text-sm text-center transition-colors ${
              isDark ? 'text-blue-200' : 'text-blue-800'
            }`}>
              <strong>🔒 Secure & Confidential:</strong> Your information is encrypted and will be used only for loan processing purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanForm;