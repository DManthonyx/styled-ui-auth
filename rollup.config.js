import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from "@rollup/plugin-typescript";
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            external(),
            resolve(),
            terser(),
            commonjs(),
        ]
    }
];