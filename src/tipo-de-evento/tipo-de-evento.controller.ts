import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDeEventoService } from './tipo-de-evento.service';
import { CreateTipoDeEventoDto } from './dto/create-tipo-de-evento.dto';
import { UpdateTipoDeEventoDto } from './dto/update-tipo-de-evento.dto';

@Controller('tipo-de-evento')
export class TipoDeEventoController {
  constructor(private readonly tipoDeEventoService: TipoDeEventoService) {}

  @Post()
  create(@Body() createTipoDeEventoDto: CreateTipoDeEventoDto) {
    return this.tipoDeEventoService.create(createTipoDeEventoDto);
  }

  @Get()
  findAll() {
    return this.tipoDeEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDeEventoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDeEventoDto: UpdateTipoDeEventoDto) {
    return this.tipoDeEventoService.update(+id, updateTipoDeEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDeEventoService.remove(+id);
  }
}
