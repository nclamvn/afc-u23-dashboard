import Link from 'next/link';
import { TopScorer } from '@/data/types';

interface TopScorersTableProps {
  scorers: TopScorer[];
  highlightTeam?: string;
}

export default function TopScorersTable({ scorers, highlightTeam }: TopScorersTableProps) {
  return (
    <div className="space-y-1">
      {scorers.map((scorer) => {
        const isHighlighted = scorer.highlight || (highlightTeam && scorer.team === highlightTeam);

        const content = (
          <div
            className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
              isHighlighted
                ? 'bg-orange-500/10 border border-orange-500/30'
                : 'hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-6 text-center text-sm font-medium ${
                scorer.rank <= 3 ? 'text-orange-400' : 'text-[var(--text-muted)]'
              }`}>
                {scorer.rank}.
              </span>
              <span className="text-lg">{scorer.flag}</span>
              <span className={`font-medium ${isHighlighted ? 'text-orange-400' : 'text-white'}`}>
                {scorer.name}
              </span>
            </div>
            <span className="text-lg font-bold text-green-400">{scorer.goals}</span>
          </div>
        );

        if (scorer.playerId) {
          const team = scorer.playerId.startsWith('vn') ? 'vietnam' : 'china';
          return (
            <Link key={scorer.rank} href={`/${team}/${scorer.playerId}`}>
              {content}
            </Link>
          );
        }

        return <div key={scorer.rank}>{content}</div>;
      })}
    </div>
  );
}
