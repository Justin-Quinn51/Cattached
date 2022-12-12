/*
  Warnings:

  - Added the required column `descript` to the `Breed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Breed" ADD COLUMN     "descript" TEXT NOT NULL;
