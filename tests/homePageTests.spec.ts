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

test("Expect sub menu that contains the following: 'Free Courses', 'Selenium Java', 'Selenium C#', 'Selenium Resources', 'Automation Exercises', 'Java SDET Academy' when mouse is over Education", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getEducationDropDown()).toBeVisible();
  await expect(homePage.getEducationDropDown()).toContainText('Free Courses');
  await expect(homePage.getEducationDropDown()).toContainText('Selenium Java');
  await expect(homePage.getEducationDropDown()).toContainText('Selenium C#');
  await expect(homePage.getEducationDropDown()).toContainText('Selenium Resources');
  await expect(homePage.getEducationDropDown()).toContainText('Automation Exercises');
  await expect(homePage.getEducationDropDown()).toContainText('Java SDET Academy');
});