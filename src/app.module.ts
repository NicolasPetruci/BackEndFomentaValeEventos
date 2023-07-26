import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { PalestranteModule } from './palestrante/palestrante.module';


@Module({
  imports: [
    CursoModule,
    PalestranteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
