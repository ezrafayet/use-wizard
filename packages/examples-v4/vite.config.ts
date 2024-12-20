import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'use-wizard': path.resolve(__dirname, '../use-wizard/src'),
        },
    },
});
