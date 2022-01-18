if (process.argv.length < 3) {
  console.error('usage: go_wasm [wasm binary] [arguments]')
  process.exit(1)
}

const wasmFilePath = process.argv[2]
const args = process.argv.slice(2)
require('../lib/index.js')
  .run(wasmFilePath, args)
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
