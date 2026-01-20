import { Star } from 'lucide-react';

interface RatingBadgeProps {
  rating: number;
  showStar?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function RatingBadge({ rating, showStar = true, size = 'md' }: RatingBadgeProps) {
  const getRatingStyles = (rating: number) => {
    if (rating >= 8) return {
      text: 'text-[#30d158]',
      bg: 'bg-[#30d158]/10',
      border: 'border-[#30d158]/20'
    };
    if (rating >= 7) return {
      text: 'text-[#ffd60a]',
      bg: 'bg-[#ffd60a]/10',
      border: 'border-[#ffd60a]/20'
    };
    if (rating >= 6) return {
      text: 'text-[#ff9f0a]',
      bg: 'bg-[#ff9f0a]/10',
      border: 'border-[#ff9f0a]/20'
    };
    return {
      text: 'text-[#ff375f]',
      bg: 'bg-[#ff375f]/10',
      border: 'border-[#ff375f]/20'
    };
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  const starSizes = {
    sm: 10,
    md: 12,
    lg: 14,
  };

  const styles = getRatingStyles(rating);

  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-lg border ${styles.text} ${styles.bg} ${styles.border} ${sizeClasses[size]}`}>
      {showStar && <Star size={starSizes[size]} className="fill-current" />}
      {rating.toFixed(1)}
    </span>
  );
}
