import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
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

    async update(id: number, types: Types): Promise<void> {
        const existedTypes = await this.findOne(id);
        if(existedTypes) {
            await getConnection()
                .createQueryBuilder()
                .update(Types)
                .set({
                    name: types.name,
                    age: types.age,
                    phone: types.phone
                })
                .where("id = :id", {id})
                .execute();
        }
    }
    
}
