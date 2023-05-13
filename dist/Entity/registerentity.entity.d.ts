import { CourseEntity } from 'src/Entity/course.entity';
import { BookRegEntity } from 'src/Entity/app.Librarian.entity';
import { NoteEntity } from 'src/Entity/app.Notes.entity';
export declare class StudentRegEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    filename: string;
    courses: CourseEntity[];
    books: BookRegEntity[];
    notes: NoteEntity[];
}
