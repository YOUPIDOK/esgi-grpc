-- CreateTable
CREATE TABLE `collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `nb_clipper` INTEGER NOT NULL,
    `clipper_type` VARCHAR(30) NOT NULL,
    `is_official` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `collection_user_id_idx`(`user_id`),
    UNIQUE INDEX `collection_user_id_name_key`(`user_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clipper` (
    `id` INTEGER NOT NULL,
    `collection_id` INTEGER NOT NULL,
    `number` INTEGER NOT NULL,
    `nb_exemplary` INTEGER NOT NULL,
    `image_filename` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `clipper_collection_id_number_key`(`collection_id`, `number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clipper` ADD CONSTRAINT `clipper_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
