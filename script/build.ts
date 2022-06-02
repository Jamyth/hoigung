import { spawn } from "./spawn";
import { createConsoleLogger } from "@iamyth/logger";

const logger = createConsoleLogger("TypeScript Compiler");

require("./format");
require("./lint");

function build() {
    logger.task("Build and Transpile");
    spawn("pkgroll", ["--minify"], "Build Failed.");
}

build();
