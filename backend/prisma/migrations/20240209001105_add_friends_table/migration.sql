/*
  Warnings:

  - You are about to drop the column `data_approved` on the `user_friends` table. All the data in the column will be lost.
  - You are about to drop the column `date_solicitation` on the `user_friends` table. All the data in the column will be lost.
  - You are about to drop the column `id_request` on the `user_friends` table. All the data in the column will be lost.
  - You are about to drop the column `userFriendsId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `friendsId` on the `users_oauth` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users_oauth` table. All the data in the column will be lost.
  - Added the required column `idRequest` to the `user_friends` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_userFriendsId_fkey`;

-- DropForeignKey
ALTER TABLE `users_oauth` DROP FOREIGN KEY `users_oauth_friendsId_fkey`;

-- AlterTable
ALTER TABLE `user_friends` DROP COLUMN `data_approved`,
    DROP COLUMN `date_solicitation`,
    DROP COLUMN `id_request`,
    ADD COLUMN `dateApproved` DATETIME(3) NULL,
    ADD COLUMN `idRequest` VARCHAR(191) NOT NULL,
    ADD COLUMN `idRequested` VARCHAR(191) NULL,
    ADD COLUMN `idRequestedOAuth` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `userFriendsId`;

-- AlterTable
ALTER TABLE `users_oauth` DROP COLUMN `friendsId`,
    DROP COLUMN `role`;

-- AddForeignKey
ALTER TABLE `user_friends` ADD CONSTRAINT `user_friends_idRequested_fkey` FOREIGN KEY (`idRequested`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_friends` ADD CONSTRAINT `user_friends_idRequestedOAuth_fkey` FOREIGN KEY (`idRequestedOAuth`) REFERENCES `users_oauth`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
