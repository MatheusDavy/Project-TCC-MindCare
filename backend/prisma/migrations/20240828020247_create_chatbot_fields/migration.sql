/*
  Warnings:

  - You are about to drop the column `question` on the `chatbot` table. All the data in the column will be lost.
  - You are about to drop the column `responde` on the `chatbot` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `chatbot_question_key` ON `chatbot`;

-- AlterTable
ALTER TABLE `chatbot` DROP COLUMN `question`,
    DROP COLUMN `responde`,
    ADD COLUMN `response` VARCHAR(191) NULL;
