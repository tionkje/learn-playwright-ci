import { test, expect } from '@playwright/test';

test('counter increments when button is clicked', async ({ page }) => {
    await page.goto('/counter.html');

    // Verify initial counter value is 0
    const counter = page.locator('#counter');
    await expect(counter).toHaveText('0');

    // Click the button and verify counter increments to 1
    const button = page.locator('button');
    await button.click();
    await expect(counter).toHaveText('1');

    // Click again and verify counter increments to 2
    await button.click();
    await expect(counter).toHaveText('2');

    // Click multiple times and verify counter increments correctly
    await button.click();
    await button.click();
    await button.click();
    await expect(counter).toHaveText('5');
});
