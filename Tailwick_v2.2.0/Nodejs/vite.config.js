import {defineConfig} from 'vite';
import path from 'path';
import {sync} from 'glob';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig((s) => {
    return {
        root: ".",
        base: s.mode === "development"
            ? "/"
            : "/dist/",
        server: {
            strictPort: true,
            port: process.env.VITE_PORT ?? 5133
        },
        plugins: [
            tailwindcss(),
        ],
        build: {
            // output dir for production build
            outDir: "public/dist",
            copyPublicDir: false,
            emptyOutDir: true,
            manifest: 'manifest.json',
            rollupOptions: {
                input: [
                    // path.resolve(__dirname, "public/assets/css/style.css"),
                    ...sync('public/assets/js/**/*.js').map((file) => path.resolve(__dirname, file)),
                ]
            },
        },
    }
});
