import { Cat } from './entity/cats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  exports: [TypeOrmModule],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
