import DashboardLayout from '@/components/layout/DashboardLayout';
import PlayerCard from '@/components/ui/PlayerCard';
import PlayerImage from '@/components/ui/PlayerImage';
import { vietnamPlayers } from '@/data/players';
import { vietnamCoach } from '@/data/coaches';
import { Trophy, Users, Target, Shield } from 'lucide-react';

export default function VietnamTeamPage() {
  const goalkeepers = vietnamPlayers.filter(p => p.position === 'GK');
  const defenders = vietnamPlayers.filter(p => p.position === 'DF');
  const midfielders = vietnamPlayers.filter(p => p.position === 'MF');
  const forwards = vietnamPlayers.filter(p => p.position === 'FW');

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Vietnam U23' },
      ]}
    >
      {/* Team Header */}
      <div className="stat-card p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#da251d]/20 to-[#ffcd00]/20 flex items-center justify-center border border-white/10">
              <span className="text-3xl md:text-5xl">🇻🇳</span>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-white">VIETNAM U23</h1>
              <p className="text-white/60 text-xs md:text-base">
                AFC U23 Asian Cup 2026 - Semifinal
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1 md:mt-2 text-xs md:text-sm">
                <span className="text-white/40">
                  <span className="text-white font-medium">{vietnamCoach.formation}</span>
                </span>
                <span className="text-white/40 hidden sm:inline">
                  Style: <span className="text-white font-medium">{vietnamCoach.style}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-4 gap-2 md:flex md:gap-4 lg:gap-6">
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#30d158]">4</div>
              <div className="text-[10px] md:text-xs text-white/40">Wins</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ffd60a]">0</div>
              <div className="text-[10px] md:text-xs text-white/40">Draws</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ff375f]">0</div>
              <div className="text-[10px] md:text-xs text-white/40">Losses</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ff6b35]">12</div>
              <div className="text-[10px] md:text-xs text-white/40">Goals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Coach Section */}
      <div className="stat-card p-4 md:p-6 mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
          <Users size={18} className="text-[#ff6b35]" />
          Head Coach
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
          <PlayerImage
            name={vietnamCoach.name}
            size={80}
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl"
          />
          <div className="flex-1 text-center sm:text-left w-full">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-lg md:text-xl font-bold text-white">{vietnamCoach.name}</h3>
              <span className="text-lg">{vietnamCoach.flag}</span>
            </div>
            <p className="text-white/60 text-xs md:text-sm mb-3">
              {vietnamCoach.nationality} | Age: {vietnamCoach.age}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-3 md:mb-4">
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Win Rate</div>
                <div className="info-box-value text-sm md:text-base text-[#30d158]">{vietnamCoach.winRate}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Matches</div>
                <div className="info-box-value text-sm md:text-base">{vietnamCoach.totalMatches}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">U23 Win</div>
                <div className="info-box-value text-sm md:text-base text-[#30d158]">{vietnamCoach.u23WinRate}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Clean Sheets</div>
                <div className="info-box-value text-sm md:text-base">{vietnamCoach.cleanSheets}</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {vietnamCoach.achievements.map((achievement, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] text-[10px] md:text-xs font-medium border border-[#ff6b35]/20"
                >
                  <Trophy size={10} />
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="space-y-4 md:space-y-6">
        {/* Goalkeepers */}
        {goalkeepers.length > 0 && (
          <div>
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Shield size={18} className="text-[#30d158]" />
              Goalkeepers
              <span className="text-xs md:text-sm font-normal text-white/40 ml-1">({goalkeepers.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {goalkeepers.map((player) => (
                <PlayerCard key={player.id} player={player} team="vietnam" />
              ))}
            </div>
          </div>
        )}

        {/* Defenders */}
        {defenders.length > 0 && (
          <div>
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Shield size={18} className="text-[#0a84ff]" />
              Defenders
              <span className="text-xs md:text-sm font-normal text-white/40 ml-1">({defenders.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {defenders.map((player) => (
                <PlayerCard key={player.id} player={player} team="vietnam" />
              ))}
            </div>
          </div>
        )}

        {/* Midfielders */}
        {midfielders.length > 0 && (
          <div>
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Target size={18} className="text-[#bf5af2]" />
              Midfielders
              <span className="text-xs md:text-sm font-normal text-white/40 ml-1">({midfielders.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {midfielders.map((player) => (
                <PlayerCard key={player.id} player={player} team="vietnam" />
              ))}
            </div>
          </div>
        )}

        {/* Forwards */}
        {forwards.length > 0 && (
          <div>
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
              <Target size={18} className="text-[#ff375f]" />
              Forwards
              <span className="text-xs md:text-sm font-normal text-white/40 ml-1">({forwards.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
              {forwards.map((player) => (
                <PlayerCard key={player.id} player={player} team="vietnam" />
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
