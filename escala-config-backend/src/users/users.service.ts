import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const hash = await bcrypt.hash(data.password, 10);
  
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        escalas: true,
      },
    });
  }
  
}
  