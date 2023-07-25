import { Injectable } from '@nestjs/common';
import { CreatePalestranteDto } from './dto/create-palestrante.dto';
import { UpdatePalestranteDto } from './dto/update-palestrante.dto';

@Injectable()
export class PalestranteService {
  create(createPalestranteDto: CreatePalestranteDto) {
    return 'This action adds a new palestrante';
  }

  findAll() {
    return `This action returns all palestrante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palestrante`;
  }

  update(id: number, updatePalestranteDto: UpdatePalestranteDto) {
    return `This action updates a #${id} palestrante`;
  }

  remove(id: number) {
    return `This action removes a #${id} palestrante`;
  }
}
