import { BrowserContext, Page } from "@playwright/test";
import { CommonPage } from "../commonObject/commonPage";

export class HomePage extends CommonPage{

    constructor(page: Page, context: BrowserContext){
        super(page,context)
    }

    public async navigateToLink(linkName: string) {
        await this.page.getByRole("link",{name: linkName}).click();
    }
}