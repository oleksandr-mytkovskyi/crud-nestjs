import { Injectable } from '@nestjs/common';
import { Cat } from './cast.interface';
import { Repository } from 'typeorm/index';
import { InjectRepository } from '@nestjs/typeorm';
import { CatsEntity } from './cats.entity';

@Injectable()
export class CatsService {
constructor(@InjectRepository(CatsEntity)
  private readonly catRepository: Repository<CatsEntity>) { // Подключили репозиторий
}

  findAll() {
    return this.catRepository.find();
  }

  create(data: Cat) {
      return this.catRepository.save(data);
  }

  update(id: string, data: Cat) {
      return this.catRepository.update(id, data)
  }

  delete(id: string) {
    return this.catRepository.delete(id);
  }
}