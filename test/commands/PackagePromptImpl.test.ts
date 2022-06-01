import { PackagePromptImpl } from "../../src/core/commands/PackagePromptImpl";
import { PackageManagerType } from "../../src/core/const/PackageManagerType";
import { strict as assert } from "assert";
import { test } from "mocha";
import { StdinUtil } from "../StdinUtil";

test("PackagePromptImpl can prompt", async () => {
    StdinUtil.send(StdinUtil.Keys.DOWN, StdinUtil.Keys.DOWN);
    const answer = await new PackagePromptImpl().execute();
    assert.deepEqual(answer, PackageManagerType.PNPM);
});
