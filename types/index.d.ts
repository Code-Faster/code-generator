/**
 * 模版
 */
 export interface Template {
    // 模版名称
    name: string;
    fromPath: string;
    toPath: string;
    language: "Java" | "TypeScript" | "JavaScript";
}
/**
 * 项目模版
 */
export interface ProjectTemplate extends Template {

}
/**
 * 代码块模版
 */
export interface BlockTemplate extends Template {

}
/**
 * 模版解析参数
 */
export type TemplateOptions = {

}
/**
 * 生成器
 */
export declare class CodeGenerator {
    constructor(options?: TemplateOptions)
    static version: string
    generator(template: Template): string
}

export default CodeGenerator