/*
  Warnings:

  - Changed the column `tipoEvento` on the `Curso` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterTable
ALTER TABLE "Curso" ALTER COLUMN "tipoEvento" SET DATA TYPE "TipoEvento"[];
