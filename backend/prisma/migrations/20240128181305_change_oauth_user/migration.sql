-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'USER', 'OAUTH_USER') NOT NULL;

-- AlterTable
ALTER TABLE `users_oauth` MODIFY `role` ENUM('ADMIN', 'USER', 'OAUTH_USER') NOT NULL;
