"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AartiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const aarti_controller_1 = require("./aarti.controller");
const aarti_entity_1 = require("./aarti.entity");
const aarti_service_1 = require("./aarti.service");
let AartiModule = class AartiModule {
};
exports.AartiModule = AartiModule;
exports.AartiModule = AartiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([aarti_entity_1.Aarti]), auth_module_1.AuthModule],
        controllers: [aarti_controller_1.AartiController],
        providers: [aarti_service_1.AartiService],
    })
], AartiModule);
//# sourceMappingURL=aarti.module.js.map