import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';

import pkg from './package.json';

export default {
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  external: ['react', 'react-dom'],
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    typescript({
      declaration: false,
    }),
    del({ targets: 'dist/*' }),
    babel({
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
      babelrc: true,
    }),
    commonjs(),
    filesize(),
    terser(),
    cleanup(),
    url(),
  ],
};
