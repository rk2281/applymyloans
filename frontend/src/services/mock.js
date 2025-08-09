// Mock API service for loan application functionality
// This simulates backend responses and will be replaced with real API calls later

export const mockApi = {
  // Submit loan application
  submitLoanApplication: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Application received. We will contact you shortly.",
          applicationId: `APP${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          data: formData
        });
      }, 1500); // Simulate network delay
    });
  },

  // Submit contact form
  submitContactForm: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Thank you for your inquiry. Our team will get back to you within 24 hours.",
          data: formData
        });
      }, 1000);
    });
  },

  // Get loan types for dropdown
  getLoanTypes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            { value: "home-loan", label: "Home Loan" },
            { value: "home-purchase", label: "Home Purchase Loan" },
            { value: "home-construction", label: "Construction Loan" },
            { value: "plot-loan", label: "Plot/Land Loan" },
            { value: "home-renovation", label: "Home Renovation Loan" },
            { value: "home-transfer", label: "Home Loan Transfer" },
            { value: "nri-home", label: "NRI Home Loan" },
            { value: "business-loan", label: "Business Loan" },
            { value: "working-capital", label: "Working Capital Loan" },
            { value: "equipment-finance", label: "Equipment Finance" },
            { value: "business-expansion", label: "Business Expansion Loan" },
            { value: "personal-loan", label: "Personal Loan" },
            { value: "debt-consolidation", label: "Debt Consolidation" },
            { value: "medical-loan", label: "Medical Loan" },
            { value: "education-loan", label: "Education Loan" }
          ]
        });
      }, 500);
    });
  },

  // Get employment types for dropdown
  getEmploymentTypes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            { value: "salaried", label: "Salaried" },
            { value: "self-employed", label: "Self Employed" },
            { value: "business-owner", label: "Business Owner" },
            { value: "professional", label: "Professional" },
            { value: "freelancer", label: "Freelancer" }
          ]
        });
      }, 300);
    });
  },

  // Bank partners data
  getBankPartners: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
            "Punjab National Bank", "Bank of Baroda", "Canara Bank", "Union Bank",
            "HDFC Ltd", "LIC Housing Finance", "Bajaj Finserv", "Tata Capital",
            "Mahindra Finance", "L&T Finance", "Indiabulls Housing Finance",
            "And 25+ more banks and NBFCs..."
          ]
        });
      }, 400);
    });
  }
};

// Utility functions for form validation
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.fullName?.trim()) {
    errors.fullName = "Full name is required";
  }
  
  if (!formData.mobileNumber?.trim()) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
    errors.mobileNumber = "Please enter a valid 10-digit mobile number";
  }
  
  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!formData.monthlyIncome || formData.monthlyIncome <= 0) {
    errors.monthlyIncome = "Monthly income is required";
  }
  
  if (!formData.loanAmount || formData.loanAmount <= 0) {
    errors.loanAmount = "Loan amount is required";
  }
  
  if (!formData.location?.trim()) {
    errors.location = "Location is required";
  }
  
  if (!formData.loanType) {
    errors.loanType = "Please select a loan type";
  }
  
  if (!formData.employmentType) {
    errors.employmentType = "Please select employment type";
  }
  
  if (!formData.termsAccepted) {
    errors.termsAccepted = "Please accept terms and conditions";
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};