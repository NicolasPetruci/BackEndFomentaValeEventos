import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { PalestranteModule } from './palestrante/palestrante.module';
import { TipoDeEventoModule } from './tipo-de-evento/tipo-de-evento.module';


@Module({
  imports: [
    CursoModule,
    PalestranteModule,
    TipoDeEventoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
