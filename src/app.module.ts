 import { MiddlewareConsumer,Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AdminController} from './admin/admin.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/user_manager'),
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}