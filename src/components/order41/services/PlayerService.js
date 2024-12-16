import { PLAYER_DATA } from '../utils/PlayerData';

export const fetchTeamData = async (playerIds, pts, starters, ir, taxi) => {
  try {
    const teamData = await Promise.all(
      playerIds.map(async (playerId) => {
        const player = await fetchPlayer(playerId, pts[playerId], starters, ir, taxi);
        return player;
      })
    );
    return teamData;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayer = async (playerId, playerPts, starters, ir, taxi) => {
  try {
    const sleeperData = await fetchSleeperData(playerId);
    const lineupStatus = fetchLineupStatus(playerId, starters, ir, taxi);
    const playerData = [playerId, playerPts, lineupStatus, sleeperData];
    return playerData;
  } catch (err) {
    console.error(err);
  }
};

const fetchSleeperData = async (playerId) => {
  try {
    const p = await PLAYER_DATA[playerId];
    const playerData = {
      full_name: p.full_name || playerId,
      first_name: p.first_name || playerId,
      last_name: p.last_name || playerId,
      number: p.number || -1,
      age: p.age || -1,
      years_exp: p.years_exp || -1,
      position: p.position || 'DEF',
      fantasy_positions: p.fantasy_positions || ['DEF'],
      team: p.team || playerId,
      status: p.status || 'Active',
    };
    return playerData;
  } catch (err) {
    console.error(err);
  }
};

const fetchLineupStatus = (playerId, starters, ir, taxi) => {
  if (starters.includes(playerId)) {
    return 'starter';
  } else if (ir.includes(playerId)) {
    return 'ir';
  } else if (taxi.includes(playerId)) {
    return 'taxi';
  }
  return 'bench';
};

export const fetchPlayersByLineupStatus = (players, lineupStatus) => {
  const pArr = players.filter((member) => member[2] === lineupStatus);
  const pArrSorted = sortByPosition(pArr);
  return pArrSorted;
};
const sortByPosition = (pArr) => {
  const idpPositions = ['LB', 'CB', 'S', 'DE', 'DT', 'DB'];

  const qbs = pArr.filter((p) => p[3].position === 'QB');
  const rbs = pArr.filter((p) => p[3].position === 'RB');
  const wrs = pArr.filter((p) => p[3].position === 'WR');
  const tes = pArr.filter((p) => p[3].position === 'TE');
  const idps = pArr.filter((p) => p[3].fantasy_positions.some((pos) => idpPositions.includes(pos)));
  const dst = pArr.filter((p) => p[3].position === 'DEF');
  const k = pArr.filter((p) => p[3].position === 'K');

  return [...qbs, ...rbs, ...wrs, ...tes, ...idps, ...dst, ...k];
};
