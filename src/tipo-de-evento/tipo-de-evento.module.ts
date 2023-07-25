import { Module } from '@nestjs/common';
import { TipoDeEventoService } from './tipo-de-evento.service';
import { TipoDeEventoController } from './tipo-de-evento.controller';

@Module({
  controllers: [TipoDeEventoController],
  providers: [TipoDeEventoService]
})
export class TipoDeEventoModule {}
