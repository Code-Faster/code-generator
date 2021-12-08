import { Template, TemplateOptions, TemplateGenerator } from "../types/index";
export default class CodeGenerator implements TemplateGenerator {

    static version: string

    constructor(options: TemplateOptions) {

    }

    generator(template: Template) {
        return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
    }
}