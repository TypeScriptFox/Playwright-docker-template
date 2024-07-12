import { expect } from 'playwright/test';
import { test } from '../fixture'

test("Expect to see site Logo", async ({ homePage }) => {
  await homePage.goTo();
  expect(homePage.getSiteLogo)
});
