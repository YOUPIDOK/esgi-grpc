-- CreateTable
CREATE TABLE `race_participation` (
    `raceId` INTEGER NOT NULL,
    `driverId` INTEGER NOT NULL,
    `carId` INTEGER NOT NULL,

    PRIMARY KEY (`raceId`, `driverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
