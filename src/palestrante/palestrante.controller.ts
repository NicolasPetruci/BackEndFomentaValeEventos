import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalestranteService } from './palestrante.service';
import { CreatePalestranteDto } from './dto/create-palestrante.dto';
import { UpdatePalestranteDto } from './dto/update-palestrante.dto';

@Controller('palestrante')
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Post()
  create(@Body() createPalestranteDto: CreatePalestranteDto) {
    return this.palestranteService.create(createPalestranteDto);
  }

  @Get()
  findAll() {
    return this.palestranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palestranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalestranteDto: UpdatePalestranteDto) {
    return this.palestranteService.update(+id, updatePalestranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palestranteService.remove(+id);
  }
}
