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
exports.StudentRegService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registerentity_entity_1 = require("../Entity/registerentity.entity");
const bcrypt = require("bcrypt");
let StudentRegService = class StudentRegService {
    constructor(studentregRepo) {
        this.studentregRepo = studentregRepo;
    }
    getIndex() {
        return this.studentregRepo.find();
    }
    getUserByID(id) {
        return this.studentregRepo.findOneBy({ id });
    }
    getUserByIDName(qry) {
        return this.studentregRepo.findOneBy({ id: qry.id, name: qry.name });
    }
    async insertUser(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        return this.studentregRepo.save(mydto);
    }
    updateUser(name, email) {
        return this.studentregRepo.update({ email: email }, { name: name });
    }
    updateUserbyid(mydto, id) {
        return this.studentregRepo.update(id, mydto);
    }
    deleteUserbyid(id) {
        return this.studentregRepo.delete(id);
    }
    getManagersByAdminID(id) {
        return this.studentregRepo.find({
            where: { id: id },
            relations: {
                courses: true,
            },
        });
    }
    getbooksByAdminID(id) {
        return this.studentregRepo.find({
            where: { id: id },
            relations: {
                books: true,
            },
        });
    }
    getnotesByAdminID(id) {
        return this.studentregRepo.find({
            where: { id: id },
            relations: {
                notes: true,
            },
        });
    }
    async signup(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        return this.studentregRepo.save(mydto);
    }
    async signin(mydto) {
        if (mydto.email != null && mydto.password != null) {
            const mydata = await this.studentregRepo.findOneBy({ email: mydto.email });
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
};
StudentRegService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registerentity_entity_1.StudentRegEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentRegService);
exports.StudentRegService = StudentRegService;
//# sourceMappingURL=registerservice.service.js.map