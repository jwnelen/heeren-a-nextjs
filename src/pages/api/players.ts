import { NextApiRequest, NextApiResponse } from 'next';

import { addPlayer, getPlayers } from '@/lib/api/players';

export default async function players(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const players = await getPlayers();
    if (!players) {
      return res.status(500).json({});
    }
    res.status(200).json(players);
  } else if (req.method === 'POST') {
    res.status(200).json({});
  } else if (req.method === 'PUT') {
    const p = req.body;
    const player = await addPlayer(p);
    if (!player) {
      return res.status(500).json({});
    } else {
      res.status(200).json({ player });
    }
  } else if (req.method === 'DELETE') {
    res.status(200).json({});
  }
}

// const playersData: Player[] = [
//   {
//     id: 1,
//     name: 'Jeroen',
//     nickname: 'Knorlovic',
//     singles_rating_year: 4,
//     doubles_rating_year: 4,
//     singles_rating: 3.8327,
//     doubles_rating: 4.6689,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     id: 2,
//     name: 'Luuk',
//     nickname: 'Bartoli',
//     singles_rating_year: 4,
//     doubles_rating_year: 4,
//     singles_rating: 3.8327,
//     doubles_rating: 4.6689,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     id: 3,
//     name: 'Jonas',
//     nickname: 'Jonas',
//     singles_rating_year: 4,
//     doubles_rating_year: 4,
//     singles_rating: 3.8327,
//     doubles_rating: 4.6689,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     id: 4,
//     name: 'Jonas',
//     nickname: 'Jonas',
//     singles_rating_year: 4,
//     doubles_rating_year: 4,
//     singles_rating: 3.8327,
//     doubles_rating: 4.6689,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
// ];
