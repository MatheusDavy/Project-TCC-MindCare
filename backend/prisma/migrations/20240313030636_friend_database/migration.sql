/*
  Warnings:

  - You are about to drop the column `idRequestedOAuth` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `friends` table. All the data in the column will be lost.
  - Made the column `idRequested` on table `friends` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_idRequested_fkey`;

-- DropIndex
DROP INDEX `friends_idRequestedOAuth_fkey` ON `friends`;

-- AlterTable
ALTER TABLE `friends` DROP COLUMN `idRequestedOAuth`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `recusedAt` DATETIME(3) NULL,
    ADD COLUMN `requestedAt` DATETIME(3) NULL,
    MODIFY `idRequested` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_idRequested_fkey` FOREIGN KEY (`idRequested`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
