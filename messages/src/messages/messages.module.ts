import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServeice } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServeice, MessagesRepository],
})
export class MessagesModule {}
