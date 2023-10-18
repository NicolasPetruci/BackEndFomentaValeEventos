import { Palestrante, TipoEvento } from '@prisma/client';

export class CreateCursoDto {
  nomeCurso: string;
  dataCurso: string;
  tempoInicio?: Date | string;
  tempoFinalizacao?: Date | string;
  palestrante: Palestrante[];
  participante: number;
  tipoEvento: TipoEvento;
  descricaoCurso: string;
  observacao?: string | null;
  arrecadacao?: number | null;
}
