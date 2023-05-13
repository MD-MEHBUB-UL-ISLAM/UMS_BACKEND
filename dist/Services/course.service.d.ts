import { Repository } from 'typeorm';
import { CourseForm } from "../DTO/course.dto";
import { CourseEntity } from "../Entity/course.entity";
export declare class CourseService {
    private courseRepo;
    constructor(courseRepo: Repository<CourseEntity>);
    getCoursebyID(id: any): any;
    getIndex(): any;
    insertManager(mydto: CourseForm): any;
    getAdminByManagerID(id: any): any;
}
