
import { CreateCatDto  } from './createCatDto';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from '../domain/cats.entity';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: number): Promise<Cat> {
        return this.catsService.findOne(id);
    }

    @Post()
    create(@Body() cat: Cat) {
        return this.catsService.create(cat);
    }

    @Delete(':id')
    remove(@Param('id')id: number){
        return this.catsService.remove(id);
    }
}
