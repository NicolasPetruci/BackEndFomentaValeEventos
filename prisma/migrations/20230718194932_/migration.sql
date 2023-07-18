-- CreateTable
CREATE TABLE `Curso` (
    `idCurso` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeDoCurso` VARCHAR(191) NOT NULL,
    `dataDeAcontecimento` VARCHAR(191) NOT NULL,
    `tempoDeInicio` VARCHAR(191) NOT NULL,
    `tempoDeFinalizacao` VARCHAR(191) NOT NULL,
    `nomeDoPalestrante` VARCHAR(191) NOT NULL,
    `descricaoDoCurso` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
