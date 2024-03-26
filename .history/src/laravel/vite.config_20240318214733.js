import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        // '.js' ファイルで JSX 構文を使用するための設定
        loader: { '.js': 'jsx' },
    },
});