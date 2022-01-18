"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const run = async (wasmFilePath, args = []) => {
    return require('../internal/wasm_node.js').run(wasmFilePath, args);
};
exports.run = run;
