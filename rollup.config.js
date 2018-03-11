import pkg from './package.json'
import uglify from 'rollup-plugin-uglify'
const plugins = require('./rollup.plugins.js')

export default [
  {
    input: 'index.js',
    output: {
      file: pkg.browser,
      name: 'simpleMessageReader',
      format: 'umd'
    },
    plugins: plugins.concat([uglify()])
  },
  {
    input: 'index.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins
  }
]
