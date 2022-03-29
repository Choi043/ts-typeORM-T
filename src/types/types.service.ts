import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Types } from './entity/types.entity';

@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(Types)
        private typesRepository: Repository<Types>,
    ) {}

    findAll(): Promise<Types[]> {
        return this.typesRepository.find();
    }

    findOne(id: number): Promise<Types> {
        return this.typesRepository.findOne();
    }

    async create(types: Types): Promise<void> {
        await this.typesRepository.save(types);
    }

    async remove(id: number): Promise<void> {
        await this.typesRepository.delete(id);
    }

    
}
