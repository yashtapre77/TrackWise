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
  AlertCircle
} from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form submitted:', formData);
      // Handle login logic here
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-[#2f3e46] tracking-tight">TrackWise</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f3e46] mb-3">Welcome back</h2>
            <p className="text-lg text-[#52796f]">Sign in to your account to continue your coding journey</p>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#cad2c5] rounded-2xl text-[#52796f] font-medium hover:bg-[#cad2c5]/20 hover:border-[#84a98c] transition-all duration-300">
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-[#cad2c5] rounded-2xl text-[#52796f] font-medium hover:bg-[#cad2c5]/20 hover:border-[#84a98c] transition-all duration-300">
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#cad2c5]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#52796f] font-medium">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-12 pr-12 py-4 border-2 rounded-2xl text-[#2f3e46] placeholder-[#84a98c] focus:outline-none focus:ring-0 transition-all duration-300 ${
                    errors.password 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-[#cad2c5] focus:border-[#84a98c] hover:border-[#84a98c]'
                  }`}
                  placeholder="Enter your password"
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
              {errors.password && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{errors.password}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#84a98c] focus:ring-[#84a98c] border-[#cad2c5] rounded"
                />
                <label htmlFor="rememberMe" className="ml-3 text-sm text-[#52796f]">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-[#84a98c] hover:text-[#52796f] transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center px-6 py-4 bg-[#84a98c] text-white font-semibold rounded-2xl hover:bg-[#52796f] focus:outline-none focus:ring-4 focus:ring-[#84a98c]/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign in to TrackWise
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-[#52796f]">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-[#84a98c] hover:text-[#52796f] transition-colors">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Illustration */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#84a98c] to-[#52796f]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Track Your Progress</h3>
            <p className="text-xl text-white/90 leading-relaxed max-w-md">
              Join thousands of students who are mastering their coding skills with AI-powered insights and personalized roadmaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;