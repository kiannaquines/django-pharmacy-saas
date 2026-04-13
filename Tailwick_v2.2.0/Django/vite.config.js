// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import { globSync } from 'glob'

import path from 'node:path'


export default defineConfig({
    base: '/static/',
    plugins: [
        tailwindcss()
    ],
    build: {
        outDir: 'dist',
        manifest: true,
        rollupOptions: {
            input: Object.fromEntries(
                globSync('tailwick/static/js/**/*.js').map(file => [
                    path.relative('tailwick/static/js', file).replace(/\.js$/, ''),
                    file,
                ])
            )
        },
    },
});