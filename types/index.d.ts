/**
 * 语言类型
 */
enum LanguageType {
    Java,
    TypeScript,
    JavaScript
}

/**
 * 模版
 */
export interface Template {
    // 模版名称
    name: string;
    fromPath: string;
    toPath: string;
    language: LanguageType;
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
export interface Generator {
    generator: (template: Template) => String;
}
export default Object