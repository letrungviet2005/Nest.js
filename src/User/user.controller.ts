import { Controller, Get, Post, Body, ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'test2',
      },
    ];
  }

  @Post()
  createUser(@Body('id', ParseIntPipe) id: number, @Body('name') name: string) {
    return {
      id: id,
      name: name,
    };
  }
}
