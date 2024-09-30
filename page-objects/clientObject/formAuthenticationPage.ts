import { BrowserContext, Page } from "@playwright/test";
import { CommonPage } from "../commonObject/commonPage";
import { FormAuthenticationUI } from "../pageUI/formAuthenticationUI";

export class FormAuthenticationPage extends CommonPage{

    constructor(page: Page, context: BrowserContext){
        super(page,context)
    }

    public async inputToTextBox(value: string, fileName: string) {
      await this.page.getByLabel(fileName).fill(value)
    }

    public async clickLoginButton() {
      await this.waitForElementVisible(FormAuthenticationUI.LOGIN_BUTTON)
      await this.clickToElement(FormAuthenticationUI.LOGIN_BUTTON)
    }

}