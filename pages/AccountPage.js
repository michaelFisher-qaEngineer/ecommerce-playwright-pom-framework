const { expect } = require('@playwright/test');

class AccountPage {
    constructor(page) {
        this.page = page;
        this.myAccountLabel = page.locator('h1');
        this.affiliateLink = page.getByRole('link', { name: 'Affiliate', exact: true });
        this.affiliateSuccessMessage = page.getByText('Success: Your affiliate');
    }

    async openAffiliateLink() {
        await this.affiliateLink.click();
    }

    async verifyMyAccountLabel() {
        await expect(this.myAccountLabel).toContainText('My Account');
    }

    async verifyAffiliateSuccessMessage() {
        await expect(this.affiliateSuccessMessage).toContainText('Success');
    }

}

module.exports = {AccountPage};