import {
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UpdatePasswordDTO } from './dto/update-password.dto';
import { UpdateUserAdminDTO } from './dto/update-user-admin.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './user.entity';
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  constructor(private jwtService: JwtService) {
    super();
  }
  async createUser(authCredentialsDTO: AuthCredentialsDTO) {
    const { username, password, department, email } = authCredentialsDTO;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.create({
      username,
      department,
      email,
      password: hashedPassword,
      role: 'Unauthorized',
    });
    try {
      return await this.save(user);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new ConflictException(`${error.detail}`);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async updateUserPassword(
    updatePasswordDTO: UpdatePasswordDTO,
    userId: string,
  ): Promise<{ success: boolean }> {
    const { password, oldPassword } = updatePasswordDTO;
    if (password === oldPassword) {
      throw new ConflictException('You have entered same password');
    }
    const user = await this.findOne(userId);

    const isMatched = await bcrypt.compare(oldPassword, user.password);
    if (!isMatched) {
      throw new ForbiddenException('Old password is incorrect');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    try {
      this.update(user.id, user);
      return { success: true };
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async updateUserWithAdmin(
    updateUserDTO: UpdateUserAdminDTO,
    userId: string,
  ): Promise<{ success: boolean }> {
    const { password, department, role } = updateUserDTO;
    const user = await this.findOne(userId);
    const isMatched = password
      ? await bcrypt.compare(password, user.password)
      : 1;
    if (!isMatched) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    user.department = department;
    user.role = role;
    this.update(user.id, user);
    return { success: true };
  }

  async updateUser(
    updateUserDTO: UpdateUserDTO,
    userId: string,
  ): Promise<{ success: boolean }> {
    const { username } = updateUserDTO;
    const user = await this.findOne(userId);

    user.username = username;
    try {
      this.update(user.id, user);
      return { success: true };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
  async deleteUser(userId: string): Promise<{ success: boolean }> {
    const result = await this.delete(userId);
    if (result.affected) {
      return { success: true };
    }
    throw new NotFoundException(`No user with Id '${userId}' exists`);
  }
}
