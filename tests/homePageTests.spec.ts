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

test("Expect the sub menu options under Education to have font 'Open Sans',Helvetica,Arial,Lucida,sans-serif;", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getEducationDropDown()).toHaveCSS('font-family', '"Open Sans", Helvetica, Arial, Lucida, sans-serif');
});

test("Expect the sub menu options under Education to have font size 14px", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getEducationDropDown()).toHaveCSS('font-size', '14px');
});

test("Expect the sub menu options under Education to have font weight 500", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getEducationDropDown()).toHaveCSS('font-weight', '500');
});

test("Expect the sub menu do not be visible when mouse is moved outside menu area", async ({ homePage }) => {
  await homePage.getEducationHyperlink().hover();
  await expect(homePage.getEducationDropDown()).toBeVisible();
  await homePage.getServicesHyperlink().hover();
  await expect(homePage.getEducationDropDown()).not.toBeVisible();
});

test("Expect the 'Schedule a free discover session' button to have font color #003c96 when hovered over", async ({ homePage }) => {
  await homePage.getFreeDiscoverSessionButtonBlue().hover();
  await expect(homePage.getFreeDiscoverSessionButtonBlue()).toHaveCSS('color', 'rgb(0, 60, 150)');
});