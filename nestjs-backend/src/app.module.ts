import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Department0Module } from './department0/department0.module';
import { Department1Module } from './department1/department1.module';
import { Department2Module } from './department2/department2.module';
import { Department3Module } from './department3/department3.module';
import { Department4Module } from './department4/department4.module';
import { Department5Module } from './department5/department5.module';
import { Department6Module } from './department6/department6.module';
import { Department7Module } from './department7/department7.module';
import { Department8Module } from './department8/department8.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { AppController } from './app.controller';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    //   exclude: ['/api*'],
    // }),
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    PatientsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          synchronize: true,
          entities: [__dirname + '/../**/*.entity.js'],
          host: configService.get('DB_HOST'),
          database: configService.get('DB_DATABASE_NAME'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          port: configService.get('DB_PORT'),
          uuidExtension: 'pgcrypto',
        };
      },
    }),
    AuthModule,
    Department0Module,
    Department1Module,
    Department2Module,
    Department3Module,
    Department4Module,
    Department5Module,
    Department6Module,
    Department7Module,
    Department8Module,
  ],
  controllers: [AppController],
})
export class AppModule {}
