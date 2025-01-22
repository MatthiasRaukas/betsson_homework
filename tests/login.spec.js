import { test, expect } from '@playwright/test';

test.afterEach(async({page}) => {
    await page.close();
});

test('Valid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
});

test('Invalid login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'invafflid_user');
    await page.fill('#password', 'invalffid_password');
    await page.click('#login-button');
    const error = page.locator('[data-test="error"]');
    await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Empty login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
    const error = page.locator('[data-test="error"]');
    await expect(error).toHaveText('Epic sadface: Username is required');
});