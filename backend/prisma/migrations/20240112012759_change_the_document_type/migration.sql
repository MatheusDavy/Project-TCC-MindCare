/*
  Warnings:

  - You are about to drop the column `avatar` on the `users_oauth` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users_oauth` DROP COLUMN `avatar`;

-- AlterTable
ALTER TABLE `util_info` MODIFY `document` BIGINT NULL;
