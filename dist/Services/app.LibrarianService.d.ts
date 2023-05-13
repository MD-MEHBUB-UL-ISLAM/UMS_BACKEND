import { Repository } from 'typeorm';
import { BookRegEntity } from "../Entity/app.Librarian.entity";
import { BookForm } from "../DTO/app.LibrarianForm.dto";
export declare class BookService {
    private bookRepo;
    constructor(bookRepo: Repository<BookRegEntity>);
    insertbook(mydto: BookForm): any;
    getbook(qry: any): any;
    getIndex(): any;
    getBookbyID(id: any): any;
    getAdminBybookID(id: any): any;
}
