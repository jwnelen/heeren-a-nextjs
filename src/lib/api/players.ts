import getPrisma from '@/lib/prisma';

import { Player } from '@/types';

const prisma = getPrisma();

export async function getPlayers() {
  const [players] = await Promise.all([
    prisma.player.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    }),
  ]);
  return players;
}

export async function addPlayer(p: Player) {
  return prisma.player.create({
    data: {
      name: p.name,
      nickname: p.nickname,
      singles_rating_year: p.singles_rating_year,
      doubles_rating_year: p.doubles_rating_year,
      singles_rating: p.singles_rating,
      doubles_rating: p.doubles_rating,
    },
  });
}
