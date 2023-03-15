import useSWR from 'swr';

import { Dalton } from '@/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useDaltons() {
  const { data, error } = useSWR('/api/daltons', fetcher);
  const openDaltons = data?.filter((dalton: Dalton) => !dalton.date_took);
  const closedDaltons = data?.filter((dalton: Dalton) => dalton.date_took);

  return {
    openDaltons: openDaltons,
    closedDaltons: closedDaltons,
    isLoading: !error && !data,
    isError: error,
  };
}
