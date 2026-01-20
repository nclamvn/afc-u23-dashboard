import DashboardLayout from '@/components/layout/DashboardLayout';
import PlayerCard from '@/components/ui/PlayerCard';
import PlayerImage from '@/components/ui/PlayerImage';
import { chinaPlayers } from '@/data/players';
import { chinaCoach } from '@/data/coaches';
import { Trophy, Users, Target, Shield } from 'lucide-react';

export default function ChinaTeamPage() {
  const goalkeepers = chinaPlayers.filter(p => p.position === 'GK');
  const defenders = chinaPlayers.filter(p => p.position === 'DF');
  const midfielders = chinaPlayers.filter(p => p.position === 'MF');
  const forwards = chinaPlayers.filter(p => p.position === 'FW');

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'China U23' },
      ]}
    >
      {/* Team Header */}
      <div className="stat-card p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#de2910]/20 to-[#ffde00]/20 flex items-center justify-center border border-white/10">
              <span className="text-3xl md:text-5xl">🇨🇳</span>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-white">CHINA U23</h1>
              <p className="text-white/60 text-xs md:text-base">
                AFC U23 Asian Cup 2026 - Semifinal
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1 md:mt-2 text-xs md:text-sm">
                <span className="text-white/40">
                  <span className="text-white font-medium">{chinaCoach.formation}</span>
                </span>
                <span className="text-white/40 hidden sm:inline">
                  Style: <span className="text-white font-medium">{chinaCoach.style}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-4 gap-2 md:flex md:gap-4 lg:gap-6">
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#30d158]">1</div>
              <div className="text-[10px] md:text-xs text-white/40">Wins</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ffd60a]">3</div>
              <div className="text-[10px] md:text-xs text-white/40">Draws</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ff375f]">0</div>
              <div className="text-[10px] md:text-xs text-white/40">Losses</div>
            </div>
            <div className="text-center px-2 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/[0.03]">
              <div className="text-lg md:text-2xl font-bold text-[#ff6b35]">5</div>
              <div className="text-[10px] md:text-xs text-white/40">Goals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Coach Section */}
      <div className="stat-card p-4 md:p-6 mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
          <Users size={18} className="text-[#ff375f]" />
          Head Coach
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
          <PlayerImage
            name={chinaCoach.name}
            size={80}
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl"
          />
          <div className="flex-1 text-center sm:text-left w-full">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-lg md:text-xl font-bold text-white">{chinaCoach.name}</h3>
              <span className="text-lg">{chinaCoach.flag}</span>
            </div>
            <p className="text-white/60 text-xs md:text-sm mb-3">
              {chinaCoach.nationality} | Age: {chinaCoach.age}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-3 md:mb-4">
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Win Rate</div>
                <div className="info-box-value text-sm md:text-base text-[#ffd60a]">{chinaCoach.winRate}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Matches</div>
                <div className="info-box-value text-sm md:text-base">{chinaCoach.totalMatches}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">U23 Win</div>
                <div className="info-box-value text-sm md:text-base text-[#30d158]">{chinaCoach.u23WinRate}</div>
              </div>
              <div className="info-box text-center p-2 md:p-4">
                <div className="info-box-label text-[9px] md:text-[11px]">Clean Sheets</div>
                <div className="info-box-value text-sm md:text-base text-[#30d158]">{chinaCoach.cleanSheets}</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {chinaCoach.achievements.map((achievement, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded-full bg-[#ff375f]/15 text-[#ff375f] text-[10px] md:text-xs font-medium border border-[#ff375f]/20"
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
                <PlayerCard key={player.id} player={player} team="china" />
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
                <PlayerCard key={player.id} player={player} team="china" />
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
                <PlayerCard key={player.id} player={player} team="china" />
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
                <PlayerCard key={player.id} player={player} team="china" />
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
