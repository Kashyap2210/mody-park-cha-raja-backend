"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAartiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_aarti_dto_1 = require("./create-aarti.dto");
class UpdateAartiDto extends (0, mapped_types_1.PartialType)(create_aarti_dto_1.CreateAartiDto) {
}
exports.UpdateAartiDto = UpdateAartiDto;
//# sourceMappingURL=update-aarti.dto.js.map