import { Injectable , BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';

@Injectable()
export class EscalasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEscalaDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: data.userId },
    });
  
    if (!userExists) {
      throw new BadRequestException('Usuário não existe');
    }
  
    return this.prisma.escala.create({
      data: {
        titulo: data.titulo,
        data: new Date(data.data),
        userId: data.userId,
      },
    });
  }

  findAll() {
    return this.prisma.escala.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.escala.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: number, data: UpdateEscalaDto) {
    return this.prisma.escala.update({
      where: { id },
      data: {
        ...(data.titulo && { titulo: data.titulo }),
        ...(data.data && { data: new Date(data.data) }),
        ...(data.userId && { userId: data.userId }),
      },
    });
  } 

  remove(id: number) {
    return this.prisma.escala.delete({
      where: { id },
    });
  }
  
  findByUser(userId: number) {
    return this.prisma.escala.findMany({
      where: { userId },
    });
  }
  
  
}
