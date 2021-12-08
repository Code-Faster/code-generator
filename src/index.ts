import { Template, TemplateOptions } from "../types/index";

export default class CodeGenerator {
    static version: string
    constructor(options: TemplateOptions = {}) {

    }
    generator(template: Template): string {
        return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
    }
}