import { Injectable } from '@nestjs/common';
import { CreateTipoDeEventoDto } from './dto/create-tipo-de-evento.dto';
import { UpdateTipoDeEventoDto } from './dto/update-tipo-de-evento.dto';

@Injectable()
export class TipoDeEventoService {
  create(createTipoDeEventoDto: CreateTipoDeEventoDto) {
    return 'This action adds a new tipoDeEvento';
  }

  findAll() {
    return `This action returns all tipoDeEvento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDeEvento`;
  }

  update(id: number, updateTipoDeEventoDto: UpdateTipoDeEventoDto) {
    return `This action updates a #${id} tipoDeEvento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDeEvento`;
  }
}
