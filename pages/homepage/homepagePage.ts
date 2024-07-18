import { Page, Locator } from '@playwright/test';
import {baseURL} from '../../fixture'; 

export class HomePage {

    private page: Page;

    //Top Nav Bar
    private topNavBar: Locator;
    private servicesHyperlink: Locator;
    private aboutHyperlink: Locator;
    private blogHyperlink: Locator;
    private educationHyperlink: Locator;
    //---

    private siteLogo: Locator;
    private URL: String;
    
    constructor(page: Page) { 
        this.page = page;

        //Top Nav Bar
        this.topNavBar = this.page.locator('#menu-main-menu');
        this.servicesHyperlink = this.page.locator('a >> "Services"')
        this.aboutHyperlink = this.page.locator('a >> "Services"')
        this.blogHyperlink = this.page.locator('.menu-item-218226 >> a >> "Blog"')
        this.educationHyperlink = this.page.locator('.menu-item-218225 >> a  >> "Education"')
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
        return this.servicesHyperlink;
    }

    getBlogHyperlink(): Locator {
        return this.blogHyperlink;
    }

    getEducationHyperlink(): Locator {
        return this.educationHyperlink;
    }
}