/*
  Warnings:

  - You are about to drop the column `palestranteId` on the `Curso` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Curso" DROP CONSTRAINT "Curso_palestranteId_fkey";

-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "palestranteId";

-- CreateTable
CREATE TABLE "_PalestranteEvento" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PalestranteEvento_AB_unique" ON "_PalestranteEvento"("A", "B");

-- CreateIndex
CREATE INDEX "_PalestranteEvento_B_index" ON "_PalestranteEvento"("B");

-- AddForeignKey
ALTER TABLE "_PalestranteEvento" ADD CONSTRAINT "_PalestranteEvento_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso"("idCurso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PalestranteEvento" ADD CONSTRAINT "_PalestranteEvento_B_fkey" FOREIGN KEY ("B") REFERENCES "Palestrante"("idPalestrante") ON DELETE CASCADE ON UPDATE CASCADE;
