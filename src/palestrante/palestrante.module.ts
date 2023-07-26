import { Module } from '@nestjs/common';
import { PalestranteService } from './palestrante.service';
import { PalestranteController } from './palestrante.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PalestranteController],
  providers: [PalestranteService, PrismaService]
})
export class PalestranteModule {}
