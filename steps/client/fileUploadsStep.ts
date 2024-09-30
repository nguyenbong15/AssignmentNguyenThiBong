import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../../core/fixturesFile/fixtures";
import path from "path";
const {Given, When, Then} = createBdd(test)

When('User uploads {string} file', async ({fileUploadsPage}, fileName: string) => {
    await fileUploadsPage.uploadfile(fileName)
})

When('User clicks to upload button', async ({fileUploadsPage}) => {
    await fileUploadsPage.clickToUploadButton()
})
