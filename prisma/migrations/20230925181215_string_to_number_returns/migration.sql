/*
  Warnings:

  - The `arrecadacao` column on the `Curso` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "arrecadacao",
ADD COLUMN     "arrecadacao" DOUBLE PRECISION;
