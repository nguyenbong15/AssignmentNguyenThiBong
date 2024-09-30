import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
const {Given, When, Then} = createBdd(test)

When('User {string} to checkbox {string}', async ({checkboxesPage}, action: string, index:string) => {
    await checkboxesPage.checkOrUncheckToCheckbox(action, index)
})
 
Then('User should see checkbox {string} is {string}', async ({checkboxesPage}, index:string, status: string) => {
  await checkboxesPage.verifyStatusOfCheckbox(status, index)
});
