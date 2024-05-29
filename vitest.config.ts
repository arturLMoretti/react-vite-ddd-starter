import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    coverage: {
      include: ["src/**/*"],
    },
    clearMocks: true,
  },
})