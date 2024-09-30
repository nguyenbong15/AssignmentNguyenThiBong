import { BrowserContext, expect, Page } from "@playwright/test";
import { CommonPage } from "../commonObject/commonPage";
import { FileUploadUI } from "../pageUI/fileUploadsUI";

export class FileUploadsPage extends CommonPage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context)
  }
  public async uploadfile(fileName: string) {
    await this.uploadFile(FileUploadUI.CHOOSE_FILE, fileName)
  }
  public async clickToUploadButton() {
    await this.waitForElementVisible(FileUploadUI.UPLOAD_BUTTON)
    await this.clickToElement(FileUploadUI.UPLOAD_BUTTON)
  }
}