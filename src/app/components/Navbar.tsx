import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'report', label: 'Report Issue' },
    { id: 'track', label: 'Track Complaint' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'map', label: 'Map View' },
    { id: 'about', label: 'About' },
    { id: 'support', label: 'Support' },
  ];

  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative w-9 h-9 bg-gradient-teal rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all">
              <Sparkles className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
              CivicPulse
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-gradient-teal text-white shadow-lg'
                    : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('admin')}
              className="ml-2 px-4 py-2 rounded-xl text-sm font-medium bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl text-navy-700 hover:bg-navy-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 glass-dark">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...navItems, { id: 'admin', label: 'Admin' }].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-teal text-white shadow-lg'
                    : 'text-navy-100 hover:bg-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
