import { test, expect } from '@playwright/test';

test('Sourcing page loads correctly', async ({ page }) => {
    await page.goto('/sourcing');

    // Check title
    await expect(page).toHaveTitle(/Ethical Sourcing | Untamed Blooms Co./);

    // Check Header presence (e.g. logo or nav)
    const header = page.locator('header.site-header');
    await expect(header).toBeVisible();

    // Check Footer presence
    const footer = page.locator('footer.site-footer');
    await expect(footer).toBeVisible();

    // Check content "Rooted in nature" or similar unique text
    await expect(page.locator('.hero-content h1')).toContainText('Our Roots');
    await expect(page.locator('text=Local Farms First')).toBeVisible();

    // Check navigation link works from home
    await page.goto('/');
    await page.click('nav a[href="/sourcing"] >> nth=0'); // Click desktop nav
    await expect(page).toHaveURL(/.*\/sourcing/);
});
