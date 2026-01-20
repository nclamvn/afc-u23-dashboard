import { Position } from '@/data/types';
import { getPositionColor } from '@/lib/utils';

interface PositionBadgeProps {
  position: Position;
  className?: string;
}

const positionLabels: Record<Position, string> = {
  GK: 'Goalkeeper',
  DF: 'Defender',
  MF: 'Midfielder',
  FW: 'Forward',
};

export default function PositionBadge({ position, className = '' }: PositionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPositionColor(position)} ${className}`}
    >
      {positionLabels[position]}
    </span>
  );
}
