import { Module } from '@nestjs/common';
import { AuthorizationController } from './auth.controller';
import { AuthorizationService } from './auth.service';
import { Database } from 'src/DatabaseConnection/database';
@Module({
  imports: [],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, Database],
})
export class AuthorizationModule {}
