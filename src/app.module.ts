import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CursoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
