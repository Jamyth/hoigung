import { ProjectStructurePromptImpl } from "../../src/core/commands/ProjectStructurePromptImpl";
import { ProjectStructureType } from "../../src/core/const/ProjectStructureType";
import { strict as assert } from "assert";
import { test } from "mocha";
import { StdinUtil } from "../StdinUtil";

test("ProjectStructurePromptImpl can prompt", async () => {
    StdinUtil.send(StdinUtil.Keys.DOWN, StdinUtil.Keys.DOWN);
    const answer = await new ProjectStructurePromptImpl().execute();
    assert.deepEqual(answer, ProjectStructureType.MONOLITH);
});
