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
  await expect(homePage.getBlogHyperlink()).toBeVisible();
  await expect(homePage.getEducationHyperlink()).toBeVisible();
});

test("Expect to see 'Free Courses', 'Selenium Java', and 'Selenium C#' when hovering over Education", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getCoursesDropdown()).toBeVisible();
  await expect(homePage.getCoursesDropdown()).toContainText('Free Courses');
  await expect(homePage.getCoursesDropdown()).toContainText('Selenium Java');
  await expect(homePage.getCoursesDropdown()).toContainText('Selenium C#');
})

//test("Expect all dropdown options to have font-family Open Sans, Helvetica, Ariel, Lucida, and sans-serif", async ({ homePage }) => {
//  await homePage.getEducationHyperlink().hover();
//  await expect(homePage.getCoursesDropdown()).toHaveCSS('font-family', 'Open Sans, Helvetica, Arial, Lucida, sans-serif');
//})