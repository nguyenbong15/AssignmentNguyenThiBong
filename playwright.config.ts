import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  importTestFrom: 'core/fixturesFile/fixtures.ts',
  paths: ['./features/*.feature'],
  require: ['steps/**/*.ts'],
  quotes: 'backtick',
  featuresRoot: './features',
  disableWarnings: { importTestFrom: true }
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", { outputFile: "cucumber-report/report.html" }),
  ],
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:8080',
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: 'chromium' },
    },
  ],
});
