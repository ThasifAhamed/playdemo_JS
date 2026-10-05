import {expect} from "@playwright/test"

export class BasePage{
    /** @param {import('@playwright/test').Page} page */
    constructor(page){
        this.page = page;
    }

    //URL:
    async openURL(URL){
        await this.page.goto(URL)
        await expect(this.page).toHaveURL(URL)
    }
    
    //Fill or type -> Sendkeys
    async fill(element, Text){
       //await this.page.locator("").fill("Thasif")
       await element.fill(Text)
    }
    
    //Click a element
    async click(element){
        await element.click()
    }

    //Single select dropdown:
    async singleSelectDropdown(element, option){
        await element.selectOption(option)
    }

    //Multi Select Dropdown:
    async multiselectDropdown(element, option1, option2){
        await element.selectOption([option1, option2])
    }

}