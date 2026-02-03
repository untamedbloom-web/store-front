import { test, expect } from '@playwright/test';

test.describe('Contact Page Mobile Layout', () => {
    test.use({ viewport: { width: 390, height: 844 } }); // iPhone 12/13 width

    test('should stack form and info on mobile', async ({ page }) => {
        await page.goto('/contact');

        // Check if intro is visible
        await expect(page.locator('.page-header h1')).toContainText("Let's Create Together");

        // Check if form wrapper is visible and roughly takes up full width (minus padding)
        const formWrapper = page.locator('.form-wrapper');
        await expect(formWrapper).toBeVisible();
        const formBox = await formWrapper.boundingBox();
        expect(formBox).not.toBeNull();
        if (!formBox) return;

        expect(formBox.width).toBeLessThan(390); // Should fit
        expect(formBox.width).toBeGreaterThan(300); // Should be reasonably wide

        // Check order: Form should be visually above Info (due to order: 1 vs order: 2)
        // Note: Playwright checks DOM order by default, but we used CSS order.
        // We can check bounding box Y coordinates.
        const infoWrapper = page.locator('.info-wrapper');
        await expect(infoWrapper).toBeVisible();
        const infoBox = await infoWrapper.boundingBox();
        expect(infoBox).not.toBeNull();
        if (!infoBox) return;

        expect(formBox.y).toBeLessThan(infoBox.y);

        // Check for no horizontal scroll
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        const innerWidth = await page.evaluate(() => window.innerWidth);
        expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
    });

    test('inputs should have sufficient spacing', async ({ page }) => {
        await page.goto('/contact');
        const inputs = page.locator('.form-group');
        const count = await inputs.count();
        expect(count).toBeGreaterThan(0);

        // Check spacing between first two groups
        const first = await inputs.nth(0).boundingBox();
        const second = await inputs.nth(1).boundingBox();

        expect(first).not.toBeNull();
        expect(second).not.toBeNull();

        if (first && second) {
            expect(second.y).toBeGreaterThan(first.y + first.height);
        }
    });
});
