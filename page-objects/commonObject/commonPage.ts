import { BrowserContext, expect, Locator, Page } from "@playwright/test";

export class CommonPage {
    
    readonly page: Page;
    readonly context: BrowserContext
    
    constructor(page: Page, context: BrowserContext) {
        this.page = page,
            this.context = context
    }
    public async openURL(url: string) {
        await this.page.goto(url);
    }

    public async waitForElementVisible(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'visible' });
    }

    public async waitForTimeout(second: any) {
        await this.page.waitForTimeout(second * 1000)
    }

    public async waitForElementInVisible(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'hidden' });
    }

    public async waitForPageLoad() {
        (await this.page.waitForLoadState('domcontentloaded', { timeout: 30000 }));
    }

    public async clickToElement(locator: string) {
        await this.waitForElementVisible(locator)
        await this.page.locator(locator).click()
    }

    public async textIsVisible(text: string) {
        await expect(this.page.getByText(text, {exact:false})).toBeVisible()
    }

    public async uploadFile(locator: string, fileName:string) {
        await this.page.locator(locator).setInputFiles("resources/upload/"+ fileName)
    }
   
    public async selectOptionDropdownByLable(selector: string, option:string) {
        await this.page.selectOption(selector, {label: option})
    }

    public async locator(locator: string): Promise<Locator> {
       return await this.page.locator(locator)
    }
}