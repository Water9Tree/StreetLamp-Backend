import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req) {
    console.log(req);
    return req.user;
  }

  @Post('signIn')
  async login(@Body() req) {
    return this.authService.login(req); // 1
    // return req.user;
  }
}
