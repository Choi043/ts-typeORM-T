<<<<<<< HEAD
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Types } from './entity/types.entity';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {};

=======
import { Types } from './entity/types.entity';
import { TypesService } from './types.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {
    }
>>>>>>> 5c4c15fe9368181bb7662203ce94762ae8d43d72
    @Get()
    findAll(): Promise<Types[]> {
        return this.typesService.findAll();
    }
<<<<<<< HEAD

    @Get(':id')
    findOne(@Param('id')id : number): Promise<Types> {
=======
    @Get(':id')
    findOne(@Param('id')id: number): Promise<Types> {
>>>>>>> 5c4c15fe9368181bb7662203ce94762ae8d43d72
        return this.typesService.findOne(id);
    }

    @Post()
<<<<<<< HEAD
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
=======
    create(@Body() types: Types) {
        return this.typesService.create(types);
>>>>>>> 5c4c15fe9368181bb7662203ce94762ae8d43d72
    }
}
