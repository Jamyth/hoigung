import { ProjectNamePromptImpl } from "../../src/core/commands/ProjectNamePromptImpl";
import { strict as assert } from "assert";
import { it } from "mocha";
import { StdinUtil } from "../StdinUtil";

describe("ProjectNamePromptImpl", () => {
    const command = new ProjectNamePromptImpl();

    it("Monolithic structure", async () => {
        StdinUtil.send("new-project");
        const answer = await command.execute();
        assert.deepStrictEqual(typeof answer, "string");
    });

    it("Monolithic structure", async () => {
        StdinUtil.send("@jamyth/new-project");
        const answer = await command.execute();
        assert.deepStrictEqual(typeof answer, "string");
    });

    it("Mono-repo structure", async () => {
        StdinUtil.send("@iamyth/logger");
        const answer = await command.execute(true);
        assert.deepStrictEqual(typeof answer, "string");
    });
});
