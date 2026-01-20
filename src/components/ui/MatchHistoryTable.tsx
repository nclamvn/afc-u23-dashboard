import { MatchPerformance } from '@/data/types';
import { getResultColor, getVenueLabel } from '@/lib/utils';

interface MatchHistoryTableProps {
  matches: MatchPerformance[];
}

export default function MatchHistoryTable({ matches }: MatchHistoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="data-table">
        <thead>
          <tr>
            <th>Matchday</th>
            <th>Venue</th>
            <th>For</th>
            <th>Against</th>
            <th>Result</th>
            <th className="text-center">G</th>
            <th className="text-center">A</th>
            <th className="text-center">Min</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td className="font-medium">{match.matchday}</td>
              <td>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[var(--bg-card)] text-xs">
                  {match.venue}
                </span>
              </td>
              <td>
                {match.team}
                <span className="text-[var(--text-muted)]"> ({match.teamRank}.)</span>
              </td>
              <td>
                {match.opponent}
                <span className="text-[var(--text-muted)]"> ({match.opponentRank}.)</span>
              </td>
              <td>
                <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getResultColor(match.resultType)}`}>
                  {match.result}
                </span>
              </td>
              <td className="text-center">
                {match.goals > 0 ? (
                  <span className="text-green-400 font-medium">{match.goals}</span>
                ) : (
                  <span className="text-[var(--text-muted)]">-</span>
                )}
              </td>
              <td className="text-center">
                {match.assists > 0 ? (
                  <span className="text-blue-400 font-medium">{match.assists}</span>
                ) : (
                  <span className="text-[var(--text-muted)]">-</span>
                )}
              </td>
              <td className="text-center text-[var(--text-secondary)]">
                {match.minutes}'
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
