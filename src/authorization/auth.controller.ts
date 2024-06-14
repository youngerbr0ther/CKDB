import { Controller, Post, Body } from '@nestjs/common';
import { AuthorizationService } from './auth.service';
import { User } from './User'; // Убедитесь, что User импортирован здесь

@Controller()
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('/registration')
  async registration(@Body() dto: User): Promise<any> {
    return await this.authorizationService.registration(dto);
  }
  @Post('/login')
  async login(@Body() dto: User): Promise<any> {
    return await this.authorizationService.login(dto);
  }
}
