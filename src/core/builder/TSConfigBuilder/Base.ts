import type typescript from "typescript";
import type { Builder } from "../Builder";
import type { ECMAScriptVersion } from "./type";

export class Base implements Builder {
    private config: typescript.CompilerOptions;

    constructor() {
        this.config = {};
    }

    usePreset() {
        this.config = {};
    }

    setLib(libs: ECMAScriptVersion[]) {
        this.config.lib = libs;
    }

    build() {
        //
    }
}
