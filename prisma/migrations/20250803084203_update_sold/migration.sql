/*
  Warnings:

  - Made the column `sold` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `image` VARCHAR(255) NULL,
    MODIFY `sold` INTEGER NOT NULL DEFAULT 0;
