import { BasePage } from "./BasePage";

// We can do assertion in this page:


export class DemoLoginPage extends BasePage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page);

        this.loginPage_Username_Box = page.locator("//input[@id='username']");
        this.loginPage_Password_Box = page.locator("//input[@id='password']");
        this.loginPage_Submit = page.locator("//button[@id='submit']");
    }

    async browserLaunch(url) {
        await this.openURL(url);
    }

    async enterUserName(text) {
        await this.fill(this.loginPage_Username_Box, text);
    }

    async enterPassword(text) {
        await this.fill(this.loginPage_Password_Box, text);
    }

    async clickSubmitButton() {
        await this.click(this.loginPage_Submit);
    }
}