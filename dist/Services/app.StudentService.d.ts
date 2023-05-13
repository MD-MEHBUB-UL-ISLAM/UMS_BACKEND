import { Repository } from 'typeorm';
import { StudentEntity } from "../Entity/app.StudentEntity.entity";
import { StudentFormUpdate } from "../FormUpdate/app.studentformupdate";
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class StudentService {
    private studentRepo;
    private mailerService;
    constructor(studentRepo: Repository<StudentEntity>, mailerService: MailerService);
    getIndex(): any;
    getUserByID(id: any): Promise<StudentEntity>;
    getUserByIDName(qry: any): any;
    insertUser(mydto: any): Promise<any>;
    updateUser(fullname: any, email: any): any;
    updateUserbyid(mydto: StudentFormUpdate, id: any): any;
    deleteUserbyid(id: any): any;
    signup(mydto: any): Promise<any>;
    signin(mydto: any): Promise<boolean>;
    sendEmail(mydata: any): Promise<any>;
}
