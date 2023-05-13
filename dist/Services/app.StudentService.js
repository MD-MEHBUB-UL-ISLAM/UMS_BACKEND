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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_StudentEntity_entity_1 = require("../Entity/app.StudentEntity.entity");
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs-modules/mailer/dist");
let StudentService = class StudentService {
    constructor(studentRepo, mailerService) {
        this.studentRepo = studentRepo;
        this.mailerService = mailerService;
    }
    getIndex() {
        return this.studentRepo.find();
    }
    async getUserByID(id) {
        const data = await this.studentRepo.findOneBy({ id });
        console.log(data);
        if (data !== null) {
            return data;
        }
        else {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    getUserByIDName(qry) {
        return this.studentRepo.findOneBy({ id: qry.id, fullname: qry.fullname });
    }
    async insertUser(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        return this.studentRepo.save(mydto);
    }
    updateUser(fullname, email) {
        return this.studentRepo.update({ email: email }, { fullname: fullname });
    }
    updateUserbyid(mydto, id) {
        return this.studentRepo.update(id, mydto);
    }
    deleteUserbyid(id) {
        return this.studentRepo.delete(id);
    }
    async signup(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        return this.studentRepo.save(mydto);
    }
    async signin(mydto) {
        if (mydto.email != null && mydto.password != null) {
            const mydata = await this.studentRepo.findOneBy({ email: mydto.email });
            const isMatch = await bcrypt.compare(mydto.password, mydata.password);
            if (isMatch) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
        });
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(app_StudentEntity_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=app.StudentService.js.map