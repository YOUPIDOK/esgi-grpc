/*
  Warnings:

  - You are about to drop the column `nb_clipper` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `nb_clipper`,
    ADD COLUMN `nbclipper` INTEGER NOT NULL DEFAULT 4;
