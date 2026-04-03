export interface Team {
  id: string;
  name: string;
  nameZh: string;
  code: string; // ISO alpha-3 or FIFA code
  group: string; // "A" – "L"
  flagEmoji: string;
  confederation: string;
}

export type MatchStatus = 'scheduled' | 'live' | 'finished' | 'postponed';
export type MatchStage =
  | 'Group'
  | 'Round of 32'
  | 'Round of 16'
  | 'Quarter-final'
  | 'Semi-final'
  | 'Third Place'
  | 'Final';

export interface Match {
  id: string;
  date: string; // ISO 8601 e.g. "2026-06-11T20:00:00"
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;
  awayScore: number | null;
  homeScoreExtra: number | null;
  awayScoreExtra: number | null;
  homePenalty: number | null;
  awayPenalty: number | null;
  venue: string;
  city: string;
  country: string;
  stage: MatchStage;
  group?: string; // "A" – "L"
  matchday?: number; // 1–3 within group stage
  status: MatchStatus;
}

export interface Standing {
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
}

export interface Group {
  letter: string; // "A" – "L"
  name: string; // "Group A" – "Group L"
  standings: Standing[];
}

export interface ApiMatch {
  id: string | number;
  date: string;
  time?: string;
  home_team?: string;
  away_team?: string;
  home_score?: number | null;
  away_score?: number | null;
  venue?: string;
  city?: string;
  group?: string;
  stage?: string;
  status?: string;
  [key: string]: unknown;
}

export interface ApiStanding {
  group?: string;
  team?: string;
  team_code?: string;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goals_for?: number;
  goals_against?: number;
  goal_diff?: number;
  points?: number;
  position?: number;
  [key: string]: unknown;
}
