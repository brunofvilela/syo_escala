import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EscalasService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.escala.create({ data });
  }

  findAll() {
    return this.prisma.escala.findMany({
      include: { user: true }
    });
  }
}
