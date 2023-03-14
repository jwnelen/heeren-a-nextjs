import { NextApiRequest, NextApiResponse } from 'next';

import { Dalton } from '@/types';

const daltonsData: Dalton[] = [
  {
    id: 1,
    reason: 'reason 1',
    player_earned: 1,
    player_took: 2,
    date_earned: new Date('2021-01-01'),
    date_took: new Date('2021-01-01'),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    reason: 'reason 2',
    player_earned: 2,
    player_took: 1,
    date_earned: new Date('2021-01-01'),
    date_took: new Date('2021-01-01'),
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default function daltons(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(daltonsData);
}
