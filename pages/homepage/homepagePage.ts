// Import necessary modules and types from Playwright
import { Page, Locator } from '@playwright/test';
import '../../fixture'; // Assuming this is a custom fixture import

// Define your class
export class HomePage {
    page: Page;
    siteLogo: Locator;
    
    constructor(page: Page) { // Pass 'page' as parameter to constructor
        this.page = page;
        this.siteLogo = this.page.locator("//img[@class='wp-image-218123 ls-is-cached lazyloaded']");
    }

    getSiteLogo(): Locator { // Correct method declaration syntax
        return this.siteLogo;
    }
}