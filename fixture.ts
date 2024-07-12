import base = require('@playwright/test');
import {HomePage} from './pages/homepage/homepagePage'

const test = base.test.extend({
    homePage: async ({ page }, use) => {
        const homePage: HomePage = new HomePage(page)
        await use(homePage);
    }
});

const baseURL: string = "https://ultimateqa.com/"

export {
    baseURL,
    test
}
