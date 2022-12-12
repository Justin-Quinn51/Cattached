/*
  Warnings:

  - You are about to drop the column `descript` on the `Breed` table. All the data in the column will be lost.
  - Added the required column `description` to the `Breed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Breed" DROP COLUMN "descript",
ADD COLUMN "description" TEXT NOT NULL;
