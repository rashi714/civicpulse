import React from 'react';
import { Circle, Clock, Zap, CheckCircle2 } from 'lucide-react';

interface TimelineProps {
  currentStage: 'submitted' | 'assigned' | 'in-progress' | 'resolved';
}

export function Timeline({ currentStage }: TimelineProps) {
  const stages = [
    { id: 'submitted', label: 'Submitted', icon: Circle },
    { id: 'assigned', label: 'Assigned', icon: Clock },
    { id: 'in-progress', label: 'In Progress', icon: Zap },
    { id: 'resolved', label: 'Resolved', icon: CheckCircle2 },
  ];

  const currentIndex = stages.findIndex(s => s.id === currentStage);

  return (
    <div className="relative py-6">
      {/* Progress line */}
      <div className="absolute top-11 left-0 right-0 h-1 bg-navy-100 rounded-full" style={{ marginLeft: '10%', marginRight: '10%' }}>
        <div 
          className="h-full bg-gradient-teal rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex items-start justify-between">
        {stages.map((stage, index) => {
          const isCompleted = index <= currentIndex;
          const isActive = index === currentIndex;
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="flex flex-col items-center flex-1">
              {/* Circle */}
              <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                isCompleted 
                  ? 'bg-gradient-teal border-teal-400 shadow-lg glow-teal' 
                  : 'bg-white border-navy-200'
              }`}>
                {isCompleted ? (
                  <Icon className="text-white" size={24} />
                ) : (
                  <span className="text-navy-400 text-sm font-semibold">{index + 1}</span>
                )}
                
                {/* Pulse effect for active stage */}
                {isActive && (
                  <div className="absolute inset-0 bg-teal-400 rounded-2xl animate-pulse-subtle opacity-20" />
                )}
              </div>
              
              {/* Label */}
              <p className={`mt-3 text-sm font-semibold text-center transition-colors ${
                isActive ? 'text-teal-600' : isCompleted ? 'text-navy-900' : 'text-navy-400'
              }`}>
                {stage.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
