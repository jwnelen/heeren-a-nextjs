import { Player } from '@/types';

const RatingDisplay = ({ player }: { player: Player }) => {
  return (
    <div className='flex flex-row space-x-2'>
      <div className='overflow-hidden rounded border-2 border-gray-800'>
        <span className='border-r-2 border-gray-800 bg-black p-2 font-bold text-white'>
          {player.singles_rating_year}
        </span>
        <span className='p-1'>{player.singles_rating}</span>
      </div>
      <div className='overflow-hidden rounded border-2 border-gray-800'>
        <span className='border-r-2 border-gray-800 bg-black p-2 font-bold text-white'>
          {player.doubles_rating_year}
        </span>
        <span className='p-1'>{player.doubles_rating}</span>
      </div>
    </div>
  );
};

export const PlayerCard = ({ player }: { player: Player }) => {
  return (
    <div className='flex h-52 w-full flex-col items-center justify-center'>
      <div className='flex min-h-full min-w-full flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 shadow-lg'>
        <div>
          <h2 className='font-bold text-gray-800'>{player.nickname}</h2>
          <p className='text-lg text-gray-600'>{player.name}</p>
        </div>
        <RatingDisplay player={player}></RatingDisplay>
      </div>
    </div>
  );
};
