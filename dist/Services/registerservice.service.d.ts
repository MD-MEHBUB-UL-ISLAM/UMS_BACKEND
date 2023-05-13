import { Repository } from 'typeorm';
import { StudentRegEntity } from "../Entity/registerentity.entity";
import { StudentRegFormUpdate } from "../FormUpdate/registerformupdate.dto";
export declare class StudentRegService {
    private studentregRepo;
    constructor(studentregRepo: Repository<StudentRegEntity>);
    getIndex(): any;
    getUserByID(id: any): any;
    getUserByIDName(qry: any): any;
    insertUser(mydto: any): Promise<any>;
    updateUser(name: any, email: any): any;
    updateUserbyid(mydto: StudentRegFormUpdate, id: any): any;
    deleteUserbyid(id: any): any;
    getManagersByAdminID(id: any): any;
    getbooksByAdminID(id: any): any;
    getnotesByAdminID(id: any): any;
    signup(mydto: any): Promise<any>;
    signin(mydto: any): Promise<boolean>;
}
