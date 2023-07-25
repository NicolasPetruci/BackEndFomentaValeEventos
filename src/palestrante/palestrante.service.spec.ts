import { Test, TestingModule } from '@nestjs/testing';
import { PalestranteService } from './palestrante.service';

describe('PalestranteService', () => {
  let service: PalestranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalestranteService],
    }).compile();

    service = module.get<PalestranteService>(PalestranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
