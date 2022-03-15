const BASE_URL = 'https://api.football-data.org/v2';

export const environmentMock: any = {
  AREAS: `${BASE_URL}/areas`,
  MATCHES: `${BASE_URL}/matches`,
  COMPETITION: `${BASE_URL}/competitions/{competitionId}`,
  COMPETITIONS: `${BASE_URL}/competitions`,
  TEAMS: `${BASE_URL}/teams`,
  TEAM: `${BASE_URL}/teams/{teamId}`,
  COMPETITION_TEAMS: `${BASE_URL}/competitions/{competitionId}/teams`,
  COMPETITION_MATCHES: `${BASE_URL}/competitions/{competitionId}/matches`,
  production: true,
};
