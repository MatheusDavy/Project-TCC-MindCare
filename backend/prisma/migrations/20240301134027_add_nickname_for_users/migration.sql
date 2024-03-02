/*
  Warnings:

  - You are about to drop the `user_friends` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nickname]` on the table `users_oauth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `users_oauth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users_oauth` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_friends` DROP FOREIGN KEY `user_friends_idRequestedOAuth_fkey`;

-- DropForeignKey
ALTER TABLE `user_friends` DROP FOREIGN KEY `user_friends_idRequested_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `nickname` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users_oauth` ADD COLUMN `nickname` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('ADMIN', 'USER', 'OAUTH_USER') NOT NULL;

-- DropTable
DROP TABLE `user_friends`;

-- CreateTable
CREATE TABLE `friends` (
    `id` VARCHAR(191) NOT NULL,
    `idRequest` VARCHAR(191) NOT NULL,
    `idRequested` VARCHAR(191) NULL,
    `idRequestedOAuth` VARCHAR(191) NULL,
    `status` BOOLEAN NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movies` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `idCategory` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movies_categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_nickname_key` ON `users`(`nickname`);

-- CreateIndex
CREATE UNIQUE INDEX `users_oauth_nickname_key` ON `users_oauth`(`nickname`);

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_idRequested_fkey` FOREIGN KEY (`idRequested`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_idRequestedOAuth_fkey` FOREIGN KEY (`idRequestedOAuth`) REFERENCES `users_oauth`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_idCategory_fkey` FOREIGN KEY (`idCategory`) REFERENCES `movies_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
