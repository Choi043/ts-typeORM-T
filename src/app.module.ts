import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Types } from './types/entity/types.entity';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
