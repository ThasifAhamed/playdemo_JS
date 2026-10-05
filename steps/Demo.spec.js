import { createBdd } from "playwright-bdd";
import { DemoLoginPage } from "../pages/DemoLoginPage";

const { Given, When, Then, Before } = createBdd();

//this will help for auto suggestion  
/** @type {DemoLoginPage} */

let demologin;

//Create object globally 
Before(async ({ page }) => {
    demologin = new DemoLoginPage(page);
});

Given("I am on the login page", async ({  }) => {
    await demologin.browserLaunch("https://practicetestautomation.com/practice-test-login/");
});

When("I enter a valid username", async ({  }) => {
    await demologin.enterUserName("Thasif");
});

When("I enter a valid password", async ({  }) => {
    await demologin.enterPassword("123456");
});

When("I click the Login button", async ({  }) => {
    await demologin.clickSubmitButton();
});

Then("I should be successfully logged in", async ({  }) => {
    //await demologin.verifySuccessfulLogin();
});