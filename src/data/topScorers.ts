import { TopScorer } from './types';

export const topScorers: TopScorer[] = [
  { rank: 1, name: 'Ryunosuke Sato', flag: '🇯🇵', team: 'Japan', goals: 4 },
  { rank: 2, name: 'Nguyễn Đình Bắc', flag: '🇻🇳', team: 'Vietnam', goals: 3, playerId: 'vn-7', highlight: true },
  { rank: 3, name: 'Shusuke Furuya', flag: '🇯🇵', team: 'Japan', goals: 3 },
  { rank: 4, name: 'Baek Ga-on', flag: '🇰🇷', team: 'Korea Republic', goals: 2 },
  { rank: 5, name: 'Lee Hyun-yong', flag: '🇰🇷', team: 'Korea Republic', goals: 2 },
  { rank: 6, name: 'Nguyễn Quốc Việt', flag: '🇻🇳', team: 'Vietnam', goals: 2, playerId: 'vn-9' },
  { rank: 7, name: 'Behram Abduweli', flag: '🇨🇳', team: 'China', goals: 1, playerId: 'cn-9' },
  { rank: 8, name: 'Khuất Văn Khang', flag: '🇻🇳', team: 'Vietnam', goals: 1, playerId: 'vn-11' },
  { rank: 9, name: 'Viktor Lê', flag: '🇻🇳', team: 'Vietnam', goals: 1, playerId: 'vn-14' },
  { rank: 10, name: 'Bùi Hoàng Việt Anh', flag: '🇻🇳', team: 'Vietnam', goals: 1, playerId: 'vn-4' },
];

export function getTopScorersByTeam(team?: string): TopScorer[] {
  if (!team) return topScorers;
  return topScorers.filter(s => s.team.toLowerCase() === team.toLowerCase());
}
