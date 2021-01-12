import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsEntity } from './cats.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CatsEntity])
    ],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
