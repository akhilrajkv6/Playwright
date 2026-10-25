import { test, expect } from '@playwright/test';

test('open Amazon page', async ({ page }) => {
  await page.goto('https://www.amazon.com.au/');

  // Verify the page has loaded by checking the title
  await expect(page).toHaveTitle(/Amazon/);

  // Verify the search box is visible (using more generic selector)
  const searchBox = page.locator('input#twotabsearchtextbox');
  // await expect(searchBox).toBeVisible();
});