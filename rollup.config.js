import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';

export default {
  input: 'js-out/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'esm'
  },
  plugins: [ 
    resolve(),
    cjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
