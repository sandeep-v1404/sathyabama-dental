import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt.payload.interface';
import { SignInDTO } from './dto/sign-in.dto';
import { User } from './user.entity';
import { UpdatePasswordDTO } from './dto/update-password.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UpdateUserAdminDTO } from './dto/update-user-admin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersRepository.createUser(authCredentialsDTO);
    const payload: JwtPayload = { id: user.id };
    const accessToken: string = await this.jwtService.sign(payload);
    return { accessToken };
  }

  async signIn(signInDTO: SignInDTO): Promise<{ accessToken: string }> {
    const { email, password } = signInDTO;
    const user = await this.usersRepository.findOne({ email });
    if (user && password && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { id: user.id };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async updatePassword(
    updatePasswordDTO: UpdatePasswordDTO,
    user: User,
  ): Promise<{ success: boolean }> {
    return await this.usersRepository.updateUserPassword(
      updatePasswordDTO,
      user.id,
    );
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['email', 'department', 'id', 'role', 'username'],
    });
  }

  async updateUserWithAdmin(
    updateUserAdminDTO: UpdateUserAdminDTO,
    userId: string,
  ): Promise<{ success: boolean }> {
    return await this.usersRepository.updateUserWithAdmin(
      updateUserAdminDTO,
      userId,
    );
  }
  async updateUser(
    updateUserDTO: UpdateUserDTO,
    userId: string,
  ): Promise<{ success: boolean }> {
    return await this.usersRepository.updateUser(updateUserDTO, userId);
  }

  async getUserByIdAdmin(userId: string): Promise<User> {
    return await this.usersRepository.findOne(userId);
  }

  async deleteUserWithAdmin(userId: string): Promise<{ success: boolean }> {
    return this.usersRepository.deleteUser(userId);
  }
}
