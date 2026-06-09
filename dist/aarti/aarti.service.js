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
exports.AartiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aarti_entity_1 = require("./aarti.entity");
let AartiService = class AartiService {
    aartiRepository;
    constructor(aartiRepository) {
        this.aartiRepository = aartiRepository;
    }
    async findAll() {
        return this.aartiRepository.find();
    }
    async findOne(id) {
        const aarti = await this.aartiRepository.findOne({ where: { id } });
        if (!aarti) {
            throw new common_1.NotFoundException(`Aarti with id ${id} not found`);
        }
        return aarti;
    }
    async create(dto, createdBy) {
        const aarti = this.aartiRepository.create({
            ...dto,
            createdBy,
        });
        return this.aartiRepository.save(aarti);
    }
    async update(id, dto, updatedBy) {
        const aarti = await this.findOne(id);
        Object.assign(aarti, dto);
        aarti.updatedBy = updatedBy;
        return this.aartiRepository.save(aarti);
    }
    async remove(id) {
        const aarti = await this.findOne(id);
        await this.aartiRepository.remove(aarti);
    }
};
exports.AartiService = AartiService;
exports.AartiService = AartiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aarti_entity_1.Aarti)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AartiService);
//# sourceMappingURL=aarti.service.js.map