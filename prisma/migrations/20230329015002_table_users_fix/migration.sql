/*
  Warnings:

  - You are about to drop the column `user` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_user_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `user`,
    ADD COLUMN `username` VARCHAR(15) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
