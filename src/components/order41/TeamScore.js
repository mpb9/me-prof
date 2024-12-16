import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PlayerScore from './PlayerScore';
import { fetchPlayersByLineupStatus, fetchTeamData } from './services/PlayerService';

TeamScore.propTypes = {
  user: PropTypes.object.isRequired,
  roster: PropTypes.object.isRequired,
  matchup: PropTypes.object.isRequired,
};

export default function TeamScore(props) {
  const [error, setError] = useState(null);
  const [showBench, setShowBench] = useState(false);
  const [team, setTeam] = useState(null);
  const [starters, setStarters] = useState(null);
  const [bench, setBench] = useState(null);
  const [taxi, setTaxi] = useState(null);
  const [ir, setIr] = useState(null);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const teamData = await fetchTeamData(
          props.matchup.players,
          props.matchup.players_points,
          props.matchup.starters,
          props.roster.reserve,
          props.roster.taxi
        );
        const starterData = fetchPlayersByLineupStatus(teamData, 'starter');
        const benchData = fetchPlayersByLineupStatus(teamData, 'bench');
        const taxiData = fetchPlayersByLineupStatus(teamData, 'taxi');
        const reserveData = fetchPlayersByLineupStatus(teamData, 'ir');

        setTeam(teamData);
        setStarters(starterData);
        setBench(benchData);
        setTaxi(taxiData);
        setIr(reserveData);

        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getPlayers();
  }, [props]);

  const recievedData = () => {
    return team !== null && starters !== null && bench !== null && taxi !== null && ir !== null;
  };

  const toggleBench = () => {
    return () => setShowBench(!showBench);
  };

  return (
    <div className='w-full h-full overflow-scroll text-center text-black'>
      {/* NAME */}
      <div className='flex flex-col items-center justify-center w-full px-2 py-3 h-[4.5rem] overflow-hidden border-2 rounded-t-lg border-stone-600 min-h-[4.5rem] bg-stone-900 lg:h-fill lg:min-h-0 lg:py-6'>
        <span className='text-base font-black leading-5 lg:text-lg text-stone-300'>{props.user.team_name}</span>
        <span className='pt-1 text-sm italic text-stone-400 lg:pt-0'>
          {props.roster.settings.wins}-{props.roster.settings.losses}
        </span>
      </div>

      {/* PTS */}
      <div className='w-full py-1 bg-stone-950 border-x-2 border-stone-600'>
        <span className='text-lg font-bold text-[#aed998]'>{props.matchup.points} pts</span>
      </div>

      {/* ROSTER */}
      {recievedData() ? (
        <div className='w-full rounded-b-lg'>
          {/* STARTERS */}
          {starters.map((player, index) => (
            <PlayerScore
              key={index}
              id={player[0]}
              first_name={player[3].first_name}
              last_name={player[3].last_name}
              pts={player[1]}
              pos={player[3].position}
              team={player[3].team}
            />
          ))}
          <div
            className='flex items-center justify-center w-full h-8 border-2 border-b-0 cursor-pointer bg-stone-900 border-stone-600 hover:bg-stone-600 text-stone-200'
            onClick={toggleBench()}>
            <span className='tracking-[0.15rem]'>BENCH</span>
          </div>
          {/* BENCH */}
          {showBench ? (
            <div className='bg-stone-400 sm:text-[0.85rem] lg:text-base text-base w-full border-b-2 border-stone-600'>
              {bench.map((player, index) => (
                <PlayerScore
                  key={index}
                  id={player[0]}
                  first_name={player[3].first_name}
                  last_name={player[3].last_name}
                  pts={player[1]}
                  pos={player[3].position}
                  team={player[3].team}
                />
              ))}
              <div className='flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200'>
                <span className='tracking-[0.15rem]'>IR</span>
              </div>
              {ir.map((player, index) => (
                <PlayerScore
                  key={index}
                  id={player[0]}
                  first_name={player[3].first_name}
                  last_name={player[3].last_name}
                  pts={player[1]}
                  pos={player[3].position}
                  team={player[3].team}
                />
              ))}
              <div className='flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200'>
                <span className='tracking-[0.15rem]'>Taxi</span>
              </div>
              {taxi.map((player, index) => (
                <PlayerScore
                  key={index}
                  id={player[0]}
                  first_name={player[3].first_name}
                  last_name={player[3].last_name}
                  pts={player[1]}
                  pos={player[3].position}
                  team={player[3].team}
                />
              ))}
            </div>
          ) : (
            <div className='w-full overflow-hidden border-t-2 border-stone-600'></div>
          )}
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-full bg-stone-400'>
          <span className='text-lg font-bold text-stone-200'>Loading...</span>
        </div>
      )}
    </div>
  );
}
