import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Types } from './entity/types.entity';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([Types])],
  exports: [TypeOrmModule],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
