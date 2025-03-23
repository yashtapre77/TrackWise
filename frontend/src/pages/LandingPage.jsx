import React from 'react';
import { 
  Brain, 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Github,
  Code,
  GraduationCap,
  Star,
  ChevronRight,
  Zap,
  Shield,
  Clock
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90  border-b border-[#cad2c5]/30 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-20 lg:px-20">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-[#354f52] tracking-tight">TrackWise</span>
            </div>
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-[#52796f] hover:text-[#354f52] transition-all duration-300 font-medium">Features</a>
              <a href="#how-it-works" className="text-[#52796f] hover:text-[#354f52] transition-all duration-300 font-medium">How it Works</a>
              <a href="#pricing" className="text-[#52796f] hover:text-[#354f52] transition-all duration-300 font-medium">Pricing</a>
              <button className="bg-[#84a98c] text-white px-8 py-3 rounded-2xl hover:bg-[#52796f] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cad2c5]/30 via-white to-[#cad2c5]/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-12">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-[#cad2c5]/40 backdrop-blur-sm border border-[#84a98c]/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-4 h-4 text-[#354f52] mr-2" />
              <span className="text-[#52796f] font-medium text-sm">AI-Powered Performance Analysis</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-[#354f52] mb-8 leading-[1.1] tracking-tight">
              Master Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#84a98c] to-[#52796f]">
                Coding Journey
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#52796f] mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              TrackWise analyzes your performance across LeetCode, GitHub, and academic records to provide 
              AI-powered insights, personalized grades, and roadmaps for continuous improvement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-[#84a98c] text-white px-10 py-5 rounded-2xl font-semibold hover:bg-[#52796f] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg">
                Start Your Analysis
                <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#84a98c] text-[#52796f] px-10 py-5 rounded-2xl font-semibold hover:bg-[#84a98c] hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-12 text-[#84a98c]">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-[#cad2c5]/60 rounded-xl flex items-center justify-center group-hover:bg-[#cad2c5] transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <span className="font-medium">GitHub</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-[#cad2c5]/60 rounded-xl flex items-center justify-center group-hover:bg-[#cad2c5] transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <span className="font-medium">LeetCode</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-[#cad2c5]/60 rounded-xl flex items-center justify-center group-hover:bg-[#cad2c5] transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-medium">Academic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-[#cad2c5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#cad2c5]/40 backdrop-blur-sm border border-[#84a98c]/30 rounded-full px-6 py-3 mb-6">
              <Shield className="w-4 h-4 text-[#354f52] mr-2" />
              <span className="text-[#52796f] font-medium text-sm">Powerful Features</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#354f52] mb-6 tracking-tight">
              Built for Student Success
            </h2>
            <p className="text-xl text-[#52796f] max-w-3xl mx-auto leading-relaxed">
              Our AI-driven platform provides comprehensive analysis and actionable insights
              to accelerate your learning journey with precision and clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">AI-Powered Analysis</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Our advanced AI analyzes your coding patterns, problem-solving approaches, 
                and identifies specific areas for improvement with detailed explanations.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#52796f] to-[#354f52] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Performance Grading</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Get a comprehensive grade from 1-1000 based on your performance across 
                multiple platforms, with detailed breakdowns and trend analysis.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Personalized Roadmaps</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Receive customized learning paths with specific recommendations, 
                practice problems, and milestones tailored to your unique weaknesses.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Progress Tracking</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Monitor your improvement over time with detailed analytics, 
                visual progress charts, and achievement milestones.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#52796f] to-[#354f52] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Peer Comparison</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Compare your performance with peers in your field, understand 
                where you stand, and identify areas where you can excel.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Goal Setting</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Set specific learning goals, track your progress towards them, 
                and receive notifications and encouragement along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-[#cad2c5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-[#84a98c]/30 rounded-full px-6 py-3 mb-6">
              <Clock className="w-4 h-4 text-[#354f52] mr-2" />
              <span className="text-[#52796f] font-medium text-sm">Simple Process</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#354f52] mb-6 tracking-tight">
              How TrackWise Works
            </h2>
            <p className="text-xl text-[#52796f] max-w-3xl mx-auto leading-relaxed">
              Get started in three simple steps and transform your learning experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -inset-4 bg-[#cad2c5]/40 rounded-full -z-10 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Connect Your Accounts</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Link your LeetCode, GitHub, and academic platforms to allow TrackWise 
                to collect and analyze your performance data securely.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#52796f] to-[#354f52] rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -inset-4 bg-[#cad2c5]/40 rounded-full -z-10 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">AI Analysis</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Our AI engine processes your data, identifies patterns, strengths, 
                and weaknesses, then generates your comprehensive performance grade.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#354f52] to-[#2f3e46] rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -inset-4 bg-[#cad2c5]/40 rounded-full -z-10 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#354f52] mb-6">Get Your Roadmap</h3>
              <p className="text-[#52796f] leading-relaxed text-lg">
                Receive your personalized improvement roadmap with specific recommendations, 
                practice problems, and learning resources tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#cad2c5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#354f52] mb-6 tracking-tight">
              What Students Are Saying
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#84a98c] fill-[#84a98c]" />
                ))}
              </div>
              <p className="text-[#52796f] mb-8 leading-relaxed text-lg">
                "TrackWise helped me identify my weak areas in algorithms and provided 
                a clear roadmap. My LeetCode performance improved by 40% in just 2 months!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <p className="font-bold text-[#354f52] text-lg">Alex Chen</p>
                  <p className="text-[#52796f]">Computer Science Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#84a98c] fill-[#84a98c]" />
                ))}
              </div>
              <p className="text-[#52796f] mb-8 leading-relaxed text-lg">
                "The AI analysis was incredibly detailed and accurate. It pinpointed 
                exactly where I was struggling and gave me actionable steps to improve."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#52796f] to-[#354f52] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <p className="font-bold text-[#354f52] text-lg">Sarah Johnson</p>
                  <p className="text-[#52796f]">Software Engineering Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#cad2c5]/50 hover:bg-white transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#84a98c] fill-[#84a98c]" />
                ))}
              </div>
              <p className="text-[#52796f] mb-8 leading-relaxed text-lg">
                "TrackWise transformed how I approach coding practice. The personalized 
                roadmap kept me focused and motivated throughout my learning journey."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-bold text-[#354f52] text-lg">Michael Rodriguez</p>
                  <p className="text-[#52796f]">Data Science Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#84a98c] to-[#52796f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of students who are already using TrackWise to accelerate 
            their coding journey and achieve their goals faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-[#52796f] px-12 py-5 rounded-2xl font-bold hover:bg-[#cad2c5] hover:text-[#354f52] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg">
              Start Free Trial
              <ChevronRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/80 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#52796f] transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#354f52] text-[#cad2c5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#84a98c] to-[#52796f] rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold">TrackWise</span>
              </div>
              <p className="text-[#cad2c5]/80 leading-relaxed text-lg max-w-md">
                Empowering students to reach their full potential through 
                AI-driven performance analysis and personalized learning experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Product</h3>
              <ul className="space-y-4 text-[#cad2c5]/80">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Support</h3>
              <ul className="space-y-4 text-[#cad2c5]/80">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#52796f]/30 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-[#cad2c5]/80 text-lg">© 2025 TrackWise. All rights reserved.</p>
            <div className="flex space-x-8 mt-6 lg:mt-0">
              <a href="#" className="text-[#cad2c5]/80 hover:text-white transition-colors text-lg">Privacy</a>
              <a href="#" className="text-[#cad2c5]/80 hover:text-white transition-colors text-lg">Terms</a>
              <a href="#" className="text-[#cad2c5]/80 hover:text-white transition-colors text-lg">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;