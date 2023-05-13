"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRegEntity = void 0;
const course_entity_1 = require("./course.entity");
const app_Librarian_entity_1 = require("./app.Librarian.entity");
const app_Notes_entity_1 = require("./app.Notes.entity");
const typeorm_1 = require("typeorm");
let StudentRegEntity = class StudentRegEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentRegEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentRegEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentRegEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentRegEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentRegEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentRegEntity.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.CourseEntity, (course) => course.student),
    __metadata("design:type", Array)
], StudentRegEntity.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => app_Librarian_entity_1.BookRegEntity, (book) => book.student),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], StudentRegEntity.prototype, "books", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => app_Notes_entity_1.NoteEntity, (note) => note.student),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], StudentRegEntity.prototype, "notes", void 0);
StudentRegEntity = __decorate([
    (0, typeorm_1.Entity)("STUDENTREGISTERTABLE1")
], StudentRegEntity);
exports.StudentRegEntity = StudentRegEntity;
//# sourceMappingURL=registerentity.entity.js.map