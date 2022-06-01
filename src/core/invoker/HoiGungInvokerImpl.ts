import { ProjectNamePromptImpl } from "../commands/ProjectNamePromptImpl";
import { ProjectStructureType } from "../const/ProjectStructureType";
import { PackagePromptImpl } from "../commands/PackagePromptImpl";
import { ProjectStructurePromptImpl } from "../commands/ProjectStructurePromptImpl";
import { LanguagePromptImpl } from "../commands/LanguagePromptImpl";
import type { Invoker } from "./Invoker";

export class HoiGungInvokerImpl implements Invoker {
    private projectStructureCommand = new ProjectStructurePromptImpl();
    private projectNameCommand = new ProjectNamePromptImpl();
    private packagePromptCommand = new PackagePromptImpl();
    private languagePromptCommand = new LanguagePromptImpl();

    async run() {
        const projectStructureType = await this.projectStructureCommand.execute();
        const isMonoRepoStructure = projectStructureType === ProjectStructureType.MONOREPO;

        const projectName = await this.projectNameCommand.execute(isMonoRepoStructure);
        const packageType = await this.packagePromptCommand.execute();
        const language = await this.languagePromptCommand.execute();

        console.info({
            projectStructureType,
            projectName,
            packageType,
            language,
        });
    }
}
