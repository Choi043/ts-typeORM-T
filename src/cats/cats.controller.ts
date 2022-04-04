import { Cat } from './interface/cat.interface';
import { CreateCatDto  } from './createCatDto';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action return a #${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() createCatDto: CreateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id')id: string){
        return `This action removes a #${id} cat`;
    }
}
