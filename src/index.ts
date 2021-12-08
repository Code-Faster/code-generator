import { Template, TemplateGenerator } from "../types/index";
export function generator(template: Template): String {
    return "get template name  " + template.name + " , language is " + template.language + " , will copy from :" + template.fromPath + "  to :" + template.toPath;
}