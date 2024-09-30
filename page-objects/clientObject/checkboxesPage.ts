import { BrowserContext, expect, Page } from "@playwright/test";
import { CommonPage } from "../commonObject/commonPage";
import { CheckboxUI } from "../pageUI/checkboxesUI";

export class CheckboxesPage extends CommonPage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context)
  }

  public async checkOrUncheckToCheckbox(action: string, index:string) {
    if (action == 'checks') {
      await this.page.locator(CheckboxUI.CHECKBOX(index)).check()
    } else {
      await this.page.locator(CheckboxUI.CHECKBOX(index)).uncheck()
    }
  }

  
  public async verifyStatusOfCheckbox(status: string, index:string) {
    if(status == 'checked') {
      await expect(this.page.locator(CheckboxUI.CHECKBOX(index))).toHaveAttribute('checked')
    } else {
      await expect(this.page.locator(CheckboxUI.CHECKBOX(index))).not.toHaveAttribute('checked')
    }
  }

}