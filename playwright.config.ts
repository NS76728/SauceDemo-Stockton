import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/**/*.feature'],
  
  // Clean modern approach: array including step folders and your root fixtures file
  steps: [
    'tests/steps/**/*.ts', 
    './fixtures.ts'
  ],
});

export default defineConfig({
  testDir,
  reporter: 'html',
   use: {
    headless: false, 
    // 👈 This launchOptions wrapper block is required for slowMo
    launchOptions: {
      slowMo: 500, // Injects a 0.5-second pause after every single UI action
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
