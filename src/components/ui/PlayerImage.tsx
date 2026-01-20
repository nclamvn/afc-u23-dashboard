'use client';

import { Shirt } from 'lucide-react';

interface PlayerImageProps {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}

export default function PlayerImage({ size = 200, className = '' }: PlayerImageProps) {
  // Calculate icon size based on container size
  const iconSize = Math.round(size * 0.5);

  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-white/20 border-dashed bg-transparent ${className}`}
    >
      <Shirt
        size={iconSize}
        className="text-white/40"
        strokeWidth={1.5}
      />
    </div>
  );
}
