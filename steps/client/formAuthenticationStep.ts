import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
const {Given, When, Then} = createBdd(test)

When('User enters {string} text into {string} field', async ({formAuthenticationPage}, value: string, fileName: string) => {
 await formAuthenticationPage.inputToTextBox(value, fileName)
});

When('User clicks login button', async ({formAuthenticationPage}) => {
 await formAuthenticationPage.clickLoginButton()
});
  