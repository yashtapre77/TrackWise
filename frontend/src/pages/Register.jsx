import React, { useState } from 'react';
import { 
  BarChart3, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Github,
  Chrome,
  AlertCircle,
  User,
  Phone,
  CheckCircle
} from 'lucide-react';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration form submitted:', formData);
      // Handle registration logic here
    }
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, text: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    
    const strengthMap = {
      0: { text: 'Very Weak', color: 'bg-red-500' },
      1: { text: 'Weak', color: 'bg-red-400' },
      2: { text: 'Fair', color: 'bg-yellow-500' },
      3: { text: 'Good', color: 'bg-[#84a98c]' },
      4: { text: 'Strong', color: 'bg-[#52796f]' },
      5: { text: 'Very Strong', color: 'bg-[#2f3e46]' }
    };
    
    return { strength, ...strengthMap[strength] };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image/Illustration */}
      <div className="hidden lg:block lg:w-[45%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#84a98c] to-[#52796f]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Start Your Journey</h3>
            <p className="text-xl text-white/90 leading-relaxed max-w-md">
              Create your account and unlock personalized AI-powered insights to accelerate your coding skills and career growth.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-white/80">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>AI-powered performance analysis</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Personalized learning roadmaps</span>
              </div>
              <div className="flex items-center text-white/80">
                <CheckCircle className="w-5 h-5 mr-3" />
                <span>Progress tracking & insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-md w-full space-y-4">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8 lg:hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-[#2f3e46] tracking-tight">TrackWise</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f3e46] mb-3">Create account</h2>
            <p className="text-lg text-[#52796f]">Join TrackWise and start mastering your coding journey</p>
          </div>

          {/* Social Registration */}
          <div className="space-y-2 ]">
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#cad2c5] rounded-2xl text-[#52796f] font-medium hover:bg-[#cad2c5]/20 hover:border-[#84a98c] transition-all duration-300">
              <Chrome className="w-5 h-5 mr-3" />
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#cad2c5] rounded-2xl text-[#52796f] font-medium hover:bg-[#cad2c5]/20 hover:border-[#84a98c] transition-all duration-300">
              <Github className="w-5 h-5 mr-3" />
              Sign up with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#cad2c5]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#52796f] font-medium">Or create account with email</span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-[#2f3e46] mb-2">
                  First name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#84a98c]" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`block w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                      errors.firstName 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                    }`}
                    placeholder="First name"
                  />
                </div>
                {errors.firstName && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{errors.firstName}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-[#2f3e46] mb-2">
                  Last name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#84a98c]" />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`block w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                      errors.lastName 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                    }`}
                    placeholder="Last name"
                  />
                </div>
                {errors.lastName && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{errors.lastName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#2f3e46] mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#84a98c]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{errors.email}</span>
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#2f3e46] mb-2">
                Phone number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-[#84a98c]" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                    errors.phone 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{errors.phone}</span>
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#2f3e46] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#84a98c]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-12 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                    errors.password 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[#84a98c] hover:text-[#52796f] transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#84a98c] hover:text-[#52796f] transition-colors" />
                  )}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#52796f]">Password strength:</span>
                    <span className={`text-sm font-medium ${passwordStrength.strength >= 3 ? 'text-[#52796f]' : 'text-red-500'}`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-[#cad2c5] rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {errors.password && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{errors.password}</span>
                </div>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#84a98c] focus:ring-[#84a98c] border-[#cad2c5] rounded mt-1"
                />
                <label htmlFor="agreeToTerms" className="ml-3 text-sm text-[#52796f]">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-[#84a98c] hover:text-[#52796f] transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-[#84a98c] hover:text-[#52796f] transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <div className="flex items-center text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{errors.agreeToTerms}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center px-6 py-4 bg-[#84a98c] text-white font-semibold rounded-2xl hover:bg-[#52796f] focus:outline-none focus:ring-4 focus:ring-[#84a98c]/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create your account
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Sign in link */}
          <div className="text-center">
            <p className="text-[#52796f]">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-[#84a98c] hover:text-[#52796f] transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;