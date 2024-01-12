/*
  Warnings:

  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `refresh_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `refresh_token` DROP FOREIGN KEY `refresh_token_userId_fkey`;

-- DropIndex
DROP INDEX `users_document_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `age`,
    DROP COLUMN `avatar`,
    DROP COLUMN `cep`,
    DROP COLUMN `city`,
    DROP COLUMN `document`,
    DROP COLUMN `state`,
    ADD COLUMN `utilsInfoId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users_oauth` ADD COLUMN `utilsInfoId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `refresh_token`;

-- CreateTable
CREATE TABLE `util_info` (
    `id` VARCHAR(191) NOT NULL,
    `document` INTEGER NULL,
    `cep` INTEGER NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `age` INTEGER NULL,

    UNIQUE INDEX `util_info_document_key`(`document`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_utilsInfoId_fkey` FOREIGN KEY (`utilsInfoId`) REFERENCES `util_info`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_oauth` ADD CONSTRAINT `users_oauth_utilsInfoId_fkey` FOREIGN KEY (`utilsInfoId`) REFERENCES `util_info`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
