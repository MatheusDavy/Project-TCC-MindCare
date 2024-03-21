/*
  Warnings:

  - You are about to alter the column `status` on the `friends` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(1))`.
  - The values [OAUTH_USER] on the enum `users_role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `users_oauth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_idRequestedOAuth_fkey`;

-- DropForeignKey
ALTER TABLE `users_oauth` DROP FOREIGN KEY `users_oauth_utilsInfoId_fkey`;

-- AlterTable
ALTER TABLE `friends` MODIFY `status` ENUM('SENT', 'RECUSED', 'FRIEND', 'NONE') NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'USER') NOT NULL;

-- DropTable
DROP TABLE `users_oauth`;
