-- AlterTable
ALTER TABLE `users` ADD COLUMN `userFriendsId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users_oauth` ADD COLUMN `friendsId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `user_friends` (
    `id` VARCHAR(191) NOT NULL,
    `date_solicitation` DATETIME(3) NOT NULL,
    `data_approved` DATETIME(3) NULL,
    `id_request` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_userFriendsId_fkey` FOREIGN KEY (`userFriendsId`) REFERENCES `user_friends`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_oauth` ADD CONSTRAINT `users_oauth_friendsId_fkey` FOREIGN KEY (`friendsId`) REFERENCES `user_friends`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
