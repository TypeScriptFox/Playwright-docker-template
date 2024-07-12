//base.js
import base = require('@playwright/test');
const { LoginPage: HomePage } = require('./pages/homepage/homepagePage')
const { DashboardPage } = require('../pages/DashboardPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
});
exports.expect = base.expect;