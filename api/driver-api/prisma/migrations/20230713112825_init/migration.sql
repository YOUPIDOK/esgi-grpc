/*
  Warnings:

  - You are about to drop the column `first_name` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `driver` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `driver` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    ADD COLUMN `firstName` VARCHAR(255) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(255) NOT NULL;
