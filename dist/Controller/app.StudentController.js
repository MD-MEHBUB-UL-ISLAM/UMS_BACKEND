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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const app_StudentService_1 = require("../Services/app.StudentService");
const app_studentformupdate_1 = require("../FormUpdate/app.studentformupdate");
const app_student_sessionguard_1 = require("../SessionGuard/app.student.sessionguard");
const app_StudentForm_dto_1 = require("../DTO/app.StudentForm.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getAdmin() {
        return this.studentService.getIndex();
    }
    getAdminByID(id) {
        return this.studentService.getUserByID(id);
    }
    getAdminByIDName(qry) {
        return this.studentService.getUserByIDName(qry);
    }
    insertAdmin(mydto, file) {
        mydto.filename = file.filename;
        console.log(mydto);
        return this.studentService.insertUser(mydto);
    }
    updateAdmin(session, fullname) {
        console.log(session.email);
        return this.studentService.updateUser(fullname, session.email);
    }
    updateAdminbyid(mydto, id) {
        return this.studentService.updateUserbyid(mydto, id);
    }
    deleteAdminbyid(id) {
        return this.studentService.deleteUserbyid(id);
    }
    getImages(fullname, res) {
        res.sendFile(fullname, { root: './uploads' });
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        return this.studentService.signup(mydto);
        console.log(file);
    }
    async signin(session, mydto) {
        const res = await (this.studentService.signin(mydto));
        if (res == true) {
            session.email = mydto.email;
            return (session.email);
        }
        else {
            throw new exceptions_1.UnauthorizedException({ message: "invalid credentials" });
        }
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new exceptions_1.UnauthorizedException("invalid actions");
        }
    }
    sendEmail(mydata) {
        return this.studentService.sendEmail(mydata);
    }
};
__decorate([
    (0, common_1.Get)('/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Get)('/findstudent/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getAdminByID", null);
__decorate([
    (0, common_1.Get)('/findstudent'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getAdminByIDName", null);
__decorate([
    (0, common_1.Post)('/insertstudent'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 16000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_StudentForm_dto_1.StudentForm, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Put)('/updatestudent'),
    (0, common_1.UseGuards)(app_student_sessionguard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)('fullname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Put)('/updatestudent/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_studentformupdate_1.StudentFormUpdate, Number]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "updateAdminbyid", null);
__decorate([
    (0, common_1.Delete)('/deletestudent/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "deleteAdminbyid", null);
__decorate([
    (0, common_1.Get)('/getimage/:fullname'),
    __param(0, (0, common_1.Param)('fullname')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getImages", null);
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1600000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_StudentForm_dto_1.StudentForm, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, app_StudentForm_dto_1.StudentForm]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "sendEmail", null);
StudentController = __decorate([
    (0, common_1.Controller)('/student'),
    __metadata("design:paramtypes", [app_StudentService_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=app.StudentController.js.map