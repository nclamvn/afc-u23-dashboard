import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/ui/StatCard';
import TopScorersTable from '@/components/ui/TopScorersTable';
import PlayerImage from '@/components/ui/PlayerImage';
import { vietnamPlayers, chinaPlayers } from '@/data/players';
import { vietnamCoach, chinaCoach } from '@/data/coaches';
import { topScorers } from '@/data/topScorers';
import { Swords, TrendingUp } from 'lucide-react';

export default function H2HPage() {
  // Calculate team stats
  const vnStats = {
    avgAge: Math.round(vietnamPlayers.reduce((acc, p) => acc + p.age, 0) / vietnamPlayers.length * 10) / 10,
    avgRating: Math.round(vietnamPlayers.reduce((acc, p) => acc + p.rating, 0) / vietnamPlayers.length * 10) / 10,
    totalGoals: vietnamPlayers.reduce((acc, p) => acc + p.tournamentGoals, 0),
    totalAssists: vietnamPlayers.reduce((acc, p) => acc + p.tournamentAssists, 0),
    totalMarketValue: '2.3M',
    wins: 4,
    draws: 0,
    losses: 0,
  };

  const cnStats = {
    avgAge: Math.round(chinaPlayers.reduce((acc, p) => acc + p.age, 0) / chinaPlayers.length * 10) / 10,
    avgRating: Math.round(chinaPlayers.reduce((acc, p) => acc + p.rating, 0) / chinaPlayers.length * 10) / 10,
    totalGoals: chinaPlayers.reduce((acc, p) => acc + p.tournamentGoals, 0),
    totalAssists: chinaPlayers.reduce((acc, p) => acc + p.tournamentAssists, 0),
    totalMarketValue: '3.5M',
    wins: 1,
    draws: 3,
    losses: 0,
  };

  const vnTopPlayers = vietnamPlayers.sort((a, b) => b.rating - a.rating).slice(0, 3);
  const cnTopPlayers = chinaPlayers.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Head to Head' },
      ]}
    >
      {/* H2H Header */}
      <div className="stat-card p-4 md:p-8 mb-4 md:mb-6">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Vietnam */}
          <div className="text-center flex-1">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#da251d]/20 to-[#ffcd00]/20 flex items-center justify-center border border-white/10">
              <span className="text-3xl md:text-5xl">🇻🇳</span>
            </div>
            <h2 className="text-sm md:text-2xl font-bold text-white">Vietnam U23</h2>
            <p className="text-white/40 text-xs md:text-base">{vietnamCoach.formation}</p>
          </div>

          {/* VS */}
          <div className="text-center px-2 md:px-4">
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <Swords size={24} className="md:w-10 md:h-10 text-[#ff6b35]" />
            </div>
            <div className="text-xl md:text-4xl font-bold text-white">VS</div>
            <p className="text-white/60 text-xs md:text-base mt-1 md:mt-2">Semifinal</p>
            <p className="text-white/40 text-[10px] md:text-sm hidden sm:block">20/01/2026 - 22:30</p>
          </div>

          {/* China */}
          <div className="text-center flex-1">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#de2910]/20 to-[#ffde00]/20 flex items-center justify-center border border-white/10">
              <span className="text-3xl md:text-5xl">🇨🇳</span>
            </div>
            <h2 className="text-sm md:text-2xl font-bold text-white">China U23</h2>
            <p className="text-white/40 text-xs md:text-base">{chinaCoach.formation}</p>
          </div>
        </div>
      </div>

      {/* Stats Comparison */}
      <div className="stat-card p-4 md:p-6 mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
          <TrendingUp size={18} className="text-[#ff6b35]" />
          Statistics Comparison
        </h2>

        <div className="space-y-4">
          {/* Win Rate */}
          <ComparisonBar
            label="Tournament Record"
            leftValue={`${vnStats.wins}W ${vnStats.draws}D ${vnStats.losses}L`}
            rightValue={`${cnStats.wins}W ${cnStats.draws}D ${cnStats.losses}L`}
            leftPercent={100}
            rightPercent={66}
          />

          {/* Goals */}
          <ComparisonBar
            label="Goals Scored"
            leftValue={vnStats.totalGoals}
            rightValue={cnStats.totalGoals}
            leftPercent={(vnStats.totalGoals / Math.max(vnStats.totalGoals, cnStats.totalGoals)) * 100}
            rightPercent={(cnStats.totalGoals / Math.max(vnStats.totalGoals, cnStats.totalGoals)) * 100}
          />

          {/* Assists */}
          <ComparisonBar
            label="Assists"
            leftValue={vnStats.totalAssists}
            rightValue={cnStats.totalAssists}
            leftPercent={(vnStats.totalAssists / Math.max(vnStats.totalAssists, cnStats.totalAssists)) * 100}
            rightPercent={(cnStats.totalAssists / Math.max(vnStats.totalAssists, cnStats.totalAssists)) * 100}
          />

          {/* Average Rating */}
          <ComparisonBar
            label="Average Rating"
            leftValue={vnStats.avgRating}
            rightValue={cnStats.avgRating}
            leftPercent={(vnStats.avgRating / 10) * 100}
            rightPercent={(cnStats.avgRating / 10) * 100}
          />

          {/* Average Age */}
          <ComparisonBar
            label="Average Age"
            leftValue={vnStats.avgAge}
            rightValue={cnStats.avgAge}
            leftPercent={50}
            rightPercent={50}
          />

          {/* Market Value */}
          <ComparisonBar
            label="Total Market Value"
            leftValue={vnStats.totalMarketValue}
            rightValue={cnStats.totalMarketValue}
            leftPercent={40}
            rightPercent={60}
          />
        </div>
      </div>

      {/* Coaches Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <StatCard title="Vietnam Coach">
          <div className="flex items-center gap-4">
            <PlayerImage
              name={vietnamCoach.name}
              size={80}
              className="w-20 h-20 rounded-2xl"
            />
            <div>
              <h3 className="text-lg font-bold text-white">{vietnamCoach.name}</h3>
              <p className="text-white/60 text-sm">{vietnamCoach.flag} {vietnamCoach.nationality}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-[#30d158]">Win: {vietnamCoach.winRate}</span>
                <span className="text-white/40">{vietnamCoach.totalMatches} matches</span>
              </div>
            </div>
          </div>
        </StatCard>

        <StatCard title="China Coach">
          <div className="flex items-center gap-4">
            <PlayerImage
              name={chinaCoach.name}
              size={80}
              className="w-20 h-20 rounded-2xl"
            />
            <div>
              <h3 className="text-lg font-bold text-white">{chinaCoach.name}</h3>
              <p className="text-white/60 text-sm">{chinaCoach.flag} {chinaCoach.nationality}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-[#ffd60a]">Win: {chinaCoach.winRate}</span>
                <span className="text-white/40">{chinaCoach.totalMatches} matches</span>
              </div>
            </div>
          </div>
        </StatCard>
      </div>

      {/* Key Players */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <StatCard title="Vietnam Key Players">
          <div className="space-y-3">
            {vnTopPlayers.map((player, index) => (
              <div key={player.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
                <span className="text-[#ff6b35] font-bold w-6">{index + 1}</span>
                <PlayerImage
                  name={player.name}
                  size={40}
                  className="w-10 h-10 rounded-xl"
                />
                <div className="flex-1">
                  <p className="text-white font-medium">{player.name}</p>
                  <p className="text-xs text-white/40">{player.position} | {player.club}</p>
                </div>
                <span className="text-[#30d158] font-bold">{player.rating}</span>
              </div>
            ))}
          </div>
        </StatCard>

        <StatCard title="China Key Players">
          <div className="space-y-3">
            {cnTopPlayers.map((player, index) => (
              <div key={player.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
                <span className="text-[#ff375f] font-bold w-6">{index + 1}</span>
                <PlayerImage
                  name={player.name}
                  size={40}
                  className="w-10 h-10 rounded-xl"
                />
                <div className="flex-1">
                  <p className="text-white font-medium">{player.name}</p>
                  <p className="text-xs text-white/40">{player.position} | {player.club}</p>
                </div>
                <span className="text-[#30d158] font-bold">{player.rating}</span>
              </div>
            ))}
          </div>
        </StatCard>
      </div>

      {/* Tournament Top Scorers */}
      <StatCard title="Tournament Top Scorers" actions={{ external: true }}>
        <TopScorersTable scorers={topScorers} />
      </StatCard>
    </DashboardLayout>
  );
}

interface ComparisonBarProps {
  label: string;
  leftValue: string | number;
  rightValue: string | number;
  leftPercent: number;
  rightPercent: number;
}

function ComparisonBar({ label, leftValue, rightValue, leftPercent, rightPercent }: ComparisonBarProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-4 items-center">
      <div className="text-right">
        <div className="text-white font-medium text-xs md:text-base">{leftValue}</div>
        <div className="h-1.5 md:h-2 bg-white/[0.05] rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff4444] rounded-full float-right"
            style={{ width: `${leftPercent}%` }}
          />
        </div>
      </div>
      <div className="text-center text-[10px] md:text-sm text-white/40 min-w-[60px] md:min-w-[120px]">
        {label}
      </div>
      <div className="text-left">
        <div className="text-white font-medium text-xs md:text-base">{rightValue}</div>
        <div className="h-1.5 md:h-2 bg-white/[0.05] rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-[#ff375f] to-[#dc143c] rounded-full"
            style={{ width: `${rightPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
