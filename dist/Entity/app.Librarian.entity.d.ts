import { StudentRegEntity } from 'src/Entity/registerentity.entity';
export declare class BookRegEntity {
    id: number;
    bookname: string;
    takeinfo: string;
    authorname: string;
    student: StudentRegEntity[];
}
