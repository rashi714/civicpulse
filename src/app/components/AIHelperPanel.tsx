import React from 'react';
import { Sparkles, Brain, Zap, FileText } from 'lucide-react';

interface AIHelperPanelProps {
  suggestedDepartment?: string;
  priority?: 'high' | 'medium' | 'low';
  summary?: string;
}

export function AIHelperPanel({ suggestedDepartment, priority, summary }: AIHelperPanelProps) {
  const priorityColors = {
    high: 'text-red-600',
    medium: 'text-orange-600',
    low: 'text-emerald-600',
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-teal-200/50 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-premium-lg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-teal rounded-2xl blur-sm opacity-50" />
            <div className="relative w-12 h-12 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={22} />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-navy-900 text-lg">AI Assistant</h3>
            <p className="text-xs text-navy-600">Powered by machine learning</p>
          </div>
        </div>

        {suggestedDepartment ? (
          <div className="space-y-5">
            {/* Suggested Department */}
            <div className="group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                  <Brain className="text-teal-600" size={16} />
                </div>
                <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide">
                  Suggested Department
                </p>
              </div>
              <p className="text-base font-bold text-navy-900 ml-10">{suggestedDepartment}</p>
            </div>

            {/* Priority Level */}
            {priority && (
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Zap className="text-orange-600" size={16} />
                  </div>
                  <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide">
                    Priority Level
                  </p>
                </div>
                <div className="ml-10">
                  <span className={`text-base font-bold ${priorityColors[priority]}`}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                  </span>
                </div>
              </div>
            )}

            {/* Auto-Summary */}
            {summary && (
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText className="text-blue-600" size={16} />
                  </div>
                  <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide">
                    Auto-Summary
                  </p>
                </div>
                <p className="text-sm text-navy-700 leading-relaxed ml-10">{summary}</p>
              </div>
            )}

            {/* AI Badge */}
            <div className="pt-4 border-t border-teal-200">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-teal-200 shadow-sm">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse-subtle" />
                <span className="text-xs font-semibold text-navy-700">AI Analysis Complete</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-20 animate-pulse-subtle" />
              <Sparkles className="relative text-teal-500" size={48} />
            </div>
            <p className="text-sm text-navy-600 leading-relaxed max-w-xs mx-auto">
              Fill in the form and our AI will analyze your complaint to suggest the right department and priority level.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
