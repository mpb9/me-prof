import { useEffect, useState } from 'react';
import {
  connerId,
  edelId,
  fetchLeagueData,
  fetchMatchupsData,
  fetchRostersData,
  fetchUsersData,
  leagueUrl,
  mikeId,
  pechId,
  shimId,
  slopId,
} from './services/SleeperService';
import TeamScore from './TeamScore';
export default function Order41() {
  const [error, setError] = useState(null);
  const [league, setLeague] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const refreshRate = 10 * 1000;
  const sColor = '#AED998';

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
        // console.log('mike starters', data[0].starters);
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
    <div className='relative w-full my-font-monospace bg-[radial-gradient(circle_700px_at_50%_400px,#3E3E3E,transparent)]'>
      {/* HEADER */}
      <div className='flex items-center justify-center text-stone-950 w-full text-center sm:bg-[#948c87] h-[4rem] px-0 sm:px-6 md:px-8'>
        <div className='hidden w-1/4 text-left cursor-default sm:block'>
          <p className='text-xl md:text-2xl my-font-terminess w-fit px-2 py-1 lg:py-[6px] border-[1px] rounded-lg border-[#AED998] bg-stone-900 text-[#AED998]'>
            {lastUpdated?.toLocaleTimeString()}
          </p>
        </div>
        <h1 className='w-1/2 text-[3rem] font-bold my-font-electro hidden cursor-default sm:block md:text-[3.5rem] lg:text-[3.75rem]'>
          Order 41
        </h1>
        <div className='flex items-center justify-center w-full h-full sm:justify-end sm:w-1/4'>
          <a
            href={leagueUrl}
            target='_blank'
            rel='noreferrer'
            className='w-[2.75rem] h-full py-[6px] hover:scale-110 transition-transform'>
            <div className='w-full h-full bg-no-repeat bg-contain bg-sleeper-green' />
          </a>
        </div>
      </div>

      {/* MATCHUPS */}
      {recievedData() && matchups !== null ? (
        <div className='flex flex-col items-center justify-start w-full h-[calc(100vh-4rem)] overflow-scroll'>
          <div className='w-[95%] px-4 h-full'>
            <h1 className='pb-2 pt-2 sm:pt-5 text-3xl font-bold text-center cursor-default text-[#aed998]'>
              ROUND ONE
            </h1>
            {/* 3 WAY MATCHUP */}
            <div className='grid grid-cols-1 gap-2 pb-8 overflow-scroll sm:grid-cols-2 md:grid-cols-3'>
              <TeamScore
                key={pechId}
                user={getUserFromUserId(pechId)}
                roster={getRosterFromUserId(pechId)}
                matchup={getMatchupFromUserId(pechId)}
              />
              <TeamScore
                key={mikeId}
                user={getUserFromUserId(mikeId)}
                roster={getRosterFromUserId(mikeId)}
                matchup={getMatchupFromUserId(mikeId)}
              />
              <TeamScore
                key={slopId}
                user={getUserFromUserId(slopId)}
                roster={getRosterFromUserId(slopId)}
                matchup={getMatchupFromUserId(slopId)}
              />
            </div>
            {/* BYE */}
            <h1 className='pb-2 text-2xl italic text-center cursor-default text-[#aed998]'>ON BYE</h1>
            <div className='grid grid-cols-1 gap-2 pb-8 overflow-scroll sm:grid-cols-2 md:grid-cols-3'>
              <TeamScore
                key={edelId}
                user={getUserFromUserId(edelId)}
                roster={getRosterFromUserId(edelId)}
                matchup={getMatchupFromUserId(edelId)}
              />
              <TeamScore
                key={shimId}
                user={getUserFromUserId(shimId)}
                roster={getRosterFromUserId(shimId)}
                matchup={getMatchupFromUserId(shimId)}
              />
              <TeamScore
                key={connerId}
                user={getUserFromUserId(connerId)}
                roster={getRosterFromUserId(connerId)}
                matchup={getMatchupFromUserId(connerId)}
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
