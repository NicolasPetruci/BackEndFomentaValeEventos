import { Injectable, Body } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common/decorators';



@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ){}
  
  async create(@Body() createCursoDto: CreateCursoDto) {
    return await this.cursoRepository.save(createCursoDto);
  }

  
  async findAll(): Promise <Curso[]> {
    return await this.cursoRepository.find();
  }

  async findOne(id: number) {
    return await this.cursoRepository.findOne({
      where: {
        idCurso: id,
      }
    });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    await this.cursoRepository.update(id, updateCursoDto);
    return `Curso ${id} Atualizado`;
  }

  async remove(id: number): Promise<string> {
    await this.cursoRepository.delete(id);
    return `Curso ${id} deletado`;
  }
}
