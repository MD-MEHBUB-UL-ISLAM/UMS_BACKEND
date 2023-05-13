/// <reference types="multer" />
import { CourseForm } from 'src/DTO/course.dto';
import { CourseService } from 'src/Services/course.service';
import { StudentRegForm } from '../DTO/registerform.dto';
import { StudentRegFormUpdate } from '../FormUpdate/registerformupdate.dto';
import { StudentRegService } from '../Services/registerservice.service';
import { BookService } from 'src/Services/app.LibrarianService';
import { BookForm } from 'src/DTO/app.LibrarianForm.dto';
import { NoteService } from 'src/Services/app.NotesService';
import { NoteForm } from 'src/DTO/app.NotesForm.dto';
export declare class StudentRegController {
    private studentService;
    private courseService;
    private bookService;
    private noteService;
    constructor(studentService: StudentRegService, courseService: CourseService, bookService: BookService, noteService: NoteService);
    getAdmin(): any;
    getallBook(): any;
    getallNote(): any;
    getallcourse(): any;
    getAdminByID(id: number): any;
    getBookByID(id: number): any;
    getNoteByID(id: number): any;
    getCourseByID(id: number): any;
    getAdminByIDName(qry: any): any;
    getBook(qry: any): any;
    insertAdmin(mydto: StudentRegForm, file: Express.Multer.File): Promise<any>;
    updateAdmin(session: any, name: string): any;
    updateAdminbyid(mydto: StudentRegFormUpdate, id: number): any;
    deleteAdminbyid(id: number): any;
    insertManager(coursedto: CourseForm): any;
    insertbook(bookdto: BookForm): any;
    insertnote(notedto: NoteForm): any;
    getManagerByAdminID(id: number): any;
    getAdminByManagerID(id: number): any;
    getAdminBybookID(id: number): any;
    getnoteByAdminID(id: number): any;
    getAdminBynoteID(id: number): any;
    getImages(name: any, res: any): void;
    signup(mydto: StudentRegForm, file: Express.Multer.File): Promise<any>;
    signin(session: any, mydto: StudentRegForm): Promise<any>;
    signout(session: any): {
        message: string;
    };
}
