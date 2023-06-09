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
exports.CourseEntity = void 0;
const registerentity_entity_1 = require("./registerentity.entity");
const typeorm_1 = require("typeorm");
let CourseEntity = class CourseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseEntity.prototype, "Coursename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseEntity.prototype, "Courseid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => registerentity_entity_1.StudentRegEntity, (student) => student.courses),
    __metadata("design:type", registerentity_entity_1.StudentRegEntity)
], CourseEntity.prototype, "student", void 0);
CourseEntity = __decorate([
    (0, typeorm_1.Entity)("COURSETABLEFORSTUDENT1")
], CourseEntity);
exports.CourseEntity = CourseEntity;
//# sourceMappingURL=course.entity.js.map