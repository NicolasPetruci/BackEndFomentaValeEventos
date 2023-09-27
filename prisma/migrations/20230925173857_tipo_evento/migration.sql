/*
  Warnings:

  - Added the required column `tipoEvento` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoEvento" AS ENUM ('FORMACAO', 'CURSO', 'HACKATHON');

-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "tipoEvento" "TipoEvento" NOT NULL;

-- DropEnum
DROP TYPE "tipoEvento";
