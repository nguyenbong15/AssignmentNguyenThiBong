import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
const {Given, When, Then} = createBdd(test)

When('User navigates to {string}', async ({homePage}, linkName: string) => {
   await homePage.navigateToLink(linkName)
});
