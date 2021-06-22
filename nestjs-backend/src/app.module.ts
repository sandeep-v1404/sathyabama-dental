import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Department1Module } from './department1/department1.module';

@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'sdh',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.js'],
    }),
    AuthModule,
    Department1Module,
  ],
})
export class AppModule {}
