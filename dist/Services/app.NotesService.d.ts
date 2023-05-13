import { Repository } from 'typeorm';
import { NoteEntity } from "../Entity/app.Notes.entity";
import { NoteForm } from "../DTO/app.NotesForm.dto";
export declare class NoteService {
    private noteRepo;
    constructor(noteRepo: Repository<NoteEntity>);
    insertnote(mydto: NoteForm): any;
    getNotebyID(id: any): any;
    getIndex(): any;
    getAdminBynoteID(id: any): any;
}
