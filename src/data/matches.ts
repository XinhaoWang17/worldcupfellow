import { Match } from '../types';
import { TEAMS_BY_ID } from './teams';

const T = TEAMS_BY_ID;

// Helper to build a Match object
function m(
  id: string,
  date: string,
  homeId: string,
  awayId: string,
  venue: string,
  city: string,
  country: string,
  stage: Match['stage'],
  group?: string,
  matchday?: number
): Match {
  return {
    id,
    date,
    homeTeam: T[homeId],
    awayTeam: T[awayId],
    homeScore: null,
    awayScore: null,
    homeScoreExtra: null,
    awayScoreExtra: null,
    homePenalty: null,
    awayPenalty: null,
    venue,
    city,
    country,
    stage,
    group,
    matchday,
    status: 'scheduled',
  };
}

// ─────────────────────────────────────────────────
// GROUP STAGE  (June 11 – June 27, 2026)
// Each group: 6 matches (round-robin)
// ─────────────────────────────────────────────────

export const GROUP_STAGE_MATCHES: Match[] = [
  // ── Group A ── MEX URU BOL NZL
  m('A1',  '2026-06-11T21:00:00', 'mex', 'bol', 'Estadio Azteca',       'Mexico City',           'Mexico', 'Group', 'A', 1),
  m('A2',  '2026-06-12T00:00:00', 'uru', 'nzl', 'Estadio BBVA',         'Monterrey',             'Mexico', 'Group', 'A', 1),
  m('A3',  '2026-06-16T21:00:00', 'mex', 'nzl', 'Estadio Akron',        'Guadalajara',           'Mexico', 'Group', 'A', 2),
  m('A4',  '2026-06-17T00:00:00', 'uru', 'bol', 'Estadio Azteca',       'Mexico City',           'Mexico', 'Group', 'A', 2),
  m('A5',  '2026-06-22T01:00:00', 'mex', 'uru', 'Estadio Azteca',       'Mexico City',           'Mexico', 'Group', 'A', 3),
  m('A6',  '2026-06-22T01:00:00', 'bol', 'nzl', 'Estadio BBVA',         'Monterrey',             'Mexico', 'Group', 'A', 3),

  // ── Group B ── USA PAN KSA TUN
  m('B1',  '2026-06-12T03:00:00', 'usa', 'ksa', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'B', 1),
  m('B2',  '2026-06-12T23:00:00', 'pan', 'tun', 'Hard Rock Stadium',    'Miami',                 'USA',    'Group', 'B', 1),
  m('B3',  '2026-06-17T03:00:00', 'usa', 'tun', 'Lincoln Financial Field','Philadelphia',        'USA',    'Group', 'B', 2),
  m('B4',  '2026-06-17T23:00:00', 'pan', 'ksa', 'NRG Stadium',          'Houston',               'USA',    'Group', 'B', 2),
  m('B5',  '2026-06-22T23:00:00', 'usa', 'pan', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'B', 3),
  m('B6',  '2026-06-22T23:00:00', 'ksa', 'tun', 'Hard Rock Stadium',    'Miami',                 'USA',    'Group', 'B', 3),

  // ── Group C ── CAN MAR BEL IRL
  m('C1',  '2026-06-13T01:00:00', 'can', 'irl', 'BMO Field',            'Toronto',               'Canada', 'Group', 'C', 1),
  m('C2',  '2026-06-13T04:00:00', 'mar', 'bel', 'BC Place',             'Vancouver',             'Canada', 'Group', 'C', 1),
  m('C3',  '2026-06-17T22:00:00', 'can', 'bel', 'BMO Field',            'Toronto',               'Canada', 'Group', 'C', 2),
  m('C4',  '2026-06-18T01:00:00', 'mar', 'irl', 'BC Place',             'Vancouver',             'Canada', 'Group', 'C', 2),
  m('C5',  '2026-06-23T01:00:00', 'can', 'mar', 'BMO Field',            'Toronto',               'Canada', 'Group', 'C', 3),
  m('C6',  '2026-06-23T01:00:00', 'bel', 'irl', 'BC Place',             'Vancouver',             'Canada', 'Group', 'C', 3),

  // ── Group D ── BRA COL NGA SRB
  m('D1',  '2026-06-13T23:00:00', 'bra', 'srb', 'AT&T Stadium',         'Dallas',                'USA',    'Group', 'D', 1),
  m('D2',  '2026-06-14T02:00:00', 'col', 'nga', 'Mercedes-Benz Stadium','Atlanta',               'USA',    'Group', 'D', 1),
  m('D3',  '2026-06-18T22:00:00', 'bra', 'nga', "Levi's Stadium",       'San Francisco Bay Area','USA',    'Group', 'D', 2),
  m('D4',  '2026-06-19T01:00:00', 'col', 'srb', 'Arrowhead Stadium',    'Kansas City',           'USA',    'Group', 'D', 2),
  m('D5',  '2026-06-24T01:00:00', 'bra', 'col', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'D', 3),
  m('D6',  '2026-06-24T01:00:00', 'nga', 'srb', 'NRG Stadium',          'Houston',               'USA',    'Group', 'D', 3),

  // ── Group E ── ARG ECU CIV AUT
  m('E1',  '2026-06-14T20:00:00', 'arg', 'aut', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'E', 1),
  m('E2',  '2026-06-14T23:00:00', 'ecu', 'civ', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'E', 1),
  m('E3',  '2026-06-19T20:00:00', 'arg', 'civ', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'E', 2),
  m('E4',  '2026-06-19T23:00:00', 'ecu', 'aut', 'Lumen Field',          'Seattle',               'USA',    'Group', 'E', 2),
  m('E5',  '2026-06-24T22:00:00', 'arg', 'ecu', "Levi's Stadium",       'San Francisco Bay Area','USA',    'Group', 'E', 3),
  m('E6',  '2026-06-24T22:00:00', 'civ', 'aut', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'E', 3),

  // ── Group F ── ESP JPN CHL SVK
  m('F1',  '2026-06-15T01:00:00', 'esp', 'svk', 'AT&T Stadium',         'Dallas',                'USA',    'Group', 'F', 1),
  m('F2',  '2026-06-15T04:00:00', 'jpn', 'chl', 'Lincoln Financial Field','Philadelphia',        'USA',    'Group', 'F', 1),
  m('F3',  '2026-06-20T01:00:00', 'esp', 'chl', 'Mercedes-Benz Stadium','Atlanta',               'USA',    'Group', 'F', 2),
  m('F4',  '2026-06-20T03:00:00', 'jpn', 'svk', 'Arrowhead Stadium',    'Kansas City',           'USA',    'Group', 'F', 2),
  m('F5',  '2026-06-25T01:00:00', 'esp', 'jpn', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'F', 3),
  m('F6',  '2026-06-25T01:00:00', 'chl', 'svk', 'NRG Stadium',          'Houston',               'USA',    'Group', 'F', 3),

  // ── Group G ── ENG SEN IRN SVN
  m('G1',  '2026-06-15T20:00:00', 'eng', 'irn', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'G', 1),
  m('G2',  '2026-06-15T23:00:00', 'sen', 'svn', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'G', 1),
  m('G3',  '2026-06-20T20:00:00', 'eng', 'svn', 'Lumen Field',          'Seattle',               'USA',    'Group', 'G', 2),
  m('G4',  '2026-06-20T23:00:00', 'sen', 'irn', 'Hard Rock Stadium',    'Miami',                 'USA',    'Group', 'G', 2),
  m('G5',  '2026-06-25T22:00:00', 'eng', 'sen', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'G', 3),
  m('G6',  '2026-06-25T22:00:00', 'irn', 'svn', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'G', 3),

  // ── Group H ── FRA KOR EGY HUN
  m('H1',  '2026-06-16T00:00:00', 'fra', 'hun', 'AT&T Stadium',         'Dallas',                'USA',    'Group', 'H', 1),
  m('H2',  '2026-06-16T03:00:00', 'kor', 'egy', 'Mercedes-Benz Stadium','Atlanta',               'USA',    'Group', 'H', 1),
  m('H3',  '2026-06-21T00:00:00', 'fra', 'egy', 'Lincoln Financial Field','Philadelphia',        'USA',    'Group', 'H', 2),
  m('H4',  '2026-06-21T03:00:00', 'kor', 'hun', "Levi's Stadium",       'San Francisco Bay Area','USA',    'Group', 'H', 2),
  m('H5',  '2026-06-26T01:00:00', 'fra', 'kor', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'H', 3),
  m('H6',  '2026-06-26T01:00:00', 'egy', 'hun', 'Arrowhead Stadium',    'Kansas City',           'USA',    'Group', 'H', 3),

  // ── Group I ── GER POR CAM AUS
  m('I1',  '2026-06-16T20:00:00', 'ger', 'aus', 'Lumen Field',          'Seattle',               'USA',    'Group', 'I', 1),
  m('I2',  '2026-06-16T23:00:00', 'por', 'cam', 'Hard Rock Stadium',    'Miami',                 'USA',    'Group', 'I', 1),
  m('I3',  '2026-06-21T20:00:00', 'ger', 'cam', "Levi's Stadium",       'San Francisco Bay Area','USA',    'Group', 'I', 2),
  m('I4',  '2026-06-21T23:00:00', 'por', 'aus', 'Lumen Field',          'Seattle',               'USA',    'Group', 'I', 2),
  m('I5',  '2026-06-26T22:00:00', 'ger', 'por', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'I', 3),
  m('I6',  '2026-06-26T22:00:00', 'cam', 'aus', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'I', 3),

  // ── Group J ── NED CRO GHA VEN
  m('J1',  '2026-06-17T01:00:00', 'ned', 'ven', 'NRG Stadium',          'Houston',               'USA',    'Group', 'J', 1),
  m('J2',  '2026-06-17T04:00:00', 'cro', 'gha', 'Arrowhead Stadium',    'Kansas City',           'USA',    'Group', 'J', 1),
  m('J3',  '2026-06-22T01:00:00', 'ned', 'gha', 'Lincoln Financial Field','Philadelphia',        'USA',    'Group', 'J', 2),
  m('J4',  '2026-06-22T03:00:00', 'cro', 'ven', 'Mercedes-Benz Stadium','Atlanta',               'USA',    'Group', 'J', 2),
  m('J5',  '2026-06-27T01:00:00', 'ned', 'cro', 'MetLife Stadium',      'New York / New Jersey', 'USA',    'Group', 'J', 3),
  m('J6',  '2026-06-27T01:00:00', 'gha', 'ven', 'AT&T Stadium',         'Dallas',                'USA',    'Group', 'J', 3),

  // ── Group K ── ITA POL IRQ HON
  m('K1',  '2026-06-18T01:00:00', 'ita', 'hon', 'Hard Rock Stadium',    'Miami',                 'USA',    'Group', 'K', 1),
  m('K2',  '2026-06-18T04:00:00', 'pol', 'irq', 'NRG Stadium',          'Houston',               'USA',    'Group', 'K', 1),
  m('K3',  '2026-06-22T22:00:00', 'ita', 'irq', 'Mercedes-Benz Stadium','Atlanta',               'USA',    'Group', 'K', 2),
  m('K4',  '2026-06-23T01:00:00', 'pol', 'hon', 'AT&T Stadium',         'Dallas',                'USA',    'Group', 'K', 2),
  m('K5',  '2026-06-27T22:00:00', 'ita', 'pol', 'SoFi Stadium',         'Los Angeles',           'USA',    'Group', 'K', 3),
  m('K6',  '2026-06-27T22:00:00', 'irq', 'hon', "Levi's Stadium",       'San Francisco Bay Area','USA',    'Group', 'K', 3),

  // ── Group L ── DEN SUI PAR JAM
  m('L1',  '2026-06-18T22:00:00', 'den', 'jam', 'Lumen Field',          'Seattle',               'USA',    'Group', 'L', 1),
  m('L2',  '2026-06-19T01:00:00', 'swi', 'par', 'Arrowhead Stadium',    'Kansas City',           'USA',    'Group', 'L', 1),
  m('L3',  '2026-06-23T22:00:00', 'den', 'par', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'L', 2),
  m('L4',  '2026-06-24T01:00:00', 'swi', 'jam', 'Lincoln Financial Field','Philadelphia',        'USA',    'Group', 'L', 2),
  m('L5',  '2026-06-28T22:00:00', 'den', 'swi', 'Lumen Field',          'Seattle',               'USA',    'Group', 'L', 3),
  m('L6',  '2026-06-28T22:00:00', 'par', 'jam', 'Gillette Stadium',     'Boston',                'USA',    'Group', 'L', 3),
];

// ─────────────────────────────────────────────────
// KNOCKOUT STAGE — TBD (teams determined after group stage)
// Placeholder matches showing structure
// ─────────────────────────────────────────────────

const TBD: Match['homeTeam'] = {
  id: 'tbd',
  name: 'TBD',
  nameZh: '待定',
  code: 'TBD',
  group: '',
  flagEmoji: '🏳',
  confederation: '',
};

function tbd(
  id: string,
  date: string,
  label: string,
  venue: string,
  city: string,
  country: string,
  stage: Match['stage']
): Match {
  return {
    id,
    date,
    homeTeam: { ...TBD, name: `Winner ${label.split(' v ')[0]}`, nameZh: `${label.split(' v ')[0]}胜者` },
    awayTeam: { ...TBD, name: `Winner ${label.split(' v ')[1]}`, nameZh: `${label.split(' v ')[1]}胜者` },
    homeScore: null,
    awayScore: null,
    homeScoreExtra: null,
    awayScoreExtra: null,
    homePenalty: null,
    awayPenalty: null,
    venue,
    city,
    country,
    stage,
    status: 'scheduled',
  };
}

export const ROUND_OF_32_MATCHES: Match[] = [
  tbd('R32-1',  '2026-07-01T23:00:00', 'A1 v B3/C3/D3/E3/F3/G3/H3', 'MetLife Stadium',       'New York / New Jersey', 'USA',    'Round of 32'),
  tbd('R32-2',  '2026-07-02T02:00:00', 'B1 v A3/C3/D3/E3/F3/G3/H3', 'AT&T Stadium',          'Dallas',                'USA',    'Round of 32'),
  tbd('R32-3',  '2026-07-02T20:00:00', 'C1 v D2',                    'BC Place',              'Vancouver',             'Canada', 'Round of 32'),
  tbd('R32-4',  '2026-07-02T23:00:00', 'D1 v C2',                    'BMO Field',             'Toronto',               'Canada', 'Round of 32'),
  tbd('R32-5',  '2026-07-03T01:00:00', 'E1 v F2',                    'SoFi Stadium',          'Los Angeles',           'USA',    'Round of 32'),
  tbd('R32-6',  '2026-07-03T04:00:00', 'F1 v E2',                    "Levi's Stadium",        'San Francisco Bay Area','USA',    'Round of 32'),
  tbd('R32-7',  '2026-07-03T20:00:00', 'G1 v H2',                    'NRG Stadium',           'Houston',               'USA',    'Round of 32'),
  tbd('R32-8',  '2026-07-03T23:00:00', 'H1 v G2',                    'Arrowhead Stadium',     'Kansas City',           'USA',    'Round of 32'),
  tbd('R32-9',  '2026-07-04T01:00:00', 'I1 v J2',                    'Lumen Field',           'Seattle',               'USA',    'Round of 32'),
  tbd('R32-10', '2026-07-04T04:00:00', 'J1 v I2',                    'Gillette Stadium',      'Boston',                'USA',    'Round of 32'),
  tbd('R32-11', '2026-07-04T20:00:00', 'K1 v L2',                    'Lincoln Financial Field','Philadelphia',         'USA',    'Round of 32'),
  tbd('R32-12', '2026-07-04T23:00:00', 'L1 v K2',                    'Hard Rock Stadium',     'Miami',                 'USA',    'Round of 32'),
  tbd('R32-13', '2026-07-05T01:00:00', 'A2 v Best 3rd',              'Mercedes-Benz Stadium', 'Atlanta',               'USA',    'Round of 32'),
  tbd('R32-14', '2026-07-05T04:00:00', 'B2 v Best 3rd',              'Estadio Azteca',        'Mexico City',           'Mexico', 'Round of 32'),
  tbd('R32-15', '2026-07-05T20:00:00', 'C2 v Best 3rd',              'Estadio BBVA',          'Monterrey',             'Mexico', 'Round of 32'),
  tbd('R32-16', '2026-07-05T23:00:00', 'D2 v Best 3rd',              'Estadio Akron',         'Guadalajara',           'Mexico', 'Round of 32'),
];

export const ROUND_OF_16_MATCHES: Match[] = [
  tbd('R16-1', '2026-07-08T23:00:00', 'R32-1 v R32-2',   'MetLife Stadium',       'New York / New Jersey', 'USA',    'Round of 16'),
  tbd('R16-2', '2026-07-09T02:00:00', 'R32-3 v R32-4',   'BMO Field',             'Toronto',               'Canada', 'Round of 16'),
  tbd('R16-3', '2026-07-09T20:00:00', 'R32-5 v R32-6',   'SoFi Stadium',          'Los Angeles',           'USA',    'Round of 16'),
  tbd('R16-4', '2026-07-09T23:00:00', 'R32-7 v R32-8',   'AT&T Stadium',          'Dallas',                'USA',    'Round of 16'),
  tbd('R16-5', '2026-07-10T01:00:00', 'R32-9 v R32-10',  'Lumen Field',           'Seattle',               'USA',    'Round of 16'),
  tbd('R16-6', '2026-07-10T04:00:00', 'R32-11 v R32-12', 'Hard Rock Stadium',     'Miami',                 'USA',    'Round of 16'),
  tbd('R16-7', '2026-07-10T20:00:00', 'R32-13 v R32-14', 'Estadio Azteca',        'Mexico City',           'Mexico', 'Round of 16'),
  tbd('R16-8', '2026-07-10T23:00:00', 'R32-15 v R32-16', 'NRG Stadium',           'Houston',               'USA',    'Round of 16'),
];

export const QUARTER_FINAL_MATCHES: Match[] = [
  tbd('QF1', '2026-07-13T23:00:00', 'R16-1 v R16-2', 'MetLife Stadium',   'New York / New Jersey', 'USA',    'Quarter-final'),
  tbd('QF2', '2026-07-14T02:00:00', 'R16-3 v R16-4', 'SoFi Stadium',     'Los Angeles',           'USA',    'Quarter-final'),
  tbd('QF3', '2026-07-14T20:00:00', 'R16-5 v R16-6', 'AT&T Stadium',     'Dallas',                'USA',    'Quarter-final'),
  tbd('QF4', '2026-07-14T23:00:00', 'R16-7 v R16-8', 'Estadio Azteca',   'Mexico City',           'Mexico', 'Quarter-final'),
];

export const SEMI_FINAL_MATCHES: Match[] = [
  tbd('SF1', '2026-07-16T00:00:00', 'QF1 v QF2', 'MetLife Stadium', 'New York / New Jersey', 'USA',    'Semi-final'),
  tbd('SF2', '2026-07-16T23:00:00', 'QF3 v QF4', 'SoFi Stadium',   'Los Angeles',           'USA',    'Semi-final'),
];

export const THIRD_PLACE_MATCH: Match[] = [
  tbd('3RD', '2026-07-18T20:00:00', 'SF1 loser v SF2 loser', 'AT&T Stadium',   'Dallas', 'USA', 'Third Place'),
];

export const FINAL_MATCH: Match[] = [
  tbd('FIN', '2026-07-19T20:00:00', 'SF1 winner v SF2 winner', 'MetLife Stadium', 'New York / New Jersey', 'USA', 'Final'),
];

export const ALL_MATCHES: Match[] = [
  ...GROUP_STAGE_MATCHES,
  ...ROUND_OF_32_MATCHES,
  ...ROUND_OF_16_MATCHES,
  ...QUARTER_FINAL_MATCHES,
  ...SEMI_FINAL_MATCHES,
  ...THIRD_PLACE_MATCH,
  ...FINAL_MATCH,
];
