import { useState } from 'react';
import useSWR from 'swr';

import { Player, PlayerDict } from '@/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function usePlayers() {
  const { data, error } = useSWR('/api/players', fetcher);
  const [players, setPlayers] = useState<Player[]>(data);

  const dict: PlayerDict = data?.reduce((acc: PlayerDict, player: Player) => {
    acc[player?.id] = player;
    return acc;
  }, []);

  return {
    players,
    playersDict: dict,
    isLoading: !error && !data,
    isError: error,
    setPlayers,
  };
}
