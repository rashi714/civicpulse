import React, { useState } from 'react';
import { Search, MapPin, Calendar, HelpCircle, Sparkles } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { CategoryBadge } from '../components/CategoryBadge';
import { PriorityBadge } from '../components/PriorityBadge';
import { StatusBadge } from '../components/StatusBadge';

interface TrackComplaintPageProps {
  onNavigate: (page: string) => void;
}

export function TrackComplaintPage({ onNavigate }: TrackComplaintPageProps) {
  const [complaintId, setComplaintId] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [complaintData, setComplaintData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
    
    // Mock complaint data
    setComplaintData({
      id: complaintId || 'CP-2026-1042',
      category: 'Roads & Infrastructure',
      location: 'Main Street, Downtown',
      date: 'Feb 3, 2026',
      priority: 'medium' as const,
      status: 'in-progress' as const,
      description: 'Large pothole on Main Street causing traffic issues and potential vehicle damage.',
      assignedTo: 'Roads & Infrastructure Department',
      assignedOfficer: 'Michael Anderson',
      estimatedResolution: 'Feb 8, 2026'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-teal-50 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy-200 mb-6 shadow-sm">
            <Search className="text-teal-600" size={18} />
            <span className="text-sm font-semibold text-navy-900">Real-Time Tracking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Track Complaint
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Enter your complaint ID to check its current status and progress.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="glass rounded-3xl p-6 sm:p-8 shadow-premium-lg mb-8">
          <label className="block text-sm font-bold text-navy-900 mb-4">
            Complaint ID
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              className="flex-1 px-5 py-4 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
              placeholder="e.g., CP-2026-1042"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-teal text-white rounded-2xl font-bold hover:shadow-xl transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </form>

        {/* Complaint Details */}
        {searchPerformed && complaintData && (
          <div className="space-y-6">
            {/* Details Card */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
              <div className="relative glass rounded-3xl p-6 sm:p-8 shadow-premium-lg">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-3">
                      #{complaintData.id}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <CategoryBadge category={complaintData.category} />
                      <PriorityBadge priority={complaintData.priority} />
                      <StatusBadge status={complaintData.status} />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-2">
                      Location
                    </p>
                    <div className="flex items-center gap-2 text-navy-900">
                      <MapPin size={18} className="text-teal-600" />
                      <span className="font-semibold">{complaintData.location}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-2">
                      Date Submitted
                    </p>
                    <div className="flex items-center gap-2 text-navy-900">
                      <Calendar size={18} className="text-teal-600" />
                      <span className="font-semibold">{complaintData.date}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-2">
                      Assigned To
                    </p>
                    <p className="text-navy-900 font-semibold">{complaintData.assignedTo}</p>
                    <p className="text-sm text-navy-600">{complaintData.assignedOfficer}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-2">
                      Estimated Resolution
                    </p>
                    <p className="text-navy-900 font-semibold">{complaintData.estimatedResolution}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-navy-200">
                  <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-3">
                    Description
                  </p>
                  <p className="text-navy-700 leading-relaxed">{complaintData.description}</p>
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="glass rounded-3xl p-6 sm:p-8 shadow-premium-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Progress Timeline</h3>
              <Timeline currentStage={complaintData.status} />
            </div>

            {/* Help Card */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500" />
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">Need Assistance?</h4>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      If you have questions about your complaint or need urgent support, our team is here to help.
                    </p>
                    <button
                      onClick={() => onNavigate('support')}
                      className="px-6 py-3 bg-white text-teal-600 rounded-xl font-bold hover:bg-navy-50 transition-all shadow-lg"
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {searchPerformed && !complaintData && (
          <div className="glass rounded-3xl p-12 text-center shadow-premium-lg">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-navy-400 rounded-full blur-2xl opacity-20" />
              <div className="relative w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="text-navy-400" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">No Complaint Found</h3>
            <p className="text-navy-600 max-w-md mx-auto">
              We couldn't find a complaint with ID "{complaintId}". Please check the ID and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
