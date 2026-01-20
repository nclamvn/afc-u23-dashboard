import Link from 'next/link';
import { Player } from '@/data/types';
import { getPositionColor } from '@/lib/utils';
import RatingBadge from './RatingBadge';
import PlayerImage from './PlayerImage';
import { Crown, Sparkles, TrendingUp } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  team: 'vietnam' | 'china';
}

export default function PlayerCard({ player, team }: PlayerCardProps) {
  const positionShort: Record<string, string> = {
    GK: 'GK',
    DF: 'DF',
    MF: 'MF',
    FW: 'FW',
  };

  return (
    <Link
      href={`/${team}/${player.id}`}
      className="group relative block"
    >
      {/* Glass card */}
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-3 md:p-5 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/[0.03] via-transparent to-[#bf5af2]/[0.03] pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center">
          {/* Avatar with Captain/Star Badge */}
          <div className="relative mb-2 md:mb-3">
            <PlayerImage
              name={player.name}
              size={56}
              className="w-14 h-14 md:w-[70px] md:h-[70px]"
            />

            {/* Captain/Star Badge */}
            {player.isCaptain && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#ffd60a] to-[#ff9f0a] text-black rounded-lg p-1 shadow-lg shadow-[#ffd60a]/30">
                <Crown size={10} />
              </div>
            )}
            {player.isStar && !player.isCaptain && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#bf5af2] to-[#5e5ce6] text-white rounded-lg p-1 shadow-lg shadow-[#bf5af2]/30">
                <Sparkles size={10} />
              </div>
            )}
          </div>

          {/* Number & Position Badge - Below avatar */}
          <div className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider mb-2 md:mb-3 ${getPositionColor(player.position)}`}>
            #{player.number} • {positionShort[player.position]}
          </div>

          {/* Name */}
          <h3 className="font-semibold text-white/95 text-xs md:text-sm mb-0.5 md:mb-1 line-clamp-1 group-hover:text-white transition-colors">
            {player.name}
          </h3>

          {/* Club */}
          <p className="text-white/40 text-[10px] md:text-xs mb-2 md:mb-3 line-clamp-1">
            {player.club}
          </p>

          {/* Rating */}
          <RatingBadge rating={player.rating} size="sm" />

          {/* Tournament Stats */}
          {(player.tournamentGoals > 0 || player.tournamentAssists > 0) && (
            <div className="flex items-center justify-center gap-2 md:gap-3 mt-2 md:mt-3 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/[0.03]">
              {player.tournamentGoals > 0 && (
                <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                  <span className="text-[#30d158] font-semibold">{player.tournamentGoals}</span>
                  <span className="text-white/40">G</span>
                </span>
              )}
              {player.tournamentAssists > 0 && (
                <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                  <span className="text-[#64d2ff] font-semibold">{player.tournamentAssists}</span>
                  <span className="text-white/40">A</span>
                </span>
              )}
              {(player.tournamentGoals > 0 || player.tournamentAssists > 0) && (
                <TrendingUp size={10} className="text-white/30 hidden md:block" />
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
