const {test, expect, chromium} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { AccountPage } = require('../pages/AccountPage')
// const { AccountPage } = require('../pages/AccountPage');

test('@sanity @datadriven @regression TC02_Login', async ({page}) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);
    await home.goto();
    // await page.pause();
    await home.clickMyAccount();
    await home.clickLogin();

    await login.login("michael.fisher.qaengineer@gmail.com", "123321");
    await console.log(account.getMyAccountLabel());
    await expect(account.getMyAccountLabel()).toContainText("My Account");

});