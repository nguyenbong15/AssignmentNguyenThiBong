import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
const {Given, When, Then} = createBdd(test)

Given('User opens page', async ({page}) => {
   await page.goto("/")
});

Then('User should see {string} text', async ({commonPage}, text: string) => {
   await commonPage.textIsVisible(text)
});