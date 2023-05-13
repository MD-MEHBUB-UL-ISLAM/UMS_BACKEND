"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_StudentController_1 = require("../Controller/app.StudentController");
const app_StudentService_1 = require("../Services/app.StudentService");
const app_StudentEntity_entity_1 = require("../Entity/app.StudentEntity.entity");
const mailer_1 = require("@nestjs-modules/mailer");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    ignoreTLS: true,
                    secure: true,
                    auth: {
                        user: 'jibonislamxxx@gmail.com',
                        pass: 'oyohorucvvjrjqlw'
                    },
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([app_StudentEntity_entity_1.StudentEntity])
        ],
        controllers: [app_StudentController_1.StudentController],
        providers: [app_StudentService_1.StudentService],
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=app.StudentModule.js.map