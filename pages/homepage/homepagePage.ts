import { Page, Locator } from '@playwright/test';
import {baseURL} from '../../fixture'; // Assuming this is a custom fixture import

// Define your class
export class HomePage {
    page: Page;
    siteLogo: Locator;
    URL: String;
    
    constructor(page: Page) { // Pass 'page' as parameter to constructor
        this.page = page;
        this.siteLogo = this.page.locator("//img[@class='wp-image-218123 ls-is-cached lazyloaded']");
        this.URL = baseURL;
    }

    async goTo(){
        await this.page.goto(baseURL)
    }

    getSiteLogo(): Locator { // Correct method declaration syntax
        return this.siteLogo;
    }
}