import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: '_assets/javascripts/main.js',
  output: {
    file: '_assets/javascripts/main.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve({
      browser: true,
      jsnext: true,
      main: true
    }),
    uglify()
  ]
};
