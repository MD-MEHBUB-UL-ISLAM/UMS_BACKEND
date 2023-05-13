import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './Module/app.StudentModule';
import { StudentRegModule } from './Module/registermodule.module';
import { CourseModule } from './Module/course.module';
import { BookModule } from './Module/app.LibrarianModule';
import { NoteModule } from './Module/app.NotesModule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [StudentModule,StudentRegModule, CourseModule,BookModule,NoteModule, TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'containers-us-west-32.railway.app',
    port: 6206,
    username: 'postgres',
    password: 'krns1gz22ObPToEi1axf',
    database: 'railway',
    autoLoadEntities: true,
    synchronize: true,

  }
  

  ), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}