/*
  Warnings:

  - Made the column `tempoInicio` on table `Curso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tempoFinalizacao` on table `Curso` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Curso" ALTER COLUMN "tempoInicio" SET NOT NULL,
ALTER COLUMN "tempoFinalizacao" SET NOT NULL;
