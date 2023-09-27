import { TipoEvento } from '@prisma/client';

export class CreateCursoDto {
  nomeCurso: string;
  dataCurso: string;
  tempoInicio?: Date | string;
  tempoFinalizacao?: Date | string;
  palestranteId: number;
  participante: number;
  tipoEvento: TipoEvento;
  descricaoCurso: string;
  observacao?: string | null;
  arrecadacao?: number | null;
}
