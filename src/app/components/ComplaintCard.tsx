import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';

interface ComplaintCardProps {
  id: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  status: 'submitted' | 'assigned' | 'in-progress' | 'resolved';
  description: string;
  date: string;
  location?: string;
  onClick?: () => void;
}

export function ComplaintCard({
  id,
  category,
  priority,
  status,
  description,
  date,
  location,
  onClick
}: ComplaintCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-6 border border-navy-100 hover:border-teal-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-premium"
      onClick={onClick}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-cyan-50/0 group-hover:from-teal-50/50 group-hover:to-cyan-50/30 rounded-2xl transition-all duration-300" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <CategoryBadge category={category} />
            <PriorityBadge priority={priority} />
            <StatusBadge status={status} />
          </div>
          <ArrowRight className="text-navy-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" size={20} />
        </div>

        {/* ID */}
        <p className="font-bold text-navy-900 mb-3 text-lg">#{id}</p>

        {/* Description */}
        <p className="text-sm text-navy-600 mb-4 line-clamp-2 leading-relaxed">{description}</p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-navy-500">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
