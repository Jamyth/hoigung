import { prompt } from "../Inquirer";
import type { Command } from "./Command";

export class ProjectNamePromptImpl implements Command {
    execute(checkForMonoRepo: boolean = false) {
        return prompt<string>({
            message: "What is your project name ?",
            type: "input",
            validate: (input) => this.validate(input, checkForMonoRepo),
        });
    }

    private validate(value: any, checkForMonoRepo: boolean): boolean | string {
        if (typeof value !== "string") {
            return "Input should be string.";
        }

        if (!value.trim()) {
            return "Input cannot be empty";
        }

        if (!/^(?=.{1,214}$)(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(value)) {
            return "Input does not match node requirement";
        }

        if (checkForMonoRepo && value.split("/").length !== 2) {
            return "Input should be in @xxx/xxx format";
        }

        return true;
    }
}
