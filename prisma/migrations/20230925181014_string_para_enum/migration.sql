/*
  Warnings:

  - You are about to drop the column `palestrante` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `palestranteId` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "palestrante",
ADD COLUMN     "palestranteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_palestranteId_fkey" FOREIGN KEY ("palestranteId") REFERENCES "Palestrante"("idPalestrante") ON DELETE RESTRICT ON UPDATE CASCADE;
