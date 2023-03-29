-- DropIndex
DROP INDEX `User_password_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(191) NOT NULL;
