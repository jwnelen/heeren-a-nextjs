import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useDaltons from '@/hooks/daltons';
import usePlayers from '@/hooks/players';

import TextButton from '@/components/buttons/TextButton';
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
  const isTaken = !!dalton?.date_took;
  const playerEarned = dalton?.player_earned
    ? players[dalton.player_earned]
    : undefined;

  return (
    <div
      className={clsxm(
        `relative w-full rounded-xl bg-blue-50 p-4 shadow shadow-primary-400`,
        {
          'bg-gray-100': isTaken,
          'shadow-gay-200': isTaken,
        }
      )}
    >
      <div
        className={clsxm(`w-full `, {
          'bg-gray-100': isTaken,
          'shadow-gay-200': isTaken,
        })}
      >
        <div className='flex items-center justify-between'>
          <h3 className='text-left'>{dalton.reason}</h3>
          <p>{dateToString(dalton.date_earned)}</p>
        </div>
        <div className='flex justify-start space-x-4'>
          {playerEarned ? (
            <p>Verdiend door {playerEarned.nickname} </p>
          ) : (
            <p>Zelf verdient</p>
          )}
          {isTaken ? (
            <p>Genomen door {players[dalton.player_took]?.nickname}</p>
          ) : (
            <p>Nog niet genomen</p>
          )}
        </div>
        {!isTaken && (
          <TextButton className='absolute -right-28 top-0 mt-0 h-full uppercase'>
            neem 🍻
          </TextButton>
        )}
      </div>
    </div>
  );
};

export default function Daltons() {
  const { openDaltons, closedDaltons, isLoading, isError } = useDaltons();
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
        <h2>Alle open Daltons</h2>
        <div className='layout flex flex-col items-center justify-center space-y-6'>
          {openDaltons &&
            openDaltons.map((dalton: Dalton) => (
              <DaltonItem key={dalton.id} dalton={dalton} players={players} />
            ))}
        </div>

        <h2>Alle genomen Daltons</h2>
        <div className='layout flex flex-col items-center justify-center space-y-6'>
          {closedDaltons &&
            closedDaltons.map((dalton: Dalton) => (
              <DaltonItem key={dalton.id} dalton={dalton} players={players} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
