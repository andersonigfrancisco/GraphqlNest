import { UsersService } from '@application/services/users.service';
import { Module } from '@nestjs/common';
import { UsersResolver } from '@resolvers/users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
