import { Injectable, Body } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(@Body() data: CreateCursoDto) {
    return await this.prisma.curso.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.curso.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.curso.findUnique({
      where: {
        idCurso: id,
      },
    });
  }

  async update(id: number, data: UpdateCursoDto) {
    await this.prisma.curso.update({
      where: { idCurso: id },
      data,
    });
    return `Curso ${id} Atualizado`;
  }

  async remove(id: number): Promise<string> {
    await this.prisma.curso.delete({
      where: { idCurso: id },
    });
    return `Curso ${id} deletado`;
  }
}
