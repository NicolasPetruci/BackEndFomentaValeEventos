import { Injectable, Body } from '@nestjs/common';
import { CreatePalestranteDto } from './dto/create-palestrante.dto';
import { UpdatePalestranteDto } from './dto/update-palestrante.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PalestranteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(@Body() data: CreatePalestranteDto) {
    return await this.prisma.palestrante.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.palestrante.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.palestrante.findUnique({
      where: {
        idPalestrante: id,
      },
    });
  }

  async update(id: number, data: UpdatePalestranteDto) {
    return await this.prisma.palestrante.update({
      where: { idPalestrante: id },
      data,
    });
  }

  async remove(id: number): Promise<string> {
    await this.prisma.palestrante.delete({
      where: { idPalestrante: id },
    });
    return `Palestrante ${id} deletado`;
  }
}
