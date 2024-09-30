import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
const {Given, When, Then} = createBdd(test)

When('User selects {string} option in dropdown', async ({dropdownPage}, option: string) => {
 await dropdownPage.selectOptionOfDropdown(option)
});

// 2. Missing step definition for "features\dropdown.feature:7:9"
Then('User should see {string} option is selected', async ({dropdownPage}, option: string) => {
  await dropdownPage.optionIsSelected(option)
});