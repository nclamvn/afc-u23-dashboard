import { notFound } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import InfoBox from '@/components/ui/InfoBox';
import PositionBadge from '@/components/ui/PositionBadge';
import StatCard from '@/components/ui/StatCard';
import MatchHistoryTable from '@/components/ui/MatchHistoryTable';
import CareerHistoryTable from '@/components/ui/CareerHistoryTable';
import TopScorersTable from '@/components/ui/TopScorersTable';
import MarketValueChart from '@/components/charts/MarketValueChart';
import GoalsDonutChart from '@/components/charts/GoalsDonutChart';
import { getPlayerById, vietnamPlayers } from '@/data/players';
import { topScorers } from '@/data/topScorers';
import PlayerImage from '@/components/ui/PlayerImage';
import { Crown, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ playerId: string }>;
}

export default async function VietnamPlayerPage({ params }: PageProps) {
  const { playerId } = await params;
  const player = getPlayerById(playerId);

  if (!player) {
    notFound();
  }

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Vietnam U23', href: '/vietnam' },
        { label: player.name },
      ]}
    >
      {/* Player Header Section */}
      <div className="stat-card p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Player Photo */}
          <div className="relative">
            <PlayerImage
              name={player.name}
              size={280}
              className="w-64 h-72 rounded-2xl"
            />
            {player.isCaptain && (
              <div className="absolute top-4 right-4 bg-gradient-to-br from-[#ffd60a] to-[#ff9f0a] text-black rounded-xl p-2 shadow-lg">
                <Crown size={20} />
              </div>
            )}
            {player.isStar && !player.isCaptain && (
              <div className="absolute top-4 right-4 bg-gradient-to-br from-[#bf5af2] to-[#5e5ce6] text-white rounded-xl p-2 shadow-lg">
                <Sparkles size={20} />
              </div>
            )}
          </div>

          {/* Player Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{player.name}</h1>
                  <span className="text-2xl">{player.flag}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#ff6b35]">#{player.number}</span>
                  <PositionBadge position={player.position} />
                  {player.isCaptain && (
                    <span className="px-2 py-1 rounded-full bg-[#ffd60a]/20 text-[#ffd60a] text-xs font-medium border border-[#ffd60a]/30">
                      Captain
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Info Boxes Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <InfoBox
                label="Date of Birth"
                value={player.dateOfBirth}
                subValue={`${player.age}`}
              />
              <InfoBox label="Position" value={player.position === 'GK' ? 'Goalkeeper' : player.position === 'DF' ? 'Defender' : player.position === 'MF' ? 'Midfielder' : 'Forward'} />
              <InfoBox label="Place of Birth" value={player.placeOfBirth || 'N/A'} />
              <InfoBox label="Club" value={player.club} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoBox label="Height" value={`${player.height} cm`} />
              <InfoBox label="Preferred Foot" value={player.preferredFoot} />
              <InfoBox label="Int. Matches" value={player.intMatches} />
              <InfoBox label="Int. Goals" value={player.intGoals} />
            </div>
          </div>

          {/* Team Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#da251d]/20 to-[#ffcd00]/20 flex items-center justify-center border border-white/10">
              <span className="text-4xl">{player.flag}</span>
            </div>
            <span className="text-sm text-white/60">VIETNAM U23</span>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Market Value */}
        <StatCard title="Market Value (mln Euro)" actions={{ external: true }}>
          <MarketValueChart
            data={player.marketValueHistory || []}
            currentValue={player.marketValue}
          />
        </StatCard>

        {/* Career History */}
        <StatCard title="Career History" actions={{ chart: true, settings: true }}>
          <CareerHistoryTable career={player.careerHistory} />
        </StatCard>

        {/* Goals Donut */}
        <StatCard title="Goals in Tournament">
          <GoalsDonutChart
            tournamentGoals={player.tournamentGoals}
            intGoals={player.intGoals}
          />
          <div className="mt-4 flex justify-around text-center">
            <div>
              <div className="text-xl font-bold text-[#ff6b35]">{player.tournamentGoals}</div>
              <div className="text-xs text-white/40">AFC U23</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0a84ff]">{Math.max(0, player.intGoals - player.tournamentGoals)}</div>
              <div className="text-xs text-white/40">Other Int&apos;l</div>
            </div>
          </div>
        </StatCard>
      </div>

      {/* Tournament Stats */}
      <div className="stat-card p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Tournament Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="info-box text-center">
            <div className="info-box-label">Appearances</div>
            <div className="info-box-value">{player.tournamentApps}</div>
          </div>
          <div className="info-box text-center">
            <div className="info-box-label">Goals</div>
            <div className="info-box-value text-[#30d158]">{player.tournamentGoals}</div>
          </div>
          <div className="info-box text-center">
            <div className="info-box-label">Assists</div>
            <div className="info-box-value text-[#0a84ff]">{player.tournamentAssists}</div>
          </div>
          <div className="info-box text-center">
            <div className="info-box-label">Minutes</div>
            <div className="info-box-value">{player.tournamentMinutes}&apos;</div>
          </div>
          <div className="info-box text-center">
            <div className="info-box-label">Yellow Cards</div>
            <div className="info-box-value text-[#ffd60a]">{player.yellowCards}</div>
          </div>
          <div className="info-box text-center">
            <div className="info-box-label">Red Cards</div>
            <div className="info-box-value text-[#ff375f]">{player.redCards}</div>
          </div>
        </div>
      </div>

      {/* Match History */}
      <StatCard title="Match History" className="mb-6" actions={{ external: true }}>
        <MatchHistoryTable matches={player.matchHistory} />
      </StatCard>

      {/* Top Scorers */}
      <StatCard title="AFC U23 Asian Cup 2026 Best Scorers" actions={{ external: true }}>
        <TopScorersTable scorers={topScorers.slice(0, 6)} highlightTeam="Vietnam" />
      </StatCard>
    </DashboardLayout>
  );
}

export async function generateStaticParams() {
  return vietnamPlayers.map((player) => ({
    playerId: player.id,
  }));
}
