import React from 'react';
import { Github, Twitter, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-9 h-9 bg-gradient-teal rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Sparkles className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold text-white">CivicPulse</span>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed">
              Building smarter cities through transparent issue reporting and intelligent tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Report Issue</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Track Complaint</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Support</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-navy-200 hover:text-teal-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-navy-200">
              support@civicpulse.gov
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-navy-300">
            &copy; 2026 CivicPulse. All rights reserved. Building better communities together.
          </p>
        </div>
      </div>
    </footer>
  );
}
