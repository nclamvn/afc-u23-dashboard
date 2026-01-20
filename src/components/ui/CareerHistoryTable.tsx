import { CareerEntry } from '@/data/types';

interface CareerHistoryTableProps {
  career: CareerEntry[];
}

export default function CareerHistoryTable({ career }: CareerHistoryTableProps) {
  return (
    <div className="space-y-2">
      {career.map((entry, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 border-b border-[var(--border-color)] last:border-0"
        >
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-muted)] text-sm w-20">{entry.period}</span>
            <span className="text-lg">{entry.clubFlag}</span>
            <span className="text-white font-medium">{entry.club}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-[var(--text-secondary)]">
              <span className="font-medium text-white">{entry.matches}</span> apps
            </span>
            <span className="text-[var(--text-secondary)]">
              <span className="font-medium text-green-400">{entry.goals}</span> goals
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
