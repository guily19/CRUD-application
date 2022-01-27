import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'this endpoint return all cats';
  }

  @Get('ab*cd')
  wildCard() {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'this action adds a new cat';
  }
}
