# go-wasm
A convenient way to run go compiled wasm files on node

** To learn more, please move to [Go Wasmer](https://github.com/hubvue/tools/tree/main/packages/go-wasmer)**

### Install
```shell
# pnpm
pnpm add @cckim/go-wasm
# yarn
yarn add @cckim/go-wasm
# npm
npm install @cckim/go-wasm
```

### Usage

#### command line
```shell
go-wasm ./main.wasm arg1 arg2
```


#### Package
```js
const { run } = require('@cckim/go-wasm')
run('./main.wasm', ['age1', 'arg2'])
```
