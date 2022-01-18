'use strict'

globalThis.require = require
globalThis.fs = require('fs')
globalThis.TextEncoder = require('util').TextEncoder
globalThis.TextDecoder = require('util').TextDecoder

globalThis.performance = {
  now() {
    const [sec, nsec] = process.hrtime()
    return sec * 1000 + nsec / 1000000
  }
}

const crypto = require('crypto')
globalThis.crypto = {
  getRandomValues(b) {
    crypto.randomFillSync(b)
  }
}

require('./wasm_exec')

exports.run = (wasmFilePath, args) => {
  const go = new Go()
  go.argv = [wasmFilePath, ...args]
  go.env = Object.assign({ TMPDIR: require('os').tmpdir() }, process.env)
  go.exit = process.exit

  const wasmFile = fs.readFileSync(wasmFilePath)
  return WebAssembly.instantiate(wasmFile, go.importObject)
    .then( async (result) => {
      process.on('exit', (code) => {
        if (code === 0 && !go.exited) {
          go._pendingEvent = { id: 0 }
          go._resume()
        }
      })
      return go.run(result.instance)
    })
    .catch((err) => {
      console.log(err)
      process.exit(1)
    })
}
