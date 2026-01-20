import { Coach } from './types';

export const vietnamCoach: Coach = {
  id: 'coach-vn',
  name: 'Kim Sang-sik',
  image: 'https://static.bongda24h.vn/medias/original/2024/05/03/kim-sang-sik-0305115101.jpg',
  nationality: 'South Korea',
  flag: '🇰🇷',
  age: 49,
  dateOfBirth: '17/12/1976',
  height: 187,
  formation: '3-4-3',
  style: 'Pressing cao, kỷ luật phòng ngự, winning mentality',
  winRate: '62%',
  totalMatches: 143,
  u23WinRate: '100%',
  u23Matches: 12,
  u23Goals: 28,
  u23Conceded: 5,
  cleanSheets: '71%',
  avgPointsPerMatch: 2.06,
  achievements: [
    'SEA Games 33 (2025)',
    'AFF Cup 2025',
    'U23 Đông Nam Á 2025',
    'K-League (2021, 2022)',
    'FA Cup Hàn Quốc (2022)',
    'AFC Champions League (2006 - cầu thủ)',
  ],
  playerCareer: {
    position: 'Trung vệ',
    clubs: ['Seongnam Ilhwa Chunma', 'Jeonbuk Hyundai Motors'],
    years: '1999-2013',
    caps: 58,
    goals: 2,
    highlights: ['World Cup 2006', 'Olympic 2000', 'K-League 2x', 'ACL 2006'],
  },
  coachingCareer: [
    { period: '2014-2020', role: 'Trợ lý HLV', club: 'Jeonbuk Hyundai' },
    { period: '2020-2023', role: 'HLV trưởng', club: 'Jeonbuk Hyundai' },
    { period: '2024-nay', role: 'HLV trưởng', club: 'ĐT Việt Nam & U23' },
  ],
  tacticalNotes: 'Sử dụng 3-4-3 linh hoạt, pressing cao (top 10 K-League recoveries), chuyển đổi nhanh. 30% bàn thắng từ set-piece. Xoay tua 85% squad đều đặn. Cầu thủ chạy trung bình 11km/trận.',
};

export const chinaCoach: Coach = {
  id: 'coach-cn',
  name: 'Antonio Puche',
  nationality: 'Spain',
  flag: '🇪🇸',
  age: 53,
  dateOfBirth: '02/08/1972',
  height: 175,
  formation: '5-3-2',
  style: 'Phòng ngự chắc chắn, phản công nhanh, tinh thần chiến đấu',
  winRate: '43%',
  totalMatches: 76,
  u23WinRate: '67%',
  u23Matches: 6,
  u23Goals: 1,
  u23Conceded: 2,
  cleanSheets: '83%',
  avgPointsPerMatch: 1.58,
  achievements: [
    'U23 Asian Cup SF (2026)',
    'U20 Asian Cup QF (2023)',
    'UEFA Pro Licence',
  ],
  playerCareer: {
    position: 'Tiền đạo',
    clubs: ['Palamós', 'Yeclano', 'Elche'],
    years: '1988-2001',
    caps: 62, // La Liga 2
    goals: 18,
    highlights: ['La Liga 2 - 62 trận, 18 bàn'],
  },
  coachingCareer: [
    { period: '2005-2007', role: 'Trợ lý HLV', club: 'Cádiz CF' },
    { period: '2007-2024', role: 'HLV trưởng', club: 'Nhiều CLB TBN, Kuwait' },
    { period: '01/2025', role: 'HLV trưởng', club: 'U22 Trung Quốc' },
    { period: '08/2025-nay', role: 'HLV trưởng', club: 'U23 Trung Quốc' },
  ],
  tacticalNotes: '5-3-2 phòng ngự, 60% bàn thắng từ phản công. Dựa vào thể lực (12km/trận), kỷ luật (ít lỗi vị trí nhất giải). Neutralize 80% long balls. Thủ môn Li Hao là "bức tường". Yếu: chỉ 1 bàn từ open play.',
};

export function getCoachByTeam(team: 'vietnam' | 'china'): Coach {
  return team === 'vietnam' ? vietnamCoach : chinaCoach;
}
