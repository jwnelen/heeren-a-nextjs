import useSWR from 'swr';

import { apiClient } from '@/lib/apiClient';
import fetcher from '@/lib/fetcher';

import { Player } from '@/types';

export default function usePlayers() {
  const {
    data = [],
    error,
    mutate,
  } = useSWR<Player[]>('/api/players', fetcher);

  const addNewPlayer = async (player: Player) => {
    const newPl: Player = await apiClient.put('/api/players', player);
    return await mutate([...data, newPl]);
  };

  if (!data)
    return {
      players: [],
      addNewPlayer,
      isLoading: true,
      isError: false,
      setPlayers: mutate,
    };

  return {
    players: data,
    addNewPlayer,
    isLoading: !error && !data,
    isError: error,
  };
}
