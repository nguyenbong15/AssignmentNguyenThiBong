import { BrowserContext, expect, Page } from "@playwright/test";
import { CommonPage } from "../commonObject/commonPage";
import { DropDownUI } from "../pageUI/dropdownUI";

export class DropdownPage extends CommonPage {

  constructor(page: Page, context: BrowserContext) {
    super(page, context)
  }
  
  public async selectOptionOfDropdown(option: string) {
   await this.waitForElementVisible(DropDownUI.DROPDOWN_LIST)
   await this.selectOptionDropdownByLable(DropDownUI.DROPDOWN_LIST,option)
  }

  public async optionIsSelected(option: string) {
   await expect(this.page.locator(DropDownUI.OPTION_IN_DROPDOWN_LIST(option))).toHaveAttribute('selected')
  }
}