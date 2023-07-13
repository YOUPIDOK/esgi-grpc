/*
  Warnings:

  - The primary key for the `race_participation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[raceId,driverId]` on the table `race_participation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `raceParticipationId` to the `race_participation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `race_participation` DROP PRIMARY KEY,
    ADD COLUMN `raceParticipationId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`raceParticipationId`);

-- CreateIndex
CREATE UNIQUE INDEX `race_participation_raceId_driverId_key` ON `race_participation`(`raceId`, `driverId`);
