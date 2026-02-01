import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Untamed Blooms Co./);
});

test('has main heading', async ({ page }) => {
    await page.goto('/');

    // Expects the main heading to be visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('navigation links work', async ({ page }) => {
    await page.goto('/');

    // Check if header exists
    const header = page.locator('.site-header');
    await expect(header).toBeVisible();

    // Check for navigation links
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' }).first()).toBeVisible();
});

test('services page loads', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { name: 'Our Offerings' })).toBeVisible();
});

test('contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: 'Let\'s Create Together' })).toBeVisible();
});
