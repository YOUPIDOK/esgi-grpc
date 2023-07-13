-- CreateTable
CREATE TABLE `car` (
    `carId` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `car_model_key`(`model`),
    PRIMARY KEY (`carId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
