import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from '../auth/auth.module';
import { AartiController } from './aarti.controller';
import { Aarti } from './aarti.entity';
import { AartiService } from './aarti.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aarti]), AuthModule, UserModule],
  controllers: [AartiController],
  providers: [AartiService],
})
export class AartiModule {}
