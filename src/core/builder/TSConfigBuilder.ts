import type { Builder } from "./Builder";

export type ConfigType = "base" | "src" | "test" | "project";

export class TSConfigBuilder implements Builder {
    private type: ConfigType;

    constructor(type: ConfigType) {
        this.type = type;
    }

    get configType() {
        return this.type;
    }

    build() {
        //
    }
}
