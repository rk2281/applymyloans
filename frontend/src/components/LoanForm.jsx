import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Loader2, Send } from 'lucide-react';
import { mockApi, validateForm } from '../services/mock';
import { useToast } from '../hooks/use-toast';

const LoanForm = ({ loanType = "home-loan", title = "Apply for Loan" }) => {
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
    
    // Clear error when user starts typing
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
        
        // Reset form
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
    <Card className="max-w-2xl mx-auto shadow-xl border-t-4 border-emerald-500">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
        <CardTitle className="text-2xl text-blue-900 text-center">{title}</CardTitle>
        <p className="text-center text-gray-600">
          Fill out the form below and our experts will contact you within 24 hours
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={errors.fullName ? 'border-red-500' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <Label htmlFor="mobileNumber">Mobile Number *</Label>
              <Input
                id="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                className={errors.mobileNumber ? 'border-red-500' : ''}
                placeholder="10-digit mobile number"
              />
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
              <p className="text-xs text-gray-500 mt-1">OTP will be sent to this number</p>
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="monthlyIncome">Monthly Gross Income *</Label>
              <Input
                id="monthlyIncome"
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                className={errors.monthlyIncome ? 'border-red-500' : ''}
                placeholder="Enter amount in ₹"
              />
              {errors.monthlyIncome && <p className="text-red-500 text-sm mt-1">{errors.monthlyIncome}</p>}
            </div>

            <div>
              <Label htmlFor="loanAmount">Required Loan Amount *</Label>
              <Input
                id="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                className={errors.loanAmount ? 'border-red-500' : ''}
                placeholder="Enter amount in ₹"
              />
              {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className={errors.location ? 'border-red-500' : ''}
              placeholder="City, State"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="loanType">Type of Loan *</Label>
              <Select 
                value={formData.loanType} 
                onValueChange={(value) => handleInputChange('loanType', value)}
              >
                <SelectTrigger className={errors.loanType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  {loanTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.loanType && <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>}
            </div>

            <div>
              <Label htmlFor="employmentType">Employment Type *</Label>
              <Select 
                value={formData.employmentType} 
                onValueChange={(value) => handleInputChange('employmentType', value)}
              >
                <SelectTrigger className={errors.employmentType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  {employmentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.employmentType && <p className="text-red-500 text-sm mt-1">{errors.employmentType}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
              className={errors.termsAccepted ? 'border-red-500' : ''}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the <a href="#" className="text-emerald-600 hover:underline">Terms & Conditions</a> 
              and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a> *
            </Label>
          </div>
          {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>Note:</strong> This is a secure form. Your information will be handled confidentially 
            and used only for loan processing purposes.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanForm;