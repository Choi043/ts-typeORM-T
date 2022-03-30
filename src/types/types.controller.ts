import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Types } from './entity/types.entity';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {};

    @Get()
    findAll(): Promise<Types[]> {
        return this.typesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id : number): Promise<Types> {
        return this.typesService.findOne(id);
    }

    @Post()
    create(@Body()types: Types){
        this.typesService.create(types);
    }

    @Delete(':id')
    remote(@Param('id')id: number) {
        this.typesService.remove(id);
    }

    @Put(':id')
    update(@Param('id')id: number, @Body() types: Types){
        this.typesService.update(id, types);
        return `This action updates a #${id} types`;
    }
}
