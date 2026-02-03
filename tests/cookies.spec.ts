import { test, expect } from '@playwright/test';

test('Cookies Policy page loads correctly', async ({ page }) => {
    await page.goto('/cookies');

    // Check title
    await expect(page).toHaveTitle(/Cookies Policy/);

    // Check Header presence (e.g. logo or nav)
    const header = page.locator('header.site-header');
    await expect(header).toBeVisible();

    // Check Footer presence
    const footer = page.locator('footer.site-footer');
    await expect(footer).toBeVisible();

    // Check content
    await expect(page.locator('.legal-page h1')).toHaveText('Cookies Policy');
    await expect(page.locator('text=What are cookies?')).toBeVisible();
});
