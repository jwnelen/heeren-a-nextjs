import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function usePlayers() {
  const { data, error } = useSWR('/api/players', fetcher);

  return {
    players: data,
    isLoading: !error && !data,
    isError: error,
  };
}
