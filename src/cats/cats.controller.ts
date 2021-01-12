import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatsService} from './cats.service';
import { Cat } from './cast.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  create(@Body() newCat: Cat) {
    return this.catsService.create(newCat);
  }

  @Get()
  getAll() {
    return this.catsService.findAll();
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() newCat: Cat)  {
    return this.catsService.update(id, newCat);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}