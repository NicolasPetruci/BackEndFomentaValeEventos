import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    idCurso: number;

    @Column({ length: 30 })
    nomeDoCurso: string;

    @Column()
    dataDeAcontecimento: string;

    @Column()
    tempoDeInicio: string;

    @Column()
    tempoDeFinalizacao: string;

    @Column({ length: 30 })
    nomeDoPalestrante: string;

    @Column({ length: 500 })
    descricaoDoCurso: string;

    @Column({ length: 1000 })
    observacao: string;
    

}
