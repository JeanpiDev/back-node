/* eslint-disable prettier/prettier */

export class Registry {
    private constructors: any[] = [];

    registerConstructor(constructor: any) {
        this.constructors.push(constructor);
    }

    getConstructors() {
        return this.constructors;
    }
}
export const registry = new Registry();
