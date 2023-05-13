"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRegModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const registeer_controller_1 = require("../Controller/registeer.controller");
const registerservice_service_1 = require("../Services/registerservice.service");
const registerentity_entity_1 = require("../Entity/registerentity.entity");
const course_service_1 = require("../Services/course.service");
const course_entity_1 = require("../Entity/course.entity");
const app_LibrarianService_1 = require("../Services/app.LibrarianService");
const app_Librarian_entity_1 = require("../Entity/app.Librarian.entity");
const app_Notes_entity_1 = require("../Entity/app.Notes.entity");
const app_NotesService_1 = require("../Services/app.NotesService");
let StudentRegModule = class StudentRegModule {
};
StudentRegModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([registerentity_entity_1.StudentRegEntity, course_entity_1.CourseEntity, app_Librarian_entity_1.BookRegEntity, app_Notes_entity_1.NoteEntity])
        ],
        controllers: [registeer_controller_1.StudentRegController],
        providers: [registerservice_service_1.StudentRegService, course_service_1.CourseService, app_LibrarianService_1.BookService, app_NotesService_1.NoteService],
    })
], StudentRegModule);
exports.StudentRegModule = StudentRegModule;
//# sourceMappingURL=registermodule.module.js.map