import { test, expect } from '@playwright/test';

test('home', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.getByRole('paragraph')).toContainText('home works!');
});
