import { Module } from '@nestjs/common';
import { EscalasController } from './escalas.controller';
import { EscalasService } from './escalas.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 👈 ISSO resolve o erro
  controllers: [EscalasController],
  providers: [EscalasService],
})
export class EscalasModule {}
