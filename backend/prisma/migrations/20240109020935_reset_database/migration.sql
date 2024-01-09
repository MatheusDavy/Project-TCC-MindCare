/*
  Warnings:

  - Added the required column `role` to the `users_oauth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ALTER COLUMN `role` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users_oauth` ADD COLUMN `role` ENUM('ADMIN', 'USER') NOT NULL;
