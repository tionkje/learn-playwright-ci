import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'pnpm serve',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
