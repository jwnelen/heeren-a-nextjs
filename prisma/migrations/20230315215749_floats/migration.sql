/*
  Warnings:

  - You are about to alter the column `singles_rating` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `doubles_rating` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `Player` MODIFY `singles_rating` DOUBLE NOT NULL,
    MODIFY `doubles_rating` DOUBLE NOT NULL;
