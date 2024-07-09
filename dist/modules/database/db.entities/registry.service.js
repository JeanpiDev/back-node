"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = exports.Registry = void 0;
class Registry {
    constructor() {
        this.constructors = [];
    }
    registerConstructor(constructor) {
        this.constructors.push(constructor);
    }
    getConstructors() {
        return this.constructors;
    }
}
exports.Registry = Registry;
exports.registry = new Registry();
//# sourceMappingURL=registry.service.js.map