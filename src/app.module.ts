import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Types } from './types/entity/types.entity';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      entities: [Types],
      synchronize: true, // false가 안전함
    }),
    TypesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
