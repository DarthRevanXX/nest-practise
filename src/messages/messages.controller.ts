import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [];
  }

  @Post()
  createMessage() {
    return 'This action adds a new message';
  }

  @Get(':id')
  getMessageById() {
    return 'This action returns a message';
  }
}
