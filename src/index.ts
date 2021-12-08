import { Template, TemplateOptions, Generator } from "../types/index";
export default class CodeGenerator implements Generator {

    static version: string

    constructor(options: TemplateOptions) {

    }

    generator(template: Template) {
        return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
    }
}