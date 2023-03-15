-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "singles_rating" DECIMAL(65,30) NOT NULL,
    "doubles_rating" DECIMAL(65,30) NOT NULL,
    "singles_rating_year" INTEGER NOT NULL,
    "doubles_rating_year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
