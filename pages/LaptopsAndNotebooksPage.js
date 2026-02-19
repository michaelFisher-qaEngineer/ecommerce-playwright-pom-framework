const { expect } = require('@playwright/test');

class LaptopsAndNotebooksPage {
    constructor(page) {
        this.page = page;
        this.productLinks = page.locator('#product-list .product-thumb h4 a');
        this.productCard = page.locator('.product-thumb');
        this.wishlist = page.locator('div.button').locator('button')
        this.successAlert = page.getByText('Success: You have added HP');
    }

    

    async selectProduct(name) {
        await this.productLinks.filter({ hasText: name }).click();
    }

    async addToWishList(index) {
        await this.page.mouse.wheel(0, 500);  
        // await this.foo.waitFor({ state: 'visible' }); 
        await this.wishlist.nth(index).isVisible;
        await this.wishlist.nth(index).click();
    }

    async verifyAlertText() {
        await expect(this.successAlert).toContainText('Success');
    }

}

module.exports = {LaptopsAndNotebooksPage}