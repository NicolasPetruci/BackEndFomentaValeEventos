import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeEventoController } from './tipo-de-evento.controller';
import { TipoDeEventoService } from './tipo-de-evento.service';

describe('TipoDeEventoController', () => {
  let controller: TipoDeEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDeEventoController],
      providers: [TipoDeEventoService],
    }).compile();

    controller = module.get<TipoDeEventoController>(TipoDeEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
