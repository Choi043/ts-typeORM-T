import { Types } from './entity/types.entity';
import { TypesService } from './types.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {
    }
    @Get()
    findAll(): Promise<Types[]> {
        return this.typesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id: number): Promise<Types> {
        return this.typesService.findOne(id);
    }

    @Post()
    create(@Body() types: Types) {
        return this.typesService.create(types);
    }
}
