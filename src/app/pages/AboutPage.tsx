import React from 'react';
import { Target, Heart, Users, Award } from 'lucide-react';

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Project Lead',
      bio: 'Urban planning expert with 15 years of experience in civic technology.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'James Rodriguez',
      role: 'Tech Lead',
      bio: 'Full-stack developer passionate about building solutions for social impact.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Maya Patel',
      role: 'Community Manager',
      bio: 'Community organizer dedicated to citizen engagement and participation.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
      name: 'Alex Chen',
      role: 'Data Analyst',
      bio: 'Data scientist specializing in civic analytics and urban insights.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create a transparent, efficient, and citizen-centric platform that bridges the gap between residents and city officials, making urban problem-solving faster and more effective.'
    },
    {
      icon: Heart,
      title: 'Why It Matters',
      description: 'Every reported issue is a step toward a better city. CivicPulse empowers citizens to actively participate in improving their community, ensuring no problem goes unnoticed.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Since launch, we\'ve helped resolve over 10,000 civic issues, reduced response times by 60%, and increased citizen satisfaction with city services by 45%.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About CivicPulse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building smarter cities through technology, transparency, and community engagement.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=500&fit=crop"
              alt="Smart City"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Transforming Cities, One Issue at a Time</h2>
                <p className="text-lg text-white/90">
                  Technology that empowers citizens and streamlines governance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Why It Matters, Impact */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Section with Background */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 mb-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Built For Citizens, By Citizens</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              CivicPulse was born from the frustration of seeing civic issues go unreported and unresolved. 
              We believe that every citizen deserves a voice, and every complaint deserves attention. 
              Our platform combines cutting-edge AI technology with user-friendly design to make civic 
              engagement easier than ever before.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate individuals dedicated to making cities better for everyone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Impact in Numbers</h2>
            <p className="text-gray-300">Making a real difference in communities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">50K+</p>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">12K+</p>
              <p className="text-gray-300">Issues Resolved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">2.5 Days</p>
              <p className="text-gray-300">Avg Response</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">95%</p>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
