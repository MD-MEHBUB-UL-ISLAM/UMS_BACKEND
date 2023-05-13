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
exports.StudentRegController = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const course_dto_1 = require("../DTO/course.dto");
const course_service_1 = require("../Services/course.service");
const registerform_dto_1 = require("../DTO/registerform.dto");
const registerformupdate_dto_1 = require("../FormUpdate/registerformupdate.dto");
const registerservice_service_1 = require("../Services/registerservice.service");
const app_LibrarianService_1 = require("../Services/app.LibrarianService");
const app_LibrarianForm_dto_1 = require("../DTO/app.LibrarianForm.dto");
const app_NotesService_1 = require("../Services/app.NotesService");
const app_NotesForm_dto_1 = require("../DTO/app.NotesForm.dto");
const app_student_sessionguard_1 = require("../SessionGuard/app.student.sessionguard");
let StudentRegController = class StudentRegController {
    constructor(studentService, courseService, bookService, noteService) {
        this.studentService = studentService;
        this.courseService = courseService;
        this.bookService = bookService;
        this.noteService = noteService;
    }
    getAdmin() {
        return this.studentService.getIndex();
    }
    getallBook() {
        return this.bookService.getIndex();
    }
    getallNote() {
        return this.noteService.getIndex();
    }
    getallcourse() {
        return this.courseService.getIndex();
    }
    getAdminByID(id) {
        return this.studentService.getUserByID(id);
    }
    getBookByID(id) {
        return this.bookService.getBookbyID(id);
    }
    getNoteByID(id) {
        return this.noteService.getNotebyID(id);
    }
    getCourseByID(id) {
        return this.courseService.getCoursebyID(id);
    }
    getAdminByIDName(qry) {
        return this.studentService.getUserByIDName(qry);
    }
    getBook(qry) {
        return this.bookService.getbook(qry);
    }
    insertAdmin(mydto, file) {
        mydto.filename = file.filename;
        console.log(mydto);
        return this.studentService.insertUser(mydto);
    }
    updateAdmin(session, name) {
        console.log(session.email);
        return this.studentService.updateUser(name, session.email);
    }
    updateAdminbyid(mydto, id) {
        return this.studentService.updateUserbyid(mydto, id);
    }
    deleteAdminbyid(id) {
        return this.studentService.deleteUserbyid(id);
    }
    insertManager(coursedto) {
        return this.courseService.insertManager(coursedto);
    }
    insertbook(bookdto) {
        return this.bookService.insertbook(bookdto);
    }
    insertnote(notedto) {
        return this.noteService.insertnote(notedto);
    }
    getManagerByAdminID(id) {
        return this.studentService.getManagersByAdminID(id);
    }
    getAdminByManagerID(id) {
        return this.courseService.getAdminByManagerID(id);
    }
    getAdminBybookID(id) {
        return this.bookService.getAdminBybookID(id);
    }
    getnoteByAdminID(id) {
        return this.studentService.getnotesByAdminID(id);
    }
    getAdminBynoteID(id) {
        return this.noteService.getAdminBynoteID(id);
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads' });
    }
    signup(mydto, file) {
        mydto.filename = file.filename;
        console.log(mydto);
        return this.studentService.signup(mydto);
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
};
__decorate([
    (0, common_1.Get)('/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Get)('/indexbook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getallBook", null);
__decorate([
    (0, common_1.Get)('/indexnote'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getallNote", null);
__decorate([
    (0, common_1.Get)('/indexcourse'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getallcourse", null);
__decorate([
    (0, common_1.Get)('/findadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdminByID", null);
__decorate([
    (0, common_1.Get)('/findbook/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getBookByID", null);
__decorate([
    (0, common_1.Get)('/findnote/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getNoteByID", null);
__decorate([
    (0, common_1.Get)('/findcourse/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getCourseByID", null);
__decorate([
    (0, common_1.Get)('/findadmin'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdminByIDName", null);
__decorate([
    (0, common_1.Get)('/findbook'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getBook", null);
__decorate([
    (0, common_1.Post)('/insertadmin'),
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
    __metadata("design:paramtypes", [registerform_dto_1.StudentRegForm, Object]),
    __metadata("design:returntype", void 0)
], StudentRegController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Put)('/updateadmin/'),
    (0, common_1.UseGuards)(app_student_sessionguard_1.SessionGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Put)('/updateadmin/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerformupdate_dto_1.StudentRegFormUpdate, Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "updateAdminbyid", null);
__decorate([
    (0, common_1.Delete)('/deleteadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "deleteAdminbyid", null);
__decorate([
    (0, common_1.Post)('/insertcourse'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseForm]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "insertManager", null);
__decorate([
    (0, common_1.Post)('/insertbook'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_LibrarianForm_dto_1.BookForm]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "insertbook", null);
__decorate([
    (0, common_1.Post)('/insertnote'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_NotesForm_dto_1.NoteForm]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "insertnote", null);
__decorate([
    (0, common_1.Get)('/findcoursesbyadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getManagerByAdminID", null);
__decorate([
    (0, common_1.Get)('/findadminbycourse/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdminByManagerID", null);
__decorate([
    (0, common_1.Get)('/findadminbybook/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdminBybookID", null);
__decorate([
    (0, common_1.Get)('/findnotesbyadmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getnoteByAdminID", null);
__decorate([
    (0, common_1.Get)('/findadminbynote/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentRegController.prototype, "getAdminBynoteID", null);
__decorate([
    (0, common_1.Get)('/getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StudentRegController.prototype, "getImages", null);
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
            new common_1.MaxFileSizeValidator({ maxSize: 16000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerform_dto_1.StudentRegForm, Object]),
    __metadata("design:returntype", void 0)
], StudentRegController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, registerform_dto_1.StudentRegForm]),
    __metadata("design:returntype", Promise)
], StudentRegController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentRegController.prototype, "signout", null);
StudentRegController = __decorate([
    (0, common_1.Controller)('/reg'),
    __metadata("design:paramtypes", [registerservice_service_1.StudentRegService,
        course_service_1.CourseService,
        app_LibrarianService_1.BookService,
        app_NotesService_1.NoteService])
], StudentRegController);
exports.StudentRegController = StudentRegController;
//# sourceMappingURL=registeer.controller.js.map