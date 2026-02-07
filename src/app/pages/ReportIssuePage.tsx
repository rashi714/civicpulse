import React, { useState } from 'react';
import { Upload, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { AIHelperPanel } from '../components/AIHelperPanel';

interface ReportIssuePageProps {
  onNavigate: (page: string) => void;
}

export function ReportIssuePage({ onNavigate }: ReportIssuePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  const categories = [
    'Roads & Infrastructure',
    'Sanitation & Waste',
    'Water Supply',
    'Electricity',
    'Public Safety',
    'Drainage',
    'Street Lights',
    'Parks & Recreation',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `CP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setComplaintId(id);
    setSubmitted(true);
  };

  const hasFormData = formData.category && formData.description;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-50 to-teal-50 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
            <div className="relative glass rounded-3xl p-8 sm:p-12 shadow-premium-lg text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse-subtle" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="text-white" size={48} />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Complaint Submitted Successfully!
              </h2>
              <p className="text-lg text-navy-600 mb-8 max-w-md mx-auto">
                Your complaint has been registered and our AI has routed it to the appropriate department.
              </p>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
                <p className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-2">
                  Your Complaint ID
                </p>
                <p className="text-4xl font-bold bg-gradient-teal bg-clip-text text-transparent">
                  {complaintId}
                </p>
                <p className="text-xs text-navy-600 mt-2">
                  Save this ID to track your complaint
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('track')}
                  className="px-8 py-4 bg-gradient-teal text-white rounded-2xl font-semibold hover:shadow-xl transition-all shadow-lg"
                >
                  Track This Complaint
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', category: '', description: '', location: '' });
                  }}
                  className="px-8 py-4 bg-white text-navy-700 rounded-2xl font-semibold hover:bg-navy-50 transition-all border border-navy-200"
                >
                  Submit Another
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-teal-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy-200 mb-6 shadow-sm">
            <Sparkles className="text-teal-600" size={18} />
            <span className="text-sm font-semibold text-navy-900">AI-Assisted Reporting</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Report an Issue
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Fill out the form below and our AI will analyze your complaint to route it to the right department.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 shadow-premium-lg">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-3">
                    Issue Category
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-3">
                    Description
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none bg-white"
                    placeholder="Describe the issue in detail..."
                  />
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-3">
                    Upload Photo (Optional)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-teal rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                    <div className="relative border-2 border-dashed border-navy-300 rounded-2xl p-10 text-center hover:border-teal-400 transition-all cursor-pointer bg-white/50">
                      <Upload className="mx-auto text-navy-400 mb-3 group-hover:text-teal-600 transition-colors" size={40} />
                      <p className="text-sm font-semibold text-navy-700">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-navy-500 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-3">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-navy-400" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-14 pr-5 py-4 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      placeholder="Enter address or area"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-teal text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-lg glow-teal-hover"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>

          {/* AI Helper Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AIHelperPanel
                suggestedDepartment={hasFormData ? formData.category : undefined}
                priority={hasFormData ? 'medium' : undefined}
                summary={hasFormData && formData.description.length > 20 ? `${formData.description.substring(0, 100)}${formData.description.length > 100 ? '...' : ''}` : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
