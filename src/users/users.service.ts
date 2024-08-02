import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: { name: string; email: string }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
