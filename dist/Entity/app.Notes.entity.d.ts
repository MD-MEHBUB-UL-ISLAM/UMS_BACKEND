import { StudentRegEntity } from 'src/Entity/registerentity.entity';
export declare class NoteEntity {
    id: number;
    Notename: string;
    Noteinfo: string;
    teachername: string;
    student: StudentRegEntity[];
}
