import React, { useState } from 'react';
import { Search, Filter, Eye, Edit } from 'lucide-react';
import { CategoryBadge } from '../components/CategoryBadge';
import { StatusBadge } from '../components/StatusBadge';
import { PriorityBadge } from '../components/PriorityBadge';

export function AdminPage() {
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const mockComplaints = [
    {
      id: 'CP-2026-1042',
      category: 'Roads',
      priority: 'high' as const,
      status: 'in-progress' as const,
      description: 'Large pothole on Main Street causing traffic issues and potential vehicle damage.',
      location: 'Main Street, Downtown',
      date: 'Feb 5, 2026',
      reportedBy: 'John Doe',
      phone: '555-0123',
      department: 'Roads & Infrastructure',
      assignedTo: 'Mike Johnson'
    },
    {
      id: 'CP-2026-1041',
      category: 'Sanitation',
      priority: 'medium' as const,
      status: 'submitted' as const,
      description: 'Overflowing garbage bins near Central Park requiring immediate attention.',
      location: 'Central Park Area',
      date: 'Feb 5, 2026',
      reportedBy: 'Sarah Smith',
      phone: '555-0124',
      department: 'Unassigned',
      assignedTo: 'Unassigned'
    },
    {
      id: 'CP-2026-1040',
      category: 'Water',
      priority: 'high' as const,
      status: 'assigned' as const,
      description: 'Water pipeline leak causing flooding in residential area.',
      location: 'Oak Avenue',
      date: 'Feb 4, 2026',
      reportedBy: 'Emily Davis',
      phone: '555-0125',
      department: 'Water Department',
      assignedTo: 'David Lee'
    }
  ];

  const departments = [
    'Roads & Infrastructure',
    'Sanitation & Waste',
    'Water Department',
    'Electricity Board',
    'Public Safety'
  ];

  const handleStatusUpdate = (complaintId: string, newStatus: string) => {
    alert(`Status updated to: ${newStatus} for complaint ${complaintId}`);
  };

  const handleDepartmentAssign = (complaintId: string, department: string) => {
    alert(`Assigned to ${department} for complaint ${complaintId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">
            Manage and resolve citizen complaints efficiently.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">New Today</p>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-orange-600">45</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">In Progress</p>
            <p className="text-3xl font-bold text-yellow-600">89</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Resolved Today</p>
            <p className="text-3xl font-bold text-green-600">8</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search complaints by ID, location, or category..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* Complaints Table */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* List */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900 text-lg">Complaints List</h2>
            {mockComplaints.map((complaint) => (
              <div
                key={complaint.id}
                className={`bg-white rounded-xl p-5 shadow-sm border-2 transition-all cursor-pointer ${
                  selectedComplaint?.id === complaint.id
                    ? 'border-blue-500'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedComplaint(complaint)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">#{complaint.id}</p>
                    <div className="flex flex-wrap gap-2">
                      <CategoryBadge category={complaint.category} />
                      <PriorityBadge priority={complaint.priority} />
                      <StatusBadge status={complaint.status} />
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye size={18} className="text-gray-500" />
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">{complaint.description}</p>
                <p className="text-xs text-gray-500">{complaint.location} • {complaint.date}</p>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="sticky top-24">
            {selectedComplaint ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Complaint Details</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit size={18} className="text-gray-500" />
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Complaint ID</p>
                    <p className="text-gray-900 font-semibold">#{selectedComplaint.id}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Status</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <CategoryBadge category={selectedComplaint.category} />
                      <PriorityBadge priority={selectedComplaint.priority} />
                      <StatusBadge status={selectedComplaint.status} />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Description</p>
                    <p className="text-sm text-gray-700">{selectedComplaint.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Location</p>
                      <p className="text-sm text-gray-900">{selectedComplaint.location}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Date</p>
                      <p className="text-sm text-gray-900">{selectedComplaint.date}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Reported By</p>
                      <p className="text-sm text-gray-900">{selectedComplaint.reportedBy}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Phone</p>
                      <p className="text-sm text-gray-900">{selectedComplaint.phone}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-4">Admin Actions</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Update Status
                        </label>
                        <select
                          defaultValue={selectedComplaint.status}
                          onChange={(e) => handleStatusUpdate(selectedComplaint.id, e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="submitted">Submitted</option>
                          <option value="assigned">Assigned</option>
                          <option value="in-progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Assign Department
                        </label>
                        <select
                          defaultValue={selectedComplaint.department}
                          onChange={(e) => handleDepartmentAssign(selectedComplaint.id, e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="Unassigned">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Assign To
                        </label>
                        <input
                          type="text"
                          defaultValue={selectedComplaint.assignedTo}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter officer name"
                        />
                      </div>

                      <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-gray-400" size={32} />
                </div>
                <p className="text-gray-600">Select a complaint to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
