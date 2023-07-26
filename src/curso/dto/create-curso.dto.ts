export class CreateCursoDto {
    
    idCurso: number;
    categoriaEvento: Enumerator;
    nomeCurso: string;
    dataCurso: string;
    tempoInicio: string | Date;
    tempoFinalizacao: string | Date;
    palestrante?: string;
    descricaoCurso: string;
    observacao?: string;
    arrecadacao?: string;
    

}
