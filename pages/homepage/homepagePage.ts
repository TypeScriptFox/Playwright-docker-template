import { Page, Locator } from '@playwright/test';
import {baseURL} from '../../fixture'; 

export class HomePage {
    page: Page;
    siteLogo: Locator;
    URL: String;
    
    constructor(page: Page) { 
        this.page = page;
        this.siteLogo = this.page.locator("//img[@class='wp-image-218123 ls-is-cached lazyloaded']");
        this.URL = baseURL;
    }

    async goTo(){
        await this.page.goto(baseURL)
    }

    getSiteLogo(): Locator { 
        return this.siteLogo;
    }
}