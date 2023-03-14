import { NextApiRequest, NextApiResponse } from 'next';

import { Player } from '@/types';

const playersData: Player[] = [
  {
    id: 1,
    name: 'Jeroen',
    nickname: 'Knorlovic',
    singles_rating_year: 4,
    doubles_rating_year: 4,
    singles_rating: 3.8327,
    doubles_rating: 4.6689,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Luuk',
    nickname: 'Bartoli',
    singles_rating_year: 4,
    doubles_rating_year: 4,
    singles_rating: 3.8327,
    doubles_rating: 4.6689,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'Luuk',
    nickname: 'Bartoli',
    singles_rating_year: 4,
    doubles_rating_year: 4,
    singles_rating: 3.8327,
    doubles_rating: 4.6689,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default function players(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(playersData);
}
