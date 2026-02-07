import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Clock, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { ComplaintCard } from '../components/ComplaintCard';

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const stats = [
    {
      label: 'Total Complaints',
      value: '247',
      change: '+12.5%',
      icon: TrendingUp,
      gradient: 'from-blue-400 to-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      label: 'Pending',
      value: '45',
      change: '-8.2%',
      icon: Clock,
      gradient: 'from-orange-400 to-orange-600',
      bg: 'from-orange-50 to-orange-100'
    },
    {
      label: 'In Progress',
      value: '89',
      change: '+15.3%',
      icon: AlertCircle,
      gradient: 'from-yellow-400 to-yellow-600',
      bg: 'from-yellow-50 to-yellow-100'
    },
    {
      label: 'Resolved',
      value: '113',
      change: '+22.1%',
      icon: CheckCircle2,
      gradient: 'from-emerald-400 to-emerald-600',
      bg: 'from-emerald-50 to-emerald-100'
    }
  ];

  const mockComplaints = [
    {
      id: 'CP-2026-1042',
      category: 'Roads',
      priority: 'high' as const,
      status: 'in-progress' as const,
      description: 'Large pothole on Main Street causing traffic issues',
      date: 'Feb 5, 2026',
      location: 'Main St'
    },
    {
      id: 'CP-2026-1041',
      category: 'Sanitation',
      priority: 'medium' as const,
      status: 'submitted' as const,
      description: 'Overflowing garbage bins near Central Park',
      date: 'Feb 5, 2026',
      location: 'Central Park'
    },
    {
      id: 'CP-2026-1040',
      category: 'Water',
      priority: 'high' as const,
      status: 'assigned' as const,
      description: 'Water pipeline leak causing flooding in residential area',
      date: 'Feb 4, 2026',
      location: 'Oak Avenue'
    },
    {
      id: 'CP-2026-1039',
      category: 'Electricity',
      priority: 'low' as const,
      status: 'resolved' as const,
      description: 'Street light not working on Park Avenue',
      date: 'Feb 3, 2026',
      location: 'Park Ave'
    },
    {
      id: 'CP-2026-1038',
      category: 'Safety',
      priority: 'high' as const,
      status: 'in-progress' as const,
      description: 'Broken fence at public playground poses safety risk',
      date: 'Feb 3, 2026',
      location: 'Community Park'
    },
    {
      id: 'CP-2026-1037',
      category: 'Roads',
      priority: 'medium' as const,
      status: 'resolved' as const,
      description: 'Traffic signal malfunction at intersection',
      date: 'Feb 2, 2026',
      location: '5th & Main'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-teal-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy-200 mb-6 shadow-sm">
            <Sparkles className="text-teal-600" size={18} />
            <span className="text-sm font-semibold text-navy-900">Analytics Dashboard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Complaints Dashboard
          </h1>
          <p className="text-lg text-navy-600">
            Monitor and manage all reported issues across your city.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-50`} />
              <div className="relative glass rounded-3xl p-6 border border-white/50 shadow-premium hover:shadow-premium-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-1">
                      {stat.label}
                    </p>
                    <p className="text-4xl font-bold text-navy-900">{stat.value}</p>
                    <p className={`text-xs font-semibold mt-1 ${
                      stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="glass rounded-3xl p-6 shadow-premium mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-bold text-navy-900 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search complaints..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">All Categories</option>
                <option value="roads">Roads</option>
                <option value="sanitation">Sanitation</option>
                <option value="water">Water</option>
                <option value="electricity">Electricity</option>
                <option value="safety">Safety</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">All Status</option>
                <option value="submitted">Submitted</option>
                <option value="assigned">Assigned</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-semibold text-navy-600">
              Showing <span className="text-navy-900">{mockComplaints.length}</span> complaints
            </p>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-navy-400" />
              <select className="px-4 py-2 rounded-xl border border-navy-200 text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white">
                <option value="latest">Latest First</option>
                <option value="urgent">Urgent First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4">
            {mockComplaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                {...complaint}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
