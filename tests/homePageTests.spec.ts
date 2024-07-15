import { expect } from 'playwright/test';
import { test } from '../fixture'

test.beforeEach(async ({homePage}) => {
  await homePage.goTo();
})

test("Expect to see site Logo", async ({ homePage }) => {
  await expect(homePage.getSiteLogo()).toBeVisible();
});


test("Expect top nav bar to have 'Services', 'About', 'Blog', and Education'", async ({ homePage }) => {
  await expect(homePage.getServicesHyperlink()).toBeVisible();
  await expect(homePage.getAboutHyperlink()).toBeVisible();
});