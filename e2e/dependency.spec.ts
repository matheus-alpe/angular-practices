import { test, expect } from '@playwright/test';

test('dependency', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Dependency' }).click();
  await expect(page.getByRole('list')).toContainText('Ferrari');
  await expect(page.locator('app-dependency')).toContainText(
    'dependency works!FerrariLamborghiniPorsche Ferrari ⭐️ Lamborghini ⭐️ Porsche',
  );
});
