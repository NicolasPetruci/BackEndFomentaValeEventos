-- CreateEnum
CREATE TYPE "tipoEvento" AS ENUM ('FORMACAO', 'CURSO', 'HACKATHON');

-- CreateTable
CREATE TABLE "Curso" (
    "idCurso" SERIAL NOT NULL,
    "nomeCurso" TEXT NOT NULL,
    "dataCurso" TEXT NOT NULL,
    "tempoInicio" TIMESTAMP(3) NOT NULL,
    "tempoFinalizacao" TIMESTAMP(3) NOT NULL,
    "palestrante" TEXT,
    "descricaoCurso" TEXT NOT NULL,
    "observacao" TEXT,
    "arrecadacao" TEXT,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("idCurso")
);

-- CreateTable
CREATE TABLE "Palestrante" (
    "idPalestrante" SERIAL NOT NULL,
    "nomePalestrante" TEXT NOT NULL,
    "telefonePalestrante" TEXT NOT NULL,
    "emailPalestrante" TEXT NOT NULL,

    CONSTRAINT "Palestrante_pkey" PRIMARY KEY ("idPalestrante")
);
