// World Cup 2026 API service
// Primary source: wc2026api.com (free, no auth required)
// Fallback: embedded static data

import { Match, Group, Standing, ApiMatch, ApiStanding } from '../types';
import { ALL_MATCHES } from '../data/matches';
import { ALL_GROUPS } from '../data/standings';
import { ALL_TEAMS } from '../data/teams';

const BASE_URL = 'https://api.wc2026api.com';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  fetchedAt: number;
}

const cache: {
  matches?: CacheEntry<Match[]>;
  groups?: CacheEntry<Group[]>;
} = {};

function isFresh<T>(entry?: CacheEntry<T>): boolean {
  if (!entry) return false;
  return Date.now() - entry.fetchedAt < CACHE_TTL_MS;
}

// ─────────────────────────────────────────────────────
// Normalise raw API responses into our internal types
// ─────────────────────────────────────────────────────

function normaliseteamCode(raw: string): string {
  return raw?.toUpperCase().trim() ?? '';
}

function normaliseApiMatch(raw: ApiMatch): Match | null {
  try {
    const homeCode = normaliseteamCode(String(raw.home_team ?? raw.homeTeam ?? ''));
    const awayCode = normaliseteamCode(String(raw.away_team ?? raw.awayTeam ?? ''));

    const homeTeam = ALL_TEAMS.find(
      (t) => t.code === homeCode || t.name.toLowerCase() === homeCode.toLowerCase()
    );
    const awayTeam = ALL_TEAMS.find(
      (t) => t.code === awayCode || t.name.toLowerCase() === awayCode.toLowerCase()
    );

    if (!homeTeam || !awayTeam) return null;

    const dateStr = String(raw.date ?? '');
    const timeStr = String(raw.time ?? '00:00');
    const isoDate = dateStr.includes('T')
      ? dateStr
      : `${dateStr}T${timeStr}:00`;

    const status: Match['status'] =
      raw.status === 'live' || raw.status === 'in_play'
        ? 'live'
        : raw.status === 'finished' || raw.status === 'completed'
        ? 'finished'
        : 'scheduled';

    const stageRaw = String(raw.stage ?? raw.round ?? 'Group').toLowerCase();
    let stage: Match['stage'] = 'Group';
    if (stageRaw.includes('final') && stageRaw.includes('quarter')) stage = 'Quarter-final';
    else if (stageRaw.includes('final') && stageRaw.includes('semi')) stage = 'Semi-final';
    else if (stageRaw.includes('third')) stage = 'Third Place';
    else if (stageRaw.includes('final')) stage = 'Final';
    else if (stageRaw.includes('32') || stageRaw.includes('round of 32')) stage = 'Round of 32';
    else if (stageRaw.includes('16') || stageRaw.includes('round of 16')) stage = 'Round of 16';

    return {
      id: String(raw.id ?? Math.random()),
      date: isoDate,
      homeTeam,
      awayTeam,
      homeScore: raw.home_score != null ? Number(raw.home_score) : null,
      awayScore: raw.away_score != null ? Number(raw.away_score) : null,
      homeScoreExtra: null,
      awayScoreExtra: null,
      homePenalty: null,
      awayPenalty: null,
      venue: String(raw.venue ?? raw.stadium ?? ''),
      city: String(raw.city ?? ''),
      country: String(raw.country ?? 'USA'),
      stage,
      group: raw.group ? String(raw.group) : undefined,
      matchday: raw.matchday ? Number(raw.matchday) : undefined,
      status,
    };
  } catch {
    return null;
  }
}

function normaliseApiStandings(rawList: ApiStanding[]): Group[] {
  const groupMap: Record<string, Standing[]> = {};

  for (const raw of rawList) {
    const groupLetter = String(raw.group ?? '').toUpperCase().replace('GROUP ', '');
    if (!groupLetter || groupLetter.length !== 1) continue;

    const teamCode = normaliseteamCode(String(raw.team_code ?? raw.team ?? ''));
    const team = ALL_TEAMS.find(
      (t) => t.code === teamCode || t.name.toLowerCase() === teamCode.toLowerCase()
    );
    if (!team) continue;

    if (!groupMap[groupLetter]) groupMap[groupLetter] = [];
    groupMap[groupLetter].push({
      position: Number(raw.position ?? groupMap[groupLetter].length + 1),
      team,
      played: Number(raw.played ?? 0),
      won: Number(raw.won ?? 0),
      drawn: Number(raw.drawn ?? 0),
      lost: Number(raw.lost ?? 0),
      goalsFor: Number(raw.goals_for ?? 0),
      goalsAgainst: Number(raw.goals_against ?? 0),
      goalDiff: Number(raw.goal_diff ?? 0),
      points: Number(raw.points ?? 0),
    });
  }

  return Object.entries(groupMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, standings]) => ({
      letter,
      name: `Group ${letter}`,
      standings: standings.sort((a, b) => a.position - b.position),
    }));
}

// ─────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────

export async function fetchMatches(): Promise<Match[]> {
  if (isFresh(cache.matches)) return cache.matches!.data;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${BASE_URL}/matches`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    const rawMatches: ApiMatch[] = Array.isArray(json) ? json : json.matches ?? json.data ?? [];
    const normalised = rawMatches.map(normaliseApiMatch).filter((m): m is Match => m !== null);

    if (normalised.length > 0) {
      cache.matches = { data: normalised, fetchedAt: Date.now() };
      return normalised;
    }
  } catch {
    // Network error or parse error — fall through to static data
  }

  // Fallback to embedded data
  return ALL_MATCHES;
}

export async function fetchStandings(): Promise<Group[]> {
  if (isFresh(cache.groups)) return cache.groups!.data;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${BASE_URL}/standings`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    const rawList: ApiStanding[] = Array.isArray(json) ? json : json.standings ?? json.data ?? [];
    const normalised = normaliseApiStandings(rawList);

    if (normalised.length > 0) {
      cache.groups = { data: normalised, fetchedAt: Date.now() };
      return normalised;
    }
  } catch {
    // Fallback to embedded data
  }

  return ALL_GROUPS;
}

export function invalidateCache() {
  cache.matches = undefined;
  cache.groups = undefined;
}
