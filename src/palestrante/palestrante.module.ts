import { Module } from '@nestjs/common';
import { PalestranteService } from './palestrante.service';
import { PalestranteController } from './palestrante.controller';

@Module({
  controllers: [PalestranteController],
  providers: [PalestranteService]
})
export class PalestranteModule {}
