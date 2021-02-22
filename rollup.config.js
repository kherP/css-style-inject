// import babel from 'rollup-plugin-babel';
// import babelrc from 'babelrc-rollup';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
// import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

let plugins = [
    typescript(),
    commonjs(),
    terser(),
    copy({
        targets: [
          { src: 'package.json', dest: 'dist' },
          { src: 'readme.md', dest: 'dist' },
        ]
    })
];

export default {
	input: 'lib/index.ts',
	plugins: plugins,
	external: external,
	output: {
		file: 'dist/index.js',
		format: 'cjs',
	},
};
