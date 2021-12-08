import CodeGenerator from '../../../src/index'
describe('CodeGenerator', () => {
    it('should work', () => {
        const path = new CodeGenerator().generator({
            name: '1',
            fromPath: '2',
            toPath: '3',
            language: "Java"
        })
        expect(path).toBe("get template name  " + 1 + " , language is " + "Java" + " , will copy from :" + 2 + "  to :" + 3)
    })
})