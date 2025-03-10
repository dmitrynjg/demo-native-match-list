import { MatchFromServer } from '../../model';

import { MatchType } from '@/entities';

export const normalizeMatch = (match: MatchFromServer): MatchType => {
  return {
    ...match,
    homeTeam: {
      ...match.homeTeam,
      totalKills: match.homeTeam.total_kills,
    },
    awayTeam: {
      ...match.awayTeam,
      totalKills: match.awayTeam.total_kills,
    },
  };
};
