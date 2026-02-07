import React from 'react';
import { 
  FileText, 
  Search, 
  BarChart3, 
  Send, 
  Eye, 
  CheckCircle2,
  Construction,
  Trash2,
  Droplet,
  Zap,
  ShieldAlert,
  Star,
  Sparkles,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    { icon: Construction, label: 'Roads & Infrastructure', desc: 'Potholes, repairs', gradient: 'from-orange-400 to-orange-600' },
    { icon: Trash2, label: 'Sanitation', desc: 'Waste management', gradient: 'from-emerald-400 to-emerald-600' },
    { icon: Droplet, label: 'Water Supply', desc: 'Leaks, quality issues', gradient: 'from-blue-400 to-blue-600' },
    { icon: Zap, label: 'Electricity', desc: 'Power, street lights', gradient: 'from-yellow-400 to-yellow-600' },
    { icon: ShieldAlert, label: 'Public Safety', desc: 'Security concerns', gradient: 'from-red-400 to-red-600' },
  ];

  const steps = [
    {
      icon: Send,
      title: 'Report Issue',
      description: 'Submit complaints with photos and precise location details in seconds'
    },
    {
      icon: Eye,
      title: 'Track Progress',
      description: 'Monitor real-time updates and status changes throughout the process'
    },
    {
      icon: CheckCircle2,
      title: 'Get Resolution',
      description: 'Receive notifications when your issue is addressed and resolved'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Downtown Resident',
      text: 'CivicPulse transformed how I interact with city services. The AI suggestions are incredibly accurate!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=200&h=200&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      text: 'Finally, a transparent way to communicate with city officials. Love the real-time tracking.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?w=200&h=200&fit=crop'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Community Leader',
      text: 'This platform has revolutionized civic engagement in our neighborhood. Absolutely essential.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1600696444233-20accba67df3?w=200&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1636335377082-7b6525748cdd?w=1920&h=1080&fit=crop"
            alt="Modern City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/90 to-navy-900/80" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="text-teal-400" size={18} />
              <span className="text-sm font-semibold text-white">AI-Powered Civic Platform</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Report City Issues.
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Track Progress.
              </span>
              <br />
              Build Better Communities.
            </h1>
            
            <p className="text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              Empowering citizens with transparent issue reporting, intelligent tracking, 
              and real-time accountability. Making civic engagement effortless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('report')}
                className="group px-8 py-4 bg-gradient-teal text-white rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg glow-teal-hover flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <FileText size={20} />
                Report Issue
              </button>
              <button
                onClick={() => onNavigate('track')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Track Complaint
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <BarChart3 size={20} />
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-4">
              <Zap className="text-teal-600" size={18} />
              <span className="text-sm font-semibold text-teal-900">Simple Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Three simple steps to make your city better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-teal rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                <div className="relative bg-white rounded-3xl p-8 border border-navy-100 hover:border-teal-300 transition-all shadow-sm hover:shadow-premium">
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-teal rounded-2xl blur-lg opacity-30`} />
                    <div className="relative w-16 h-16 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="py-24 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              Report Any Issue
            </h2>
            <p className="text-xl text-navy-600">
              Comprehensive coverage of all city services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 hover:shadow-premium-lg transition-all duration-300 cursor-pointer border border-navy-100 hover:border-teal-300 overflow-hidden"
                onClick={() => onNavigate('report')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-cyan-50/0 group-hover:from-teal-50/50 group-hover:to-cyan-50/30 transition-all duration-300" />
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-navy-900 text-center mb-1">{category.label}</h3>
                  <p className="text-xs text-navy-500 text-center">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Helper Feature */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
                <Sparkles className="text-purple-600" size={18} />
                <span className="text-sm font-semibold text-purple-900">Intelligent Processing</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                AI-Powered Assistant
              </h2>
              <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                Our advanced machine learning analyzes your complaint and automatically routes it to the right department with appropriate priority.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-teal-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Smart Department Routing</p>
                    <p className="text-sm text-navy-600">Automatically suggests the appropriate department</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-teal-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Priority Detection</p>
                    <p className="text-sm text-navy-600">Intelligently determines urgency level</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-teal-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Auto-Summary Generation</p>
                    <p className="text-sm text-navy-600">Creates concise summaries for faster processing</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-teal rounded-3xl blur-3xl opacity-20" />
              <div className="relative glass rounded-3xl p-8 shadow-premium-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">AI Analysis</h3>
                      <p className="text-xs text-navy-600">Processing complaint...</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-2">Suggested Department</p>
                    <p className="font-bold text-navy-900">Roads & Infrastructure</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-2">Priority Level</p>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold border border-orange-200">
                      Medium Priority
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-2">Auto-Summary</p>
                    <p className="text-sm text-navy-700 leading-relaxed">
                      Large pothole on Main Street causing traffic hazard. Requires road repair team attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-navy-200">
              Making a difference in communities every day
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform">
              <TrendingUp className="mx-auto text-teal-400 mb-4" size={40} />
              <p className="text-5xl font-bold text-white mb-2">12.5K+</p>
              <p className="text-navy-300 font-medium">Total Reports</p>
            </div>
            <div className="glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform">
              <CheckCircle2 className="mx-auto text-emerald-400 mb-4" size={40} />
              <p className="text-5xl font-bold text-white mb-2">9.8K+</p>
              <p className="text-navy-300 font-medium">Issues Resolved</p>
            </div>
            <div className="glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform">
              <Clock className="mx-auto text-orange-400 mb-4" size={40} />
              <p className="text-5xl font-bold text-white mb-2">2.5 Days</p>
              <p className="text-navy-300 font-medium">Avg Response Time</p>
            </div>
            <div className="glass-dark rounded-3xl p-8 text-center group hover:scale-105 transition-transform">
              <Users className="mx-auto text-cyan-400 mb-4" size={40} />
              <p className="text-5xl font-bold text-white mb-2">50K+</p>
              <p className="text-navy-300 font-medium">Active Citizens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              Trusted by Citizens
            </h2>
            <p className="text-xl text-navy-600">
              Real stories from our community members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-navy-100 hover:border-teal-300 transition-all shadow-sm hover:shadow-premium">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-navy-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-teal-200"
                  />
                  <div>
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-navy-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1696685969275-dd7f8cf52d5c?w=1920&h=600&fit=crop"
            alt="City Engagement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-teal-900/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-navy-200 mb-10">
            Join thousands of citizens making their communities better, one report at a time.
          </p>
          <button
            onClick={() => onNavigate('report')}
            className="px-10 py-5 bg-gradient-teal text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl glow-teal-hover transform hover:scale-105 inline-flex items-center gap-3"
          >
            <FileText size={24} />
            Report Your First Issue
          </button>
        </div>
      </section>
    </div>
  );
}
