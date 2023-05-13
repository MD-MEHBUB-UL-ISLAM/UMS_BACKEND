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
exports.NoteEntity = void 0;
const registerentity_entity_1 = require("./registerentity.entity");
const typeorm_1 = require("typeorm");
let NoteEntity = class NoteEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoteEntity.prototype, "Notename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoteEntity.prototype, "Noteinfo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoteEntity.prototype, "teachername", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => registerentity_entity_1.StudentRegEntity, (student) => student.notes, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], NoteEntity.prototype, "student", void 0);
NoteEntity = __decorate([
    (0, typeorm_1.Entity)("NOTEFORSTUDENTONLY1")
], NoteEntity);
exports.NoteEntity = NoteEntity;
//# sourceMappingURL=app.Notes.entity.js.map