"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ormconfig_1 = require("./ormconfig");
const tag_module_1 = require("./tag/tag.module");
const tochka_controller_1 = require("./tochka/tochka.controller");
const tochka_module_1 = require("./tochka/tochka.module");
const tochka_service_1 = require("./tochka/tochka.service");
const screentochka_controller_1 = require("./screentochka/screentochka.controller");
const screentochka_service_1 = require("./screentochka/screentochka.service");
const screentochka_module_1 = require("./screentochka/screentochka.module");
const typetochka_controller_1 = require("./typetochka/typetochka.controller");
const typetochka_service_1 = require("./typetochka/typetochka.service");
const typetochka_module_1 = require("./typetochka/typetochka.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            tag_module_1.TagModule,
            tochka_module_1.TochkaModule,
            screentochka_module_1.ScreentochkaModule,
            typetochka_module_1.TypetochkaModule,
        ],
        controllers: [app_controller_1.AppController, tochka_controller_1.TochkaController, screentochka_controller_1.ScreentochkaController, typetochka_controller_1.TypetochkaController],
        providers: [app_service_1.AppService, tochka_service_1.TochkaService, screentochka_service_1.ScreentochkaService, typetochka_service_1.TypetochkaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map