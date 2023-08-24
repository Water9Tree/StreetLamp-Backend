import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authRepository: AuthRepository,
  ) {}

  async login(user: { loginId: string; password: string; expoToken: string }) {
    console.log(user);
    const userAccounts = this.authRepository.findByLoginIdAndPassword(user);
    return userAccounts
      .then((res) => {
        if (res.length === 0) {
          throw `계정 정보가 없습니다. 입력하신 loginId: ${user.loginId}, password: ${user.password}`;
        }

        this.authRepository.updateExpoToken(user);

        const userByFindFirst = res[0];
        const payload = {
          username: userByFindFirst.username,
          email: userByFindFirst.email,
          role: userByFindFirst.role,
        };
        return {
          userByFindFirst,
          access_token: this.jwtService.sign(payload),
        };
      })
      .catch((err) => {
        throw `Error 로그인 in service:, ${err}`;
      });
  }
}
