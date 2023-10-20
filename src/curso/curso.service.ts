import { Injectable, Body } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCursoDto) {
    const { palestrante, ...rest } = data;

    const listaPalestranteNumeros = palestrante.map((palestrante) => {
      return palestrante.idPalestrante;
    });

    console.log(data, listaPalestranteNumeros);

    return await this.prisma.curso.create({
      data: {
        ...rest,
        palestrante: {
          connect: listaPalestranteNumeros.map((palestranteNumero) => ({
            idPalestrante: palestranteNumero,
          })),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.curso.findMany({
      include: {
        palestrante: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.curso.findUnique({
      include: {
        palestrante: true,
      },
      where: {
        idCurso: id,
      },
    });
  }

  async update(id: number, data: UpdateCursoDto) {
    const { palestrante, ...rest } = data;
    const listaPalestranteNumeros = palestrante.map((palestrante) => {
      return palestrante.idPalestrante;
    });

    return await this.prisma.curso.update({
      where: { idCurso: id },
      data: {
        ...rest,
        palestrante: {
          set: listaPalestranteNumeros.map((palestranteNumero) => ({
            idPalestrante: palestranteNumero,
          })),
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.curso.delete({
      where: { idCurso: id },
    });
    return `Curso ${id} deletado`;
  }
}
