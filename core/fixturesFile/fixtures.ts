import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '../../page-objects/clientObject/homePage';
import { CommonPage } from '../../page-objects/commonObject/commonPage';
import { FormAuthenticationPage } from '../../page-objects/clientObject/formAuthenticationPage';
import { CheckboxesPage } from '../../page-objects/clientObject/checkboxesPage';
import { DropdownPage } from '../../page-objects/clientObject/dropdownPage';
import { FileUploadsPage } from '../../page-objects/clientObject/fileUploadsPage';

type myPage = {
  homePage: HomePage,
  commonPage: CommonPage,
  formAuthenticationPage: FormAuthenticationPage
  checkboxesPage: CheckboxesPage
  dropdownPage: DropdownPage
  fileUploadsPage: FileUploadsPage
};

export const test = base.extend<myPage>({
  commonPage: async ({ page, context }, use) => { await use(new CommonPage(page, context)) },
  homePage: async ({ page, context }, use) => { await use(new HomePage(page, context)) },
  formAuthenticationPage: async ({ page, context }, use) => { await use(new FormAuthenticationPage(page, context)) },
  checkboxesPage: async ({ page, context }, use) => { await use(new CheckboxesPage(page, context)) },
  dropdownPage: async ({ page, context }, use) => { await use(new DropdownPage(page, context)) },
  fileUploadsPage: async ({ page, context }, use) => { await use(new FileUploadsPage(page, context)) }
});

// export const { Given, When, Then } = createBdd(test);