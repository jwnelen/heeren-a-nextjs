import useSWR from 'swr';

import { apiClient } from '@/lib/apiClient';
import fetcher from '@/lib/fetcher';

import { Player, PlayerDict } from '@/types';

export default function usePlayers() {
  const {
    data = [],
    error,
    mutate,
  } = useSWR<Player[]>('/api/players', fetcher);
  const dict: PlayerDict = [];

  const addNewPlayer = async (player: Player) => {
    const newPl: Player = await apiClient.put('/api/players', player);
    await mutate([...data, newPl]);
  };

  if (!data)
    return {
      players: [],
      addNewPlayer,
      playersDict: dict,
      isLoading: true,
      isError: false,
      setPlayers: mutate,
    };

  return {
    players: data,
    playersDict: dict,
    addNewPlayer,
    isLoading: !error && !data,
    isError: error,
  };
}
