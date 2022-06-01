import { prompt } from "../Inquirer";
import { PackageManagerType } from "../const/PackageManagerType";
import { EnumUtil } from "../util/EnumUtil";
import type { Command } from "./Command";

export class PackagePromptImpl implements Command {
    execute() {
        return prompt<PackageManagerType>({
            message: "Which Package Manager do you prefer ?",
            type: "list",
            choices: EnumUtil.toArray(PackageManagerType),
            validate: (input) => EnumUtil.isValid(PackageManagerType, input),
        });
    }
}
