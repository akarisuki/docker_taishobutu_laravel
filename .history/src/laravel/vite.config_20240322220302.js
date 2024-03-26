import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';//node_moduleでimport

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],//js->jsx
            refresh: true,
        }),
        react(),//viteでReactを読み込みます。
    ],
});