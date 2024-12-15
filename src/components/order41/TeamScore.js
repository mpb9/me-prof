import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { generatePlayer } from './PlayerService';

TeamScore.propTypes = {
  user: PropTypes.object.isRequired,
  roster: PropTypes.object.isRequired,
  matchup: PropTypes.object.isRequired,
};

export default function TeamScore(props) {
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState(null);
  const [showBench, setShowBench] = useState(true);
  const [starterIds, setStarterIds] = useState(props.matchup.starters);
  const [startersPoints, setStartersPoints] = useState(props.matchup.starters_points);
  const [playerPoints, setPlayersPoints] = useState(props.matchup.players_points);
  const [playerIds, setPlayerIds] = useState(props.matchup.players);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await generatePlayer(
          props.matchup.players,
          props.matchup.players_points,
          props.matchup.starters,
          props.roster.reserve,
          props.roster.taxi
        );
        setPlayers(data);
        setError(null);
        // if (starterIds !== props.matchup.starters) setStarterIds(props.matchup.starters);
        // if (startersPoints !== props.matchup.starters_points) setStartersPoints(props.matchup.starters_points);
        // if (playerPoints !== props.matchup.players_points) setPlayersPoints(props.matchup.players_points);
        // if (playerIds !== props.matchup.players) setPlayerIds(props.matchup.players);

        // if (props.user.user_id === '465557925683785728') {
        //   console.log(new Date().toLocaleTimeString());
        //   console.log('mike starterIds:', starterIds);
        //   console.log('mike startersPoints:', props.matchup.starters_points);
        // }
      } catch (err) {
        setError(err.message);
      }
    };
    getPlayers();
  }, [props]);

  const getStarters = () => {
    if (recievedData()) return players.filter((player) => player[3] === 'starter');
  };
  const getBench = () => {
    if (recievedData()) return players.filter((player) => player[3] === 'bench');
  };
  const getTaxi = () => {
    if (recievedData()) return players.filter((player) => player[3] === 'taxi');
  };
  const getReserve = () => {
    if (recievedData()) return players.filter((player) => player[3] === 'ir');
  };

  const recievedData = () => {
    return (
      players !== null && starterIds !== null && startersPoints !== null && playerPoints !== null && playerIds !== null
    );
  };

  const toggleBench = () => {
    return () => setShowBench(!showBench);
  };

  return (
    <div className='w-full h-full overflow-scroll text-center text-black'>
      {/* NAME */}
      <div className='flex flex-col items-center justify-center w-full px-2 py-3 h-[4.75rem] overflow-hidden border-2 rounded-t-lg border-stone-600 min-h-[4.75rem] bg-stone-900 lg:h-fill lg:min-h-0 lg:py-6'>
        <span className='text-lg font-black leading-5 text-stone-300'>{props.user.team_name}</span>
        <span className='pt-2 text-sm italic text-stone-400'>
          {props.roster.settings.wins}-{props.roster.settings.losses}
        </span>
      </div>

      {/* PTS */}
      <div className='w-full py-2 bg-stone-950 border-x-2 border-stone-600'>
        <span className='text-lg font-bold leading-6 text-[#aed998]'>{props.matchup.points} pts</span>
      </div>

      {/* ROSTER */}
      {players !== null ? (
        <div className='w-full rounded-b-lg'>
          {getStarters().map((player, index) => (
            <div
              key={player[0]}
              className='flex bg-stone-400 items-center overflow-hidden justify-center w-full h-8 text-base border-2 border-b-0 border-stone-600 sm:text-[0.85rem] lg:text-base'>
              <span className='w-3/4 pl-4 text-left text-stone-900 whitespace-nowrap'>{player[1]}</span>
              <span className='w-1/4 h-full py-1 border-l-2 bg-stone-950 text-stone-200 border-stone-600'>
                {player[2]}
              </span>
            </div>
          ))}

          <div
            className='flex items-center justify-center w-full h-8 border-2 border-b-0 cursor-pointer bg-stone-900 border-stone-600 hover:bg-stone-600 text-stone-200'
            onClick={toggleBench()}>
            <span className='tracking-[0.15rem]'>BENCH</span>
          </div>
          {/* BENCH */}
          {showBench ? (
            <div className='bg-stone-400 sm:text-[0.85rem] lg:text-base text-base w-full border-b-2 border-stone-600'>
              {getBench().map((player, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between w-full h-8 border-2 border-b-0 border-stone-600'>
                  <span className='w-3/4 pl-4 overflow-hidden text-left text-stone-900'>{player[1]}</span>
                  <span className='w-1/4 h-full bg-stone-950 text-stone-200'>{player[2]}</span>
                </div>
              ))}
              <div className='flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200'>
                <span className='tracking-[0.15rem]'>IR</span>
              </div>
              {getReserve().map((player, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between w-full h-8 border-2 border-b-0 border-stone-600'>
                  <span className='w-3/4 pl-4 overflow-hidden text-left text-stone-900'>{player[1]}</span>
                  <span className='w-1/4 h-full bg-stone-950 text-stone-200'>{player[2]}</span>
                </div>
              ))}
              <div className='flex items-center justify-center w-full h-8 border-2 border-b-0 bg-stone-900 border-stone-600 text-stone-200'>
                <span className='tracking-[0.15rem]'>Taxi</span>
              </div>
              {getTaxi().map((player, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between w-full h-8 border-2 border-b-0 border-stone-600'>
                  <span className='w-3/4 pl-4 overflow-hidden text-left text-stone-900'>{player[1]}</span>
                  <span className='w-1/4 h-full bg-stone-950 text-stone-200'>{player[2]}</span>
                </div>
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