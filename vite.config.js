import {defineConfig} from "vite";

export default defineConfig({
    build: {
        // generate .vite/manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: 'app.ts',
            output: {
                manualChunks: undefined,
            },
        }
    }
})