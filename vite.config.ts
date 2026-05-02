import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
    base: './',
    plugins: [
        TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
        react(),
        tailwindcss(),
        tsConfigPaths(),
    ],
    build: {
        outDir: 'dist',
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            '@tanstack/react-router',
            'framer-motion',
            'lucide-react',
        ],
    },
})