import getPrisma from '@/lib/prisma';

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
