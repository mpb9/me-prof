import { useEffect, useState } from 'react';
import {
  // connerId,
  // edelId,
  fetchLeagueData,
  fetchMatchupsData,
  fetchRostersData,
  fetchUsersData,
  leagueUrl,
  mikeId,
  pechId,
  // shimId,
  slopId,
} from './SleeperService';
import TeamScore from './TeamScore';
export default function Order41() {
  const [error, setError] = useState(null);
  const [league, setLeague] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  // const [allPlayers, setAllPlayers] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const refreshRate = 10 * 1000;

  // MARK: useEffects
  useEffect(() => {
    const getLeagueData = async () => {
      try {
        const data = await fetchLeagueData();
        setLeague(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getLeagueData();
  }, []);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const data = await fetchUsersData();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getUsersData();
  }, []);

  useEffect(() => {
    const getRosterData = async () => {
      try {
        const data = await fetchRostersData();
        setRosters(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getRosterData();
  }, []);

  useEffect(() => {
    const getMatchupsData = async () => {
      try {
        const data = await fetchMatchupsData();
        setMatchups(data);
        setError(null);
        setLastUpdated(new Date());
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getMatchupsData();
    const intervalId = setInterval(getMatchupsData, refreshRate);
    return () => clearInterval(intervalId);
  }, []);

  // MARK: Functions
  const recievedData = () => {
    if (league !== null && matchups !== null && rosters !== null && users !== null) {
      return true;
    }
    return false;
  };
  const getUserFromUserId = (user_id) => {
    return users.find((user) => user.user_id === user_id);
  };
  const getMatchupFromUserId = (user_id) => {
    const roster = getRosterFromUserId(user_id);
    return matchups.find((matchup) => matchup.roster_id === roster.roster_id);
  };
  const getRosterFromUserId = (user_id) => {
    return rosters.find((roster) => roster.owner_id === user_id);
  };

  // MARK: Render
  return (
    <div className='relative w-full min-h-screen my-font-monospace bg-[radial-gradient(circle_700px_at_50%_400px,#3E3E3E,transparent)]'>
      {/* HEADER */}
      <div className='flex items-center justify-center text-stone-950 w-full text-center bg-stone-400 h-[4rem] px-0 sm:px-6 md:px-12'>
        <div className='hidden w-1/4 text-left sm:block'>
          <p className='text-sm'>
            LAST UPDATE
            <br /> <b className='text-base'>{lastUpdated?.toLocaleTimeString()}</b>
          </p>
        </div>
        <h1 className='w-1/2 text-[3rem] font-bold my-font-electro hidden sm:block md:text-[3.75rem]'>Order 41</h1>
        <div className='flex items-center justify-center w-full h-full sm:justify-end sm:w-1/4'>
          <a
            href={leagueUrl}
            target='_blank'
            rel='noreferrer'
            className='w-[2.75rem] h-full py-[9px] hover:scale-110 transition-transform'>
            <div className='w-full h-full bg-no-repeat bg-contain bg-sleeper-green' />
          </a>
        </div>
      </div>

      {/* MATCHUPS */}
      {recievedData() ? (
        <div className='flex flex-col items-center justify-start w-full h-[calc(100vh-4rem)]'>
          <div className='w-[95%] px-4 z-10 h-full'>
            <h1 className='pb-3 pt-5 text-3xl font-bold text-center cursor-default text-[#aed998]'>ROUND ONE</h1>
            {/* 3 WAY MATCHUP */}
            {/* <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 h-[calc(100%-6rem)]'> */}
            <div className='grid grid-cols-1 gap-2 pb-8 overflow-scroll sm:grid-cols-2 md:grid-cols-3'>
              <TeamScore
                user={getUserFromUserId(pechId)}
                roster={getRosterFromUserId(pechId)}
                matchup={getMatchupFromUserId(pechId)}
              />
              <TeamScore
                user={getUserFromUserId(mikeId)}
                roster={getRosterFromUserId(mikeId)}
                matchup={getMatchupFromUserId(mikeId)}
              />
              <TeamScore
                user={getUserFromUserId(slopId)}
                roster={getRosterFromUserId(slopId)}
                matchup={getMatchupFromUserId(slopId)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-[300px] text-lg text-white'>Loading matchups...</div>
      )}
    </div>
  );
}
