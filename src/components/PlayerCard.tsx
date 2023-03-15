import { Player } from '@/types';

const Rating = ({
  rating,
  rating_year,
}: {
  rating: number;
  rating_year: number;
}) => {
  return (
    <div className='overflow-hidden rounded border-2 border-primary-500'>
      <span className='border-r-2 border-primary-500 bg-primary-500 p-2 font-bold text-white'>
        {rating_year}
      </span>
      <span className='p-1'>{`${rating}`}</span>
    </div>
  );
};

const RatingDisplay = ({ player }: { player: Player }) => {
  return (
    <div className='flex flex-row space-x-4'>
      <Rating
        rating={player?.singles_rating}
        rating_year={player.singles_rating_year}
      ></Rating>
      <Rating
        rating={player?.doubles_rating}
        rating_year={player.doubles_rating_year}
      ></Rating>
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
