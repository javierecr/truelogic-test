import { CompetitionsResponse } from 'src/app/shared/responses/competitions.response';

export const competitionsMock: CompetitionsResponse = {
  count: 3,
  competitions: [
    {
      id: 2013,
      area: {
        id: 2032,
        name: 'Brazil',
        ensignUrl: 'https://crests.football-data.org/764.svg',
      },
      name: 'Campeonato Brasileiro Série A',
      code: 'BSA',
      emblemUrl: 'https://crests.football-data.org/764.svg',
      plan: 'TIER_ONE',
      currentSeason: {
        id: 1377,
        startDate: '2022-04-10',
        endDate: '2022-11-13',
        currentMatchday: 1,
        winner: null,
      },
      lastUpdated: '2021-07-20T18:42:17Z',
    },
    {
      id: 2016,
      area: {
        id: 2072,
        name: 'England',
        ensignUrl: 'https://crests.football-data.org/770.svg',
      },
      name: 'Championship',
      code: 'ELC',
      emblemUrl: null,
      plan: 'TIER_ONE',
      currentSeason: {
        id: 735,
        startDate: '2021-08-07',
        endDate: '2022-05-09',
        currentMatchday: 38,
        winner: null,
      },
      lastUpdated: '2021-04-17T00:00:18Z',
    },
    {
      id: 2021,
      area: {
        id: 2072,
        name: 'England',
        ensignUrl: 'https://crests.football-data.org/770.svg',
      },
      name: 'Premier League',
      code: 'PL',
      emblemUrl: null,
      plan: 'TIER_ONE',
      currentSeason: {
        id: 733,
        startDate: '2021-08-13',
        endDate: '2022-05-22',
        currentMatchday: 29,
        winner: null,
      },
      lastUpdated: '2021-04-17T02:20:14Z',
    },
  ],
};
