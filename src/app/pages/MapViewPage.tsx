import React, { useState } from 'react';
import { MapPin, Filter, X } from 'lucide-react';
import { PriorityBadge } from '../components/PriorityBadge';
import { StatusBadge } from '../components/StatusBadge';
import { CategoryBadge } from '../components/CategoryBadge';

export function MapViewPage() {
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const mockPins = [
    {
      id: 'CP-2026-1042',
      category: 'Roads',
      priority: 'high' as const,
      status: 'in-progress' as const,
      description: 'Large pothole on Main Street',
      location: 'Main Street, Downtown',
      coordinates: { top: '45%', left: '35%' }
    },
    {
      id: 'CP-2026-1041',
      category: 'Sanitation',
      priority: 'medium' as const,
      status: 'submitted' as const,
      description: 'Overflowing garbage bins',
      location: 'Central Park Area',
      coordinates: { top: '30%', left: '60%' }
    },
    {
      id: 'CP-2026-1040',
      category: 'Water',
      priority: 'high' as const,
      status: 'assigned' as const,
      description: 'Water pipeline leak',
      location: 'Oak Avenue',
      coordinates: { top: '65%', left: '45%' }
    },
    {
      id: 'CP-2026-1039',
      category: 'Electricity',
      priority: 'low' as const,
      status: 'resolved' as const,
      description: 'Street light not working',
      location: 'Park Avenue',
      coordinates: { top: '50%', left: '70%' }
    },
    {
      id: 'CP-2026-1038',
      category: 'Safety',
      priority: 'high' as const,
      status: 'in-progress' as const,
      description: 'Broken fence at playground',
      location: 'Community Park',
      coordinates: { top: '25%', left: '40%' }
    }
  ];

  const getPinColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-600 border-red-700';
      case 'medium': return 'bg-orange-600 border-orange-700';
      case 'low': return 'bg-green-600 border-green-700';
      default: return 'bg-blue-600 border-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Map View</h1>
          <p className="text-lg text-gray-600">
            Visualize all reported issues on the city map.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-gray-600" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="all">All Categories</option>
                    <option value="roads">Roads</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="water">Water</option>
                    <option value="electricity">Electricity</option>
                    <option value="safety">Safety</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="all">All Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-red-700" />
                  <span className="text-sm text-gray-700">High Priority</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-600 rounded-full border-2 border-orange-700" />
                  <span className="text-sm text-gray-700">Medium Priority</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-green-700" />
                  <span className="text-sm text-gray-700">Low Priority</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50" style={{ height: '600px' }}>
                {/* Mock Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Mock Streets */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300" />
                </div>

                {/* Complaint Pins */}
                {mockPins.map((pin) => (
                  <div
                    key={pin.id}
                    className="absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-transform hover:scale-110"
                    style={{ top: pin.coordinates.top, left: pin.coordinates.left }}
                    onClick={() => setSelectedComplaint(pin)}
                  >
                    <div className="relative">
                      <MapPin
                        size={36}
                        className={`${getPinColor(pin.priority)} text-white drop-shadow-lg`}
                        fill="currentColor"
                      />
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full" />
                    </div>
                  </div>
                ))}

                {/* Complaint Preview Card */}
                {selectedComplaint && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
                    <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-2">
                            #{selectedComplaint.id}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <CategoryBadge category={selectedComplaint.category} />
                            <PriorityBadge priority={selectedComplaint.priority} />
                            <StatusBadge status={selectedComplaint.status} />
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedComplaint(null)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <X size={20} className="text-gray-500" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {selectedComplaint.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{selectedComplaint.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Map Info */}
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Click on any pin to view complaint details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
