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
exports.AartiController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../common/guards/auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const user_entity_1 = require("../user/user.entity");
const aarti_service_1 = require("./aarti.service");
const create_aarti_dto_1 = require("./dto/create-aarti.dto");
const update_aarti_dto_1 = require("./dto/update-aarti.dto");
let AartiController = class AartiController {
    aartiService;
    constructor(aartiService) {
        this.aartiService = aartiService;
    }
    findAll() {
        return this.aartiService.findAll();
    }
    findOne(id) {
        return this.aartiService.findOne(id);
    }
    create(dto, user) {
        return this.aartiService.create(dto, user.email);
    }
    update(id, dto, user) {
        return this.aartiService.update(id, dto, user.email);
    }
    remove(id) {
        return this.aartiService.remove(id);
    }
};
exports.AartiController = AartiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AartiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AartiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aarti_dto_1.CreateAartiDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AartiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_aarti_dto_1.UpdateAartiDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AartiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AartiController.prototype, "remove", null);
exports.AartiController = AartiController = __decorate([
    (0, common_1.Controller)('aarti'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [aarti_service_1.AartiService])
], AartiController);
//# sourceMappingURL=aarti.controller.js.map