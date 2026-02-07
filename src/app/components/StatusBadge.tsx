import React from 'react';
import { Circle, Clock, Zap, CheckCircle2 } from 'lucide-react';

interface StatusBadgeProps {
  status: 'submitted' | 'assigned' | 'in-progress' | 'resolved';
  showIcon?: boolean;
}

export function StatusBadge({ status, showIcon = false }: StatusBadgeProps) {
  const configs = {
    submitted: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      label: 'Submitted',
      icon: Circle
    },
    assigned: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      label: 'Assigned',
      icon: Clock
    },
    'in-progress': {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      label: 'In Progress',
      icon: Zap
    },
    resolved: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      label: 'Resolved',
      icon: CheckCircle2
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} border ${config.border}`}>
      {showIcon && <Icon size={12} />}
      {config.label}
    </span>
  );
}
