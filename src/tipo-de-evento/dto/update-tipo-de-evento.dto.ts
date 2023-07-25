import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDeEventoDto } from './create-tipo-de-evento.dto';

export class UpdateTipoDeEventoDto extends PartialType(CreateTipoDeEventoDto) {}
