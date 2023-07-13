/*
  Warnings:

  - You are about to drop the column `nbclipper` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `nbclipper`,
    ADD COLUMN `nb_clipper` INTEGER NOT NULL DEFAULT 4;
