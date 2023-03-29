/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `email`,
    ADD COLUMN `password` VARCHAR(100) NOT NULL DEFAULT '',
    ADD COLUMN `type` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `user` VARCHAR(15) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_user_key` ON `User`(`user`);

-- CreateIndex
CREATE UNIQUE INDEX `User_password_key` ON `User`(`password`);
