import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';

const extensions = ['.js', '.jsx'];

const basePlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true
  }),
  resolve({ extensions }),
  commonjs(),
  babel({ babelHelpers: 'bundled', extensions, presets: ['@babel/preset-react'] }),
  css()
];

export default [
  // Root package build
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true, globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      } },
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true, globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }},
    ],
    external: ['react', 'react-dom'],
    plugins: basePlugins
  },

  // CountdownWidget build
  {
    input: 'src/widgets/CountdownWidget/CountdownWidget.jsx',
    output: {
      file: 'dist/widgets/CountdownWidget/index.js',
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    external: ['react', 'react-dom'],
    plugins: basePlugins
  },
  // ButtonWidget build
  {
    input: 'src/widgets/Button/Button.jsx',
    output: {
      file: 'dist/widgets/Button/index.js',
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    external: ['react', 'react-dom'],
    plugins: basePlugins
  }
];
