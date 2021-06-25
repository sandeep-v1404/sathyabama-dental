import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { Delete, Param, Put, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { SignInDTO } from './dto/sign-in.dto';
import { UpdatePasswordDTO } from './dto/update-password.dto';
import { UpdateUserAdminDTO } from './dto/update-user-admin.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body() authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signUp(authCredentialsDTO);
  }

  @Post('/signin')
  async signIn(@Body() signInDTO: SignInDTO): Promise<{ accessToken: string }> {
    return this.authService.signIn(signInDTO);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  async getUserProfile(@GetUser() user: User) {
    return user;
  }

  @Put('/updatePassword')
  @UseGuards(AuthGuard())
  async updatePassword(
    @Body() updatePasswordDTO: UpdatePasswordDTO,
    @GetUser() user: User,
  ): Promise<{ success: boolean }> {
    return this.authService.updatePassword(updatePasswordDTO, user);
  }

  @Get('/users')
  @UseGuards(AuthGuard())
  async getAllUsers(@GetUser('Administrator') _user: User) {
    return this.authService.getAllUsers();
  }

  @Get('/users/:userId')
  @UseGuards(AuthGuard())
  async getUserByIdAdmin(
    @GetUser('Administrator') _user: User,
    @Param('userId') userId: string,
  ): Promise<User> {
    return this.authService.getUserByIdAdmin(userId);
  }

  @Put('/user/update')
  @UseGuards(AuthGuard())
  async updateUserById(
    @GetUser() user: User,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<{ success: boolean }> {
    return this.authService.updateUser(updateUserDTO, user.id);
  }

  @Put('/users/:userId')
  @UseGuards(AuthGuard())
  async updateUserByIdAdmin(
    @GetUser('Administrator') user: User,
    @Body() updateUserAdminDTO: UpdateUserAdminDTO,
    @Param('userId') userId: string,
  ): Promise<{ success: boolean }> {
    if (user.id === userId) {
      throw new UnauthorizedException("Admin can't be edited");
    }
    return this.authService.updateUserWithAdmin(updateUserAdminDTO, userId);
  }

  @Delete('/users/:userId')
  @UseGuards(AuthGuard())
  async deleteUserByIdAdmin(
    @GetUser('Administrator') user: User,
    @Param('userId') userId: string,
  ): Promise<{ success: boolean }> {
    if (user.id === userId) {
      throw new UnauthorizedException("Admin can't be deleted");
    }
    return this.authService.deleteUserWithAdmin(userId);
  }
}
