import React from 'react';
import { AlertCircle, TrendingUp, Minus } from 'lucide-react';

interface PriorityBadgeProps {
  priority: 'high' | 'medium' | 'low';
  showIcon?: boolean;
}

export function PriorityBadge({ priority, showIcon = false }: PriorityBadgeProps) {
  const configs = {
    high: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      icon: AlertCircle
    },
    medium: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-200',
      icon: TrendingUp
    },
    low: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      icon: Minus
    },
  };

  const config = configs[priority];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} border ${config.border}`}>
      {showIcon && <Icon size={12} />}
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
}
