import * as React from 'react';

import usePlayers from '@/hooks/players';

import { AddPlayerForm } from '@/components/addPlayerForm';
import Layout from '@/components/layout/Layout';
import { PlayerCard } from '@/components/PlayerCard';

import { Player } from '@/types';

export default function Players() {
  const { players, isLoading, isError, addNewPlayer } = usePlayers();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const handleSubmit = (p: Player) => {
    if (!p) return;
    addNewPlayer(p).then(() => {
      // eslint-disable-next-line no-console
      console.log('added player');
    });
  };

  return (
    <Layout>
      <div className='h-screen text-center'>
        <h1>Spelers</h1>
        <div className='layout mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4'>
          {players &&
            players.map((player: Player) => (
              <PlayerCard player={player} key={player.id} />
            ))}
        </div>
        <div className='flex flex-row justify-center'>
          <AddPlayerForm onSubmit={handleSubmit}></AddPlayerForm>
        </div>
      </div>
    </Layout>
  );
}
