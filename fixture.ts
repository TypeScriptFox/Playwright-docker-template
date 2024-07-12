import base = require('@playwright/test');
import {HomePage} from './pages/homepage/homepagePage'

const test = base.test.extend({
    homePage: async ({ page }, use) => {
        const homePage: HomePage = new HomePage(page)
        await use(new HomePage(page));
    }
});

const baseURL: string = "https://ultimateqa.com/"

export {
    baseURL,
    test
}
