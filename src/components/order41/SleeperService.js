import axios from 'axios';

const url = 'https://api.sleeper.app/v1/';
const leagueId = '1049462983430840320';

export const mikeId = '465557925683785728';
export const shimId = '984904059196956672';
export const pechId = '999036053916864512';
export const edelId = '999483425495154688';
export const slopId = '999485385422123008';
export const connerId = '999497776465637376';
export const leagueUrl = `https://sleeper.com/leagues/${leagueId}`;

const leagueDataUrl = `${url}league/${leagueId}`;
const rostersDataUrl = `${url}league/${leagueId}/rosters`;
const usersDataUrl = `${url}league/${leagueId}/users`;
const matchupsDataUrl = `${url}league/${leagueId}/matchups/`;
const nflStateDataUrl = `${url}state/nfl`;

// MARK: LEAGUE
export const fetchLeagueData = async () => {
  try {
    const response = await axios.get(leagueDataUrl);
    const league = await formatLeague(response.data);
    return league;
  } catch (err) {
    console.error(err);
  }
};
export const formatLeague = async (league) => {
  return {
    league_id: league.league_id,
    name: league.name,
    avatar: league.avatar,
    season: league.season,
    total_rosters: league.total_rosters,
    scoring_settings: league.scoring_settings,
    roster_positions: league.roster_positions,
    division_1: league.metadata.division_1,
    division_2: league.metadata.division_2,
    latest_league_winner_roster_id: league.metadata.latest_league_winner_roster_id,
  };
};

// MARK: ROSTERS
export const fetchRostersData = async () => {
  try {
    const response = await axios.get(rostersDataUrl);
    const rosters = await genRosters(response.data);
    return rosters;
  } catch (err) {
    console.error(err);
  }
};
export const genRosters = async (rosters) => {
  const mike = formatRoster(rosters.find((roster) => roster.owner_id === mikeId));
  const shim = formatRoster(rosters.find((roster) => roster.owner_id === shimId));
  const pech = formatRoster(rosters.find((roster) => roster.owner_id === pechId));
  const edel = formatRoster(rosters.find((roster) => roster.owner_id === edelId));
  const slop = formatRoster(rosters.find((roster) => roster.owner_id === slopId));
  const conner = formatRoster(rosters.find((roster) => roster.owner_id === connerId));
  return [mike, shim, pech, edel, slop, conner];
};
export const formatRoster = (roster) => {
  return {
    owner_id: roster.owner_id,
    roster_id: roster.roster_id,
    players: roster.players,
    starters: roster.starters,
    reserve: roster.reserve,
    taxi: roster.taxi,
    settings: roster.settings,
  };
};

// MARK: USERS
export const fetchUsersData = async () => {
  try {
    const response = await axios.get(usersDataUrl);
    const users = await genUsers(response.data);
    return users;
  } catch (err) {
    console.error(err);
  }
};
export const genUsers = async (users) => {
  const mike = formatUser(users.find((user) => user.user_id === mikeId));
  const shim = formatUser(users.find((user) => user.user_id === shimId));
  const pech = formatUser(users.find((user) => user.user_id === pechId));
  const edel = formatUser(users.find((user) => user.user_id === edelId));
  const slop = formatUser(users.find((user) => user.user_id === slopId));
  const conner = formatUser(users.find((user) => user.user_id === connerId));
  return [mike, shim, pech, edel, slop, conner];
};
export const formatUser = (user) => {
  return {
    user_id: user.user_id,
    display_name: user.display_name,
    team_name: user.metadata.team_name,
    avatar: user.metadata.avatar,
  };
};

// MARK: MATCHUPS
export const fetchMatchupsData = async () => {
  try {
    const nflState = await fetchNFLStateData();
    const week = nflState.week;
    const url = `${matchupsDataUrl}${week}`;
    const response = await axios.get(url);
    const matchups = await genMatchups(response.data);
    return matchups;
  } catch (err) {
    console.error(err);
  }
};
export const genMatchups = async (matchups) => {
  const matchup1 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 1));
  const matchup2 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 2));
  const matchup3 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 3));
  const matchup4 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 4));
  const matchup5 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 5));
  const matchup6 = formatMatchup(matchups.find((matchup) => matchup.roster_id === 6));
  return [matchup1, matchup2, matchup3, matchup4, matchup5, matchup6];
};
export const formatMatchup = (matchup) => {
  return {
    roster_id: matchup.roster_id,
    matchup_id: matchup.matchup_id,
    points: matchup.points,
    starters: matchup.starters,
    players: matchup.players,
    starters_points: matchup.starters_points,
    players_points: matchup.players_points,
  };
};

// MARK: NFL STATE
export const fetchNFLStateData = async () => {
  try {
    const response = await axios.get(nflStateDataUrl);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
