export type Position = 'GK' | 'DF' | 'MF' | 'FW';
export type ResultType = 'W' | 'D' | 'L';
export type Venue = 'H' | 'A' | 'N';
export type Foot = 'Left' | 'Right' | 'Both';

export interface CareerEntry {
  period: string;
  club: string;
  clubFlag: string;
  matches: number;
  goals: number;
}

export interface MatchPerformance {
  matchday: string;
  venue: Venue;
  team: string;
  teamRank: number;
  opponent: string;
  opponentRank: number;
  result: string;
  resultType: ResultType;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutes: number;
}

export interface MarketValueHistory {
  date: string;
  value: number;
}

export interface TournamentStats {
  minutes: number;
  goals: number;
  assists: number;
  saves?: number;
  cleanSheets?: number;
  tackles?: number;
  interceptions?: number;
  passAccuracy?: number;
  rating: number;
}

export interface Player {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  image?: string;
  position: Position;
  dateOfBirth: string;
  age: number;
  placeOfBirth?: string;
  nationality: string;
  flag: string;
  club: string;
  clubLogo?: string;
  height: number;
  preferredFoot: Foot;

  // Stats
  intMatches: number;
  intGoals: number;
  intAssists?: number;
  rating: number;
  marketValue: string;
  marketValueHistory?: MarketValueHistory[];

  // Tournament stats (AFC U23 2026)
  tournamentApps: number;
  tournamentGoals: number;
  tournamentAssists: number;
  tournamentMinutes: number;
  tournamentStats?: TournamentStats;
  yellowCards: number;
  redCards: number;

  // Career history
  careerHistory: CareerEntry[];

  // Match performances
  matchHistory: MatchPerformance[];

  // Attributes
  role: string;
  strength: string;
  weaknesses?: string;
  playStyle?: string;
  highlights?: string[];

  // Flags
  isCaptain?: boolean;
  isStar?: boolean;
  isInjured?: boolean;
  isSuspended?: boolean;
}

export interface CoachingEntry {
  period: string;
  role: string;
  club: string;
}

export interface PlayerCareer {
  position: string;
  clubs: string[];
  years: string;
  caps: number;
  goals: number;
  highlights: string[];
}

export interface Coach {
  id: string;
  name: string;
  image?: string;
  nationality: string;
  flag: string;
  age: number;
  dateOfBirth?: string;
  height?: number;
  formation: string;
  style: string;
  winRate: string;
  totalMatches: number;
  u23WinRate?: string;
  u23Matches?: number;
  u23Goals?: number;
  u23Conceded?: number;
  cleanSheets?: string;
  avgPointsPerMatch?: number;
  achievements: string[];
  playerCareer?: PlayerCareer;
  coachingCareer?: CoachingEntry[];
  tacticalNotes?: string;
}

export interface TopScorer {
  rank: number;
  name: string;
  playerId?: string;
  flag: string;
  team: string;
  goals: number;
  highlight?: boolean;
}

export interface Team {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  flagCode: string;
  coach: Coach;
  players: Player[];
  formation: string;
  style: string;
  tournamentStats: {
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    cleanSheets: number;
  };
}
