import { Page, Locator } from '@playwright/test';
import {baseURL} from '../../fixture';

export class HomePage {

    page: Page;

    //Top Nav Bar
    topNavBar: Locator;
    servicesHyperlink: Locator;
    aboutHyperlink: Locator;
    blogHyperlink: Locator;
    educationHyperlink: Locator;
    //---

    siteLogo: Locator;
    URL: String;
    
    constructor(page: Page) {
        this.page = page;

        //Top Nav Bar
        this.topNavBar = this.page.locator('#menu-main-menu');
        this.servicesHyperlink = this.page.locator('a >> "Services"')
        this.aboutHyperlink = this.page.locator('a >> "About"')
        this.blogHyperlink = this.page.locator('a >> "Blog"');
        this.educationHyperlink = this.page.locator('a >> "Education"');
        //---

        this.siteLogo = this.page.locator('//img[@class="wp-image-218123 lazyloaded"]');

        this.URL = baseURL;
    }

    async goTo(){
        await this.page.goto(baseURL)
    }

    getSiteLogo(): Locator {
        return this.siteLogo;
    }

    getTopNavBar(): Locator {
        return this.topNavBar;
    }

    getServicesHyperlink(): Locator {
        return this.servicesHyperlink;
    }

    getAboutHyperlink(): Locator {
        return this.aboutHyperlink;
    }

    getBlogHyperlink(): Locator {
        return this.blogHyperlink;
    }

    getEducationHyperlink(): Locator {
        return this.educationHyperlink;
    }
}
