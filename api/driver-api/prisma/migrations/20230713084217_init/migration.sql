-- CreateTable
CREATE TABLE `driver` (
    `car_id` INTEGER NOT NULL,
    `nb_exemplary` INTEGER NOT NULL,
    `image_filename` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`car_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
