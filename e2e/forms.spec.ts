import { test, expect } from '@playwright/test';

test('forms', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('textbox', { name: 'Favorite framework:' }).click();
  await page.getByRole('textbox', { name: 'Favorite framework:' }).fill('teste');
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Show Framework' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('matheus');
  await expect(page.locator('app-forms')).toContainText('Name: matheus');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('matt@tes.com');
  await expect(page.locator('app-forms')).toContainText('Email: matt@tes.com');
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('app-forms')).toContainText('Name:');
  await expect(page.locator('app-forms')).toContainText('Email:');
});
