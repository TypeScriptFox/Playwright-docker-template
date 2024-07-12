import endpoint from "../fixture"
import { test, expect } from '@playwright/test'

test("Expect to have 0 options for signing up", async ({ page }) => {

  // Go to the Droplets product page of DigitalOcean web page
  await page.goto(endpoint.ULTIMATE_QA_URL);

});
