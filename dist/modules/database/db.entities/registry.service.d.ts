export declare class Registry {
    private constructors;
    registerConstructor(constructor: any): void;
    getConstructors(): any[];
}
export declare const registry: Registry;
