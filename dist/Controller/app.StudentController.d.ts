/// <reference types="multer" />
import { StudentService } from '../Services/app.StudentService';
import { StudentFormUpdate } from '../FormUpdate/app.studentformupdate';
import { StudentForm } from '../DTO/app.StudentForm.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getAdmin(): any;
    getAdminByID(id: number): any;
    getAdminByIDName(qry: any): any;
    insertAdmin(mydto: StudentForm, file: Express.Multer.File): Promise<any>;
    updateAdmin(session: any, fullname: string): any;
    updateAdminbyid(mydto: StudentFormUpdate, id: number): any;
    deleteAdminbyid(id: number): any;
    getImages(fullname: any, res: any): void;
    signup(mydto: StudentForm, file: Express.Multer.File): Promise<any>;
    signin(session: any, mydto: StudentForm): Promise<any>;
    signout(session: any): {
        message: string;
    };
    sendEmail(mydata: any): Promise<any>;
}
