-- CreateTable
CREATE TABLE `race` (
    `raceId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `race_name_key`(`name`),
    PRIMARY KEY (`raceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
