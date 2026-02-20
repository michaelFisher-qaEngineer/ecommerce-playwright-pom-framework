
class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmail = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.loginPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async enterEmail(str) {
        await this.loginEmail.fill(str);
    }

    async enterPassword(str) {
        await this.loginPassword.fill(str);
    }

    async clicckLoginButton() {
        await this.loginButton.click();
    }

    async login(em, pw) {
        await this.enterEmail(em);
        await this.enterPassword(pw);
        await this.clicckLoginButton();
    }
}
module.exports = {LoginPage}