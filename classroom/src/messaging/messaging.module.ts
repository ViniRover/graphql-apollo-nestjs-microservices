import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { PurchaseController } from './controllers/purchases.controller';

@Module({
  controllers: [PurchaseController],
  providers: [StudentsService, EnrollmentsService, CoursesService],
  imports: [DatabaseModule],
})
export class MessagingModule {}
