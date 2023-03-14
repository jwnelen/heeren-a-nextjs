import * as React from 'react';

import useDaltons from '@/hooks/daltons';
import usePlayers from '@/hooks/players';

import Layout from '@/components/layout/Layout';

import { Dalton, PlayerDict } from '@/types';

const dateToString = (date: Date) => {
  date = new Date(date);
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const DaltonItem = ({
  dalton,
  players,
}: {
  dalton: Dalton;
  players: PlayerDict;
}) => {
  return (
    <div className='w-full space-y-4 rounded-xl bg-blue-100 p-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-left'>{dalton.reason}</h3>
        <p>{dateToString(dalton.date_earned)}</p>
      </div>
      <div className='flex justify-start space-x-4'>
        <p>Genomen door {players[dalton.player_took]?.nickname}</p>
        <p>Verdiend door {players[dalton.player_earned]?.nickname}</p>
      </div>
    </div>
  );
};

export default function Daltons() {
  const { daltons, isLoading, isError } = useDaltons();
  const p = usePlayers();
  const players: PlayerDict = p.playersDict;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (p.isLoading) return <div>Loading...</div>;
  if (p.isError) return <div>Error...</div>;

  return (
    <Layout>
      <div className='h-screen space-y-6 text-center'>
        <h1>Daltons</h1>
        <div className='layout flex flex-col items-center justify-center space-y-6'>
          {daltons &&
            daltons.map((dalton: Dalton) => (
              <DaltonItem key={dalton.id} dalton={dalton} players={players} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
