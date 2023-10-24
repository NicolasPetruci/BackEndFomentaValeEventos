import { Palestrante, TipoEvento } from '@prisma/client';

export class CreateCursoDto {
  idCurso?: number;
  nomeCurso: string;
  dataCurso?: string | null;
  tempoInicio: Date | string;
  tempoFinalizacao: Date | string;
  participante: number;
  tipoEvento?: TipoEvento | null;
  descricaoCurso: string;
  observacao?: string | null;
  arrecadacao?: number | null;
  palestrante?: Palestrante[];
}

