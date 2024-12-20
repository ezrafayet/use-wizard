import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

export default defineConfig({
    plugins: [react(), viteSingleFile()],
    resolve: {
        alias: {
            'use-wizard': path.resolve(__dirname, '../use-wizard/src'),
        },
    },
    build: {
        cssCodeSplit: false,
    }
});
