const { expect } = require('@playwright/test');

class OrderSuccessPage {
    constructor(page) {
        this.page = page;
        this.successMessage = page.getByRole('heading', { name: 'Your order has been placed!' });
    }

    async verifySuccessMessage() {
        await expect(this.successMessage)
            .toContainText('Your order has been placed!');
    }
}

module.exports = {OrderSuccessPage}