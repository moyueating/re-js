// 如何支持es module和commonjs
// 借助babel转译的思想
// 在es module中引入commonjs

// es模块转cjs，加入__esModule的标识
myExports = function(exports){
    Object.defineProperty(exports, '__esModule', {
        value: true,
    })
}

function interopRequireDefault(module_exports){
    // 因为将es module转成cjs时, export default只能映射到module.exports.default
    // 因为在es module中还有 export const a = 1的情况，这种就需要映射到module.exports.a
    // 所以在加载es module的时候，已经被转译过了直接输出module_exports，反而是加载原生cjs模块的时候需要包装一次 default:module_exports
    // 这样保证输出接口一致
    return module_exports && module_exports.__esModule ? module_exports : { default : module_exports }
}