/*
  Warnings:

  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Series` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestAnotherMigration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestMigration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `startDate` on table `Subscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastEventDate` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `CategoryAssignment` DROP FOREIGN KEY `CategoryAssignment_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Series` DROP FOREIGN KEY `Series_topicId_fkey`;

-- DropForeignKey
ALTER TABLE `TagAssignment` DROP FOREIGN KEY `TagAssignment_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `Video` DROP FOREIGN KEY `Video_seriesId_fkey`;

-- DropForeignKey
ALTER TABLE `Video` DROP FOREIGN KEY `Video_topicId_fkey`;

-- AlterTable
ALTER TABLE `Subscription` MODIFY `startDate` INTEGER NOT NULL,
    MODIFY `lastEventDate` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Answer`;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `CategoryAssignment`;

-- DropTable
DROP TABLE `Question`;

-- DropTable
DROP TABLE `Series`;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `TagAssignment`;

-- DropTable
DROP TABLE `TestAnotherMigration`;

-- DropTable
DROP TABLE `TestMigration`;

-- DropTable
DROP TABLE `Topic`;

-- DropTable
DROP TABLE `Video`;
