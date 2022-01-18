// const isNode = () => typeof window === 'undefined' ? true : false

export const run = async <T>(wasmFilePath: string, args: string[] = []): Promise<T> => {
    return require('../internal/wasm_node.js').run(wasmFilePath, args)
}