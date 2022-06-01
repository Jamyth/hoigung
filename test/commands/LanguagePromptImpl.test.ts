import { LanguagePromptImpl } from "../../src/core/commands/LanguagePromptImpl";
import { LanguageType } from "../../src/core/const/LanguageType";
import { strict as assert } from "assert";
import { test } from "mocha";
import { StdinUtil } from "../StdinUtil";

test("LanguagePromptImpl can prompt", async () => {
    StdinUtil.send(StdinUtil.Keys.DOWN, StdinUtil.Keys.DOWN);
    const answer = await new LanguagePromptImpl().execute();
    assert.deepEqual(answer, LanguageType.JAVASCRIPT);
});
