import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useDaltons() {
  const { data, error } = useSWR('/api/daltons', fetcher);

  return {
    daltons: data,
    isLoading: !error && !data,
    isError: error,
  };
}
