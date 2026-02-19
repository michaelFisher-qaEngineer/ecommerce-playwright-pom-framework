const {test, expect, chromium} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('@sanity TC01_LaunchApplication', async ({page}) => {

    // test.beforeAll(async () => {
    //     browser = await chromium.launch({
    //         args:['--start-maximized'],
    //         headless: false
    //     });
    // });

    //change this to POM-version with methods from home page:

    const home = new HomePage(page);
    await home.goto();
    await expect(page).toHaveTitle("Your store of fun")

});