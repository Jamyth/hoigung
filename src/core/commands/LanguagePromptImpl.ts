import { LanguageType } from "../const/LanguageType";
import { prompt } from "../Inquirer";
import { EnumUtil } from "../util/EnumUtil";
import type { Command } from "./Command";

export class LanguagePromptImpl implements Command {
    execute() {
        return prompt<LanguageType>({
            message: "Which language do you prefer ?",
            type: "list",
            choices: EnumUtil.toArray(LanguageType),
            validate: (input) => EnumUtil.isValid(LanguageType, input),
        });
    }
}
