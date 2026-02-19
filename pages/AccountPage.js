
class AccountPage {
    constructor(page) {
        this.page = page;
        this.myAccountLabel = page.locator('h1');
    }

    getMyAccountLabel() {
        return this.myAccountLabel;
    }

}

module.exports = {AccountPage};