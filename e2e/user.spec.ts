import { test, expect } from '@playwright/test';

test('user', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'User' }).click();
  await expect(page.locator('app-user')).toContainText('Matheus -> MATHEUS -> ️⭐ suehtaM ️⭐');
  await expect(page.getByRole('list')).toContainText('Currency with "currency" $4,560.34');
});
