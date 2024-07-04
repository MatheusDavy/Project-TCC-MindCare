/*
  Warnings:

  - You are about to drop the column `idRequest` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `idRequested` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatMessage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `from` to the `friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `read` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_idRequested_fkey`;

-- AlterTable
ALTER TABLE `friends` DROP COLUMN `idRequest`,
    DROP COLUMN `idRequested`,
    ADD COLUMN `from` VARCHAR(191) NOT NULL,
    ADD COLUMN `to` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `type`,
    ADD COLUMN `read` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `Chat`;

-- DropTable
DROP TABLE `ChatMessage`;

-- CreateTable
CREATE TABLE `Videos` (
    `id` VARCHAR(191) NOT NULL,
    `id_video` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_from_fkey` FOREIGN KEY (`from`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
