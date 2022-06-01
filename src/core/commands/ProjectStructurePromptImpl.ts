import { prompt } from "../Inquirer";
import { EnumUtil } from "../util/EnumUtil";
import { ProjectStructureType } from "../const/ProjectStructureType";
import type { Command } from "./Command";

export class ProjectStructurePromptImpl implements Command {
    execute() {
        return prompt<ProjectStructureType>({
            message: "What kind of project structure do you prefer ?",
            type: "list",
            choices: EnumUtil.toArray(ProjectStructureType),
            validate: (input) => EnumUtil.isValid(ProjectStructureType, input),
        });
    }
}
