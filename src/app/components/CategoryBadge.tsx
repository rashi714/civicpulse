import React from 'react';

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-navy-50 text-navy-700 border border-navy-200">
      {category}
    </span>
  );
}
