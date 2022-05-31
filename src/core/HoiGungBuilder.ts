import type { PackageManagerType } from "./PackageManagerType";

export class HoiGungBuilder {
    private _projectName: string | null;
    private _pkgManager: PackageManagerType | null;

    constructor() {
        this._projectName = null;
        this._pkgManager = null;
    }

    get projectName() {
        return this._projectName;
    }

    get pkgManger() {
        return this._pkgManager;
    }

    setProjectName(projectName: string) {
        this._projectName = projectName;
    }

    setPackageManger(type: PackageManagerType) {
        this._pkgManager = type;
    }

    execute() {
        const isValueSet = this.validate();

        if (!isValueSet) {
            throw new Error("hahahhahaha");
        }
    }

    private validate() {
        return [this.pkgManger, this._projectName].every((_) => _ !== null);
    }
}
