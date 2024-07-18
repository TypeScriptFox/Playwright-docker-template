import { Page, Locator } from '@playwright/test';
import { baseURL } from '../../fixture';

export class HomePage {
    private page: Page;
    private topNavBar: Locator;
    private servicesHyperlink: Locator;
    private aboutHyperlink: Locator;
    private blogHyperlink: Locator;
    private educationHyperlink: Locator;
    private educationDropDown: Locator;
    private siteLogo: Locator;
    private URL: string;
    private freeDiscoverSessionButtonBlue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.topNavBar = this.page.locator('#menu-main-menu');
        this.servicesHyperlink = this.page.locator('a >> "Services"');
        this.aboutHyperlink = this.page.locator('a >> "Services"');
        this.blogHyperlink = this.page.locator('.menu-item-218226 >> a >> "Blog"');
        this.educationHyperlink = this.page.locator('.menu-item-218225 >> a  >> "Education"');
        this.educationDropDown = this.page.locator('#menu-main-menu > #menu-item-218225  > ul.sub-menu');
        this.siteLogo = this.page.locator('//img[@class="wp-image-218123 lazyloaded"]');
        this.URL = baseURL;
        this.freeDiscoverSessionButtonBlue = this.page.locator('.et_pb_button_0');
    }

    async goTo() {
        await this.page.goto(baseURL);
    }

    // Getters
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

    getEducationDropDown(): Locator {
        return this.educationDropDown;
    }

    getFreeDiscoverSessionButtonBlue(): Locator {
        return this.freeDiscoverSessionButtonBlue;
    }
}
