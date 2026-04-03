import { Group } from '../types';
import { TEAMS_BY_GROUP } from './teams';

// Initial standings — all zeros before the tournament begins.
// The API will provide live data once the tournament starts (June 11, 2026).

function makeGroup(letter: string): Group {
  const teams = TEAMS_BY_GROUP[letter] ?? [];
  return {
    letter,
    name: `Group ${letter}`,
    standings: teams.map((team, i) => ({
      position: i + 1,
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      points: 0,
    })),
  };
}

export const ALL_GROUPS: Group[] = [
  makeGroup('A'),
  makeGroup('B'),
  makeGroup('C'),
  makeGroup('D'),
  makeGroup('E'),
  makeGroup('F'),
  makeGroup('G'),
  makeGroup('H'),
  makeGroup('I'),
  makeGroup('J'),
  makeGroup('K'),
  makeGroup('L'),
];
