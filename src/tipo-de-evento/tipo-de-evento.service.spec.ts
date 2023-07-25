import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeEventoService } from './tipo-de-evento.service';

describe('TipoDeEventoService', () => {
  let service: TipoDeEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDeEventoService],
    }).compile();

    service = module.get<TipoDeEventoService>(TipoDeEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
